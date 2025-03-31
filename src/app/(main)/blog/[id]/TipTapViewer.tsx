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

interface Data {
  tags: string[];
  title: string;
  category: string;
}

export default function TipTapViewer() {
  const params = useParams();
  const [data, setData] = useState<Data>({ tags: [], title: "", category: "" });
  const [isLoading, setIsLoading] = useState(true);

  const editor = useEditor({
    extensions: extensions,
    editable: false, // ✅ 읽기 전용 모드
    immediatelyRender: false,
  });

  // 로딩 로직 추가
  // 에디터 디자인 변경

  useEffect(() => {
    fetch(`https://3.106.169.8/posts/${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setData({
          tags: JSON.parse(data.tags),
          title: data.title,
          category: data.category,
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
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <EditorContent
            editor={editor}
            className="font-pretendard overflow-y-auto"
          >
            <h1>{data.title}</h1>
            <p>{data.category}</p>
            <div className="flex flex-wrap gap-2 text-black">
              {data.tags.map((tag, index) => (
                <p key={index}>|{tag}|</p>
              ))}
            </div>
          </EditorContent>
        </>
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
