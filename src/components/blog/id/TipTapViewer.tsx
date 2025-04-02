"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import StarterKit from "@tiptap/starter-kit";
import { useParams } from "next/navigation";

import ArticleTitleView from "./ArticleTitleView";
import ArticleInfoView from "./ArticleInfoView";

interface Data {
  tags: string[];
  title: string;
  category: string;
  profile: {
    nickname: string;
    position: string;
    image: string;
  };
  publishedAt: string;
  image: string;
}

export default function TipTapViewer() {
  const params = useParams();
  const [data, setData] = useState<Data>({
    tags: [],
    title: "",
    category: "",
    profile: {
      nickname: "",
      position: "",
      image: "",
    },
    publishedAt: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const editor = useEditor({
    extensions: extensions,
    editable: false, // ✅ 읽기 전용 모드
    immediatelyRender: false,
  });

  // 로딩 로직 추가
  // 에디터 디자인 변경

  useEffect(() => {
    fetch(`https://api.yoy0z-maps.com/posts/${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setData({
          tags: JSON.parse(data.tags),
          title: data.title,
          category: data.category,
          profile: data.profile,
          publishedAt: new Date(data.published_date).toLocaleDateString(),
          image: data.image,
        });
        try {
          const parsedContent = JSON.parse(data.body); // ✅ 문자열 → JSON 변환
          // ✅ 에디터가 초기화된 후 데이터 반영
          if (editor) {
            console.log(parsedContent);
            editor.commands.setContent(parsedContent);
          }
        } catch (error) {
          console.error("Error parsing content:", error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [editor, params.id]);

  return (
    <div className="w-screen flex items-center justify-center overflow-y-auto pt-24">
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center h-screen">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 border-t-2 border-b-2 border-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <EditorContent
            editor={editor}
            className="font-pretendard overflow-y-auto mb-9"
          >
            <ArticleTitleView
              image={data.image}
              title={data.title}
              category={data.category}
            />
          </EditorContent>
          <ArticleInfoView
            tags={data.tags}
            date={data.publishedAt}
            profile={data.profile}
          />
        </div>
      )}
    </div>
  );
}

const extensions = [
  Image,
  CodeBlock,
  BulletList,
  Blockquote,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];
