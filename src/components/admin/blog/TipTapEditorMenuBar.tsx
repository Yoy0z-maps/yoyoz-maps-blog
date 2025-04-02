import { useCurrentEditor } from "@tiptap/react";
import { useCallback } from "react";
import EditorTextStyleButton from "./EditorTextStyleButton";
import EditorTextColorButton from "./EditorTextColorButton";
import { API_SERVER_ADDRESS } from "@/constant/api_address";

export default function TipTapEditorMenuBar() {
  const { editor } = useCurrentEditor();

  const handleImageUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file || !editor) return;

      const formData = new FormData();
      formData.append("image", file);

      try {
        console.log(API_SERVER_ADDRESS);
        const res = await fetch(`${API_SERVER_ADDRESS}/upload-image/`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        const imageUrl = data.url;

        editor.chain().focus().setImage({ src: imageUrl }).run();
      } catch (error) {
        console.error("이미지 업로드 실패", error);
      }
    },
    [editor]
  );

  if (!editor) {
    return null;
  }

  const colorPalette = [
    { label: "Default", color: "#37352F" },
    { label: "Gray", color: "#9B9A97" },
    { label: "Brown", color: "#64473A" },
    { label: "Orange", color: "#D9730D" },
    { label: "Yellow", color: "#CB912F" },
    { label: "Green", color: "#448361" },
    { label: "Blue", color: "#337EA9" },
    { label: "Purple", color: "#9065B0" },
    { label: "Pink", color: "#C14C8A" },
    { label: "Red", color: "#D44C47" },
  ];

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        label="bold"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        label="italic"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        label="strike"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleCode().run();
        }}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        label="code"
      />
      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        Clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        Clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        Paragraph
      </button> */}
      <EditorTextStyleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
        }
        label="H1"
      />
      <EditorTextStyleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
        }
        label="H2"
      />
      <EditorTextStyleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
        }
        label="H3"
      />
      {/* <EditorTextStyleButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        disabled={
          !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
        }
        label="H4" H5, H6까지 있음
      /> */}
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        label="codeBlock"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run();
        }}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        label="blockquote"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        label="bulletList"
      />
      <EditorTextStyleButton
        onClick={() => {
          editor.chain().focus().setHorizontalRule().run();
        }}
        disabled={!editor.can().chain().focus().setHorizontalRule().run()}
        label="horizontalRule"
      />
      {colorPalette.map((color) => (
        <EditorTextColorButton
          key={color.label}
          onClick={() => editor.chain().focus().setColor(color.color).run()}
          disabled={!editor.can().chain().focus().setColor(color.color).run()}
          label={color.label}
        />
      ))}
      <input
        type="file"
        accept="image/*"
        className={`bg-gray-100 rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-blue-500 hover:text-white font-pretendard }`}
        onChange={handleImageUpload}
      />
    </div>
  );
}
