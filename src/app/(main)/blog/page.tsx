import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
import { DEFAULT_BLOG_THUMBNAIL } from "@/constant/blog";
import BlogLastestArticlesPanel from "@/container/blog/BlogLastestArticlesPanel";
import BlogMainPanel from "@/container/blog/BlogMainPanel";
import { BlogPost } from "@/types/post";

import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

async function getPosts(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), "public", "posts.json");
  const file = await fs.readFile(filePath, "utf-8");
  const posts = JSON.parse(file) as Array<
    Omit<BlogPost, "thumbnail"> & {
      thumbnail?: string;
      image?: string;
    }
  >;

  return posts.map(({ image, ...post }) => {
    return {
      ...post,
      thumbnail: post.thumbnail || image || DEFAULT_BLOG_THUMBNAIL,
    };
  });
}

function pickRandomPosts(posts: BlogPost[], count: number) {
  const shuffledPosts = [...posts];

  for (let index = shuffledPosts.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledPosts[index], shuffledPosts[randomIndex]] = [
      shuffledPosts[randomIndex],
      shuffledPosts[index],
    ];
  }

  return shuffledPosts.slice(0, count);
}

export default async function Page() {
  const posts = await getPosts();
  const featuredPosts = pickRandomPosts(posts, 4);

  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 py-28 px-10`}
    >
      <NavHighlighter path="/blog" />
      {posts.length === 0 ? (
        <div className="flex items-center justify-center h-screen w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <BlogMainPanel contents={featuredPosts} />
          <BlogLastestArticlesPanel contents={posts} />
        </>
      )}
    </div>
  );
}

// 칼럼 내부 컨테이너 - 메인, Latest Article with Category&Search
