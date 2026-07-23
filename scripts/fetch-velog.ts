import { TAG_CANDIDATES } from "@/constant/post_tags";
import { DEFAULT_BLOG_THUMBNAIL } from "@/constant/blog";
import { BlogPost, PostForTagging } from "@/types/post";
import "dotenv/config";

import fs from "node:fs/promises";
import path from "node:path";

import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import * as cheerio from "cheerio";
import Parser from "rss-parser";
import { z } from "zod";

const VELOG_RSS_URL = "https://v2.velog.io/rss/yoy0z-maps";
const POST_LIMIT = 5;

const TagSchema = z.enum(TAG_CANDIDATES);

/**
 * OpenAI가 반드시 반환해야 하는 구조.
 *
 * id:
 *   우리가 입력으로 보낸 게시글 식별자
 *
 * tags:
 *   TAG_CANDIDATES 안에서 선택한 2~3개의 태그
 */
const TaggingResultSchema = z.object({
  posts: z.array(
    z.object({
      id: z.string(),
      tags: z.array(TagSchema).min(2).max(3),
    }),
  ),
});

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "OPENAI_API_KEY가 없습니다. 프로젝트 루트의 .env를 확인하세요.",
  );
}

const openai = new OpenAI({
  apiKey,
});

const parser = new Parser();

async function fetchOgImage(postUrl: string): Promise<string> {
  try {
    const response = await fetch(postUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; YoyozMapsBlog/1.0; +https://yoyoz-maps-blog.vercel.app)",
      },
    });

    if (!response.ok) {
      throw new Error(
        `HTML 요청 실패: ${response.status} ${response.statusText}`,
      );
    }

    const html = await response.text();
    // HTML 문자열을 Cheerio가 탐색할 수 있는 문서 구조로 변환
    // 반환되는 $는 CSS 선택자로 HTML 요소를 찾는 함수
    const $ = cheerio.load(html);

    // content 속성값, 즉 이미지 주소
    const ogImage = $('meta[property="og:image"]').attr("content")?.trim();
    const twitterImage = $('meta[name="twitter:image"]')
      .attr("content")
      ?.trim();
    const thumbnail = ogImage || twitterImage || DEFAULT_BLOG_THUMBNAIL;

    if (thumbnail === DEFAULT_BLOG_THUMBNAIL) {
      console.warn(`썸네일 메타 태그 없음: ${postUrl}`);
    }

    return thumbnail;
  } catch (error) {
    console.error(`썸네일 가져오기 실패: ${postUrl}`, error);
    return DEFAULT_BLOG_THUMBNAIL;
  }
}

/**
 * 여러 게시글을 한 번의 OpenAI 요청으로 분석한다.
 */
async function generateTags(
  posts: PostForTagging[],
): Promise<Map<string, string[]>> {
  const response = await openai.responses.parse({
    model: process.env.OPENAI_MODEL ?? "gpt-5.6-luna",

    input: [
      {
        role: "system",
        content: `
너는 개발 블로그의 게시글 분류기다.

각 게시글의 제목과 설명을 분석해서 가장 적절한 태그를 2개 또는 3개 선택하라.

규칙:
1. 제공된 태그 후보에서만 선택한다.
2. 같은 의미의 태그를 중복해서 선택하지 않는다.
3. 너무 포괄적인 태그만 고르지 말고, 핵심 기술 태그를 우선한다.
4. 구체적인 기술 태그가 있으면 일반 태그와 함께 사용할 수 있다.
5. 게시글에 근거가 없는 기술은 추측하지 않는다.

예시:
- Next.js의 Server Component 글
  → ["Next.js", "React", "Frontend"]

- PostgreSQL 정규화 글
  → ["PostgreSQL", "Database Design", "SQL"]

- Docker로 n8n 배포 글
  → ["Docker", "n8n", "Deployment"]
        `.trim(),
      },
      {
        role: "user",
        content: JSON.stringify({
          allowedTags: TAG_CANDIDATES,
          posts,
        }),
      },
    ],

    text: {
      format: zodTextFormat(TaggingResultSchema, "blog_tagging_result"),
    },
  });

  const result = response.output_parsed;

  if (!result) {
    throw new Error("OpenAI로부터 태그 결과를 받지 못했습니다.");
  }

  return new Map(result.posts.map((post) => [post.id, [...post.tags]]));
}

async function main() {
  console.log("Velog RSS를 가져오는 중...");

  const feed = await parser.parseURL(VELOG_RSS_URL);
  const rssItems = feed.items.slice(0, POST_LIMIT);

  /**
   * 화면에는 100자만 보여주지만,
   * LLM에는 조금 더 많은 정보를 전달한다.
   */
  const rawPosts = await Promise.all(
    rssItems.map(async (item, index) => {
      const fullDescription = item.contentSnippet?.trim() ?? "";
      const link = item.link ?? "";
      const thumbnail = link
        ? await fetchOgImage(link)
        : DEFAULT_BLOG_THUMBNAIL;

      if (!link) {
        console.warn(`글 링크 없음: ${item.title ?? `RSS 항목 ${index + 1}`}`);
      }

      return {
        id: String(index),
        title: item.title?.trim() ?? "",
        link,
        pubDate: item.pubDate ?? "",
        isoDate: item.isoDate ?? "",
        thumbnail,

        // 실제 카드에서 보여줄 길이
        description: fullDescription.slice(0, 100),

        // 태그 분석용 텍스트
        taggingDescription: fullDescription.slice(0, 500),
      };
    }),
  );

  console.log(`${rawPosts.length}개 게시글의 태그를 생성하는 중...`);

  const tagMap = await generateTags(
    rawPosts.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.taggingDescription,
    })),
  );

  const posts: BlogPost[] = rawPosts.map((post) => ({
    title: post.title,
    link: post.link,
    pubDate: post.pubDate,
    isoDate: post.isoDate,
    description: post.description,
    tags: tagMap.get(post.id) ?? ["Study", "Developer Tools"],
    thumbnail: post.thumbnail,
  }));

  const outputPath = path.join(process.cwd(), "public", "posts.json");

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await fs.writeFile(outputPath, JSON.stringify(posts, null, 2), "utf-8");

  console.log(`태그 생성 완료: ${outputPath}`);

  for (const post of posts) {
    console.log(`- ${post.title}: ${post.tags.join(", ")}`);
  }
}

main().catch((error: unknown) => {
  console.error("Velog 게시글 생성 실패");

  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error(error);
  }

  process.exit(1);
});
