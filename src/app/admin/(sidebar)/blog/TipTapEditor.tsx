import { useState } from "react";
import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function TipTapEditor({
  onSave,
}: {
  onSave: (title: string, content: JSONContent) => void;
}) {
  const [title, setTitle] = useState(""); // 제목 상태
  const editor = useEditor({
    extensions: [StarterKit],
    content: "", // 초기 값 (새 글 작성 시)
  });

  // 저장 버튼 클릭 시 실행
  const handleSave = async () => {
    if (!editor) return;

    const content = editor.getJSON(); // ✅ JSON 형식으로 저장
    await onSave(title, content); // 부모 컴포넌트에 데이터 전달
  };

  return (
    <div>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <EditorContent editor={editor} />
      <button onClick={handleSave}>저장</button>
    </div>
  );
}
