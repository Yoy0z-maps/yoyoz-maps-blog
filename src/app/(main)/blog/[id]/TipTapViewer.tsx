"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useParams } from "next/navigation";
export default function ViewPost() {
  const params = useParams();

  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    editable: false, // ✅ 읽기 전용 모드
    immediatelyRender: false,
  });

  // 로딩 로직 추가
  // 에디터 디자인 변경

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        try {
          const parsedContent = JSON.parse(data.body); // ✅ 문자열 → JSON 변환

          // ✅ 에디터가 초기화된 후 데이터 반영
          if (editor) {
            editor.commands.setContent(parsedContent);
          }
        } catch (error) {
          console.error("Error parsing content:", error);
        }
      });
  }, [editor, params.id]);

  return (
    <div>
      <h1>{title}</h1>
      <EditorContent editor={editor} />
    </div>
  );
}
