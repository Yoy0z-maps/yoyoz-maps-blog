import "../../../../style/styles.scss";

import { useCallback, useEffect, useState } from "react";
import { EditorProvider, JSONContent, useCurrentEditor } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import EditorTextStyleButton from "./EditorTextStyleButton";
import EditorTextColorButton from "./EditorTextColorButton";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import { Color } from "@tiptap/extension-color";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

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
      <EditorTextStyleButton
        onClick={addImage}
        disabled={false}
        label="image"
      />
      {colorPalette.map((color) => (
        <EditorTextColorButton
          key={color.label}
          onClick={() => editor.chain().focus().setColor(color.color).run()}
          disabled={!editor.can().chain().focus().setColor(color.color).run()}
          label={color.label}
        />
      ))}
    </div>
  );
};

export default function TipTapEditor({
  onSave,
}: {
  onSave: (title: string, content: JSONContent) => void;
}) {
  const [title, setTitle] = useState(""); // 제목 상태
  const { editor } = useCurrentEditor();
  const content = "";

  // 저장 버튼 클릭 시 실행
  const handleSaveDraft = async () => {
    // 1. 브라우저에 캐시 저장
    // 2. 글 완성후 포스팅되면 캐시 삭제
    // 3. 블로그 에딧페이지 들어왔을 때 캐시가 있으면 이어서 작성하는 문서가 있는데 이어서 작성하겠냐고 물어봐야함
  };

  // 저장 버튼 클릭 시 실행
  const handleSave = async () => {
    if (!editor) return;

    const content = editor.getJSON(); // ✅ JSON 형식으로 저장
    await onSave(title, content); // 부모 컴포넌트에 데이터 전달
  };

  const [sidebarWidth, setSidebarWidth] = useState(0);
  useEffect(() => {
    const sidebar = document.getElementById("admin-sidebar")?.offsetWidth;
    if (sidebar) {
      console.log(sidebar);
      setSidebarWidth(sidebar + 36);
    }
  }, []);

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className={`flex flex-col gap-4 pr-9 h-screen py-6 bg-admin-bg`}
    >
      <input
        className="bg-white rounded-md p-3 w-full font-pretendard"
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="w-full bg-white rounded-md py-4 px-6 flex flex-col h-screen">
        <EditorProvider
          immediatelyRender={false}
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={content}
        ></EditorProvider>
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="text-base font-pretendard text-center bg-white hover:border-blue-500 border-solid border-[1px] rounded-md cursor-pointer border-blue-600 hover:bg-blue-500 hover:text-white text-blue-600 py-2 px-5"
            onClick={handleSaveDraft}
          >
            임시저장
          </button>
          <button
            className="text-base font-pretendard text-center bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-500 py-2 px-5"
            onClick={handleSave}
          >
            포스팅
          </button>
        </div>
      </div>
    </div>
  );
}

const extensions = [
  Image,
  CodeBlock,
  BulletList,
  Blockquote,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];
