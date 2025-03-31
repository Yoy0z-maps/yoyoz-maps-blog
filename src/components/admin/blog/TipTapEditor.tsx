"use client";
import "../../../style/styles.scss";

import { useEffect, useState } from "react";
import { EditorProvider } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import CodeBlock from "@tiptap/extension-code-block";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import { Color } from "@tiptap/extension-color";
import CategorySelector from "./CategorySelector";
import TitleInput from "./TitleInput";
import TipTapEditorMenuBar from "./TipTapEditorMenuBar";
import TipTapEditorContent from "./TipTapEditorContent";

export default function TipTapEditor() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const content = "";

  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    const sidebar = document.getElementById("admin-sidebar")?.offsetWidth;
    if (sidebar) {
      setSidebarWidth(sidebar + 36);
    }
  }, []);

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className={`flex flex-col gap-4 pr-9 my-6 py-6 bg-admin-bg overflow-y-auto`}
    >
      <TitleInput title={title} setTitle={setTitle} />
      <CategorySelector category={category} setCategory={setCategory} />
      <div className="w-full bg-white rounded-md py-4 px-6 flex flex-col h-screen overflow-y-auto">
        <EditorProvider
          immediatelyRender={false}
          slotBefore={<TipTapEditorMenuBar />}
          extensions={extensions}
          content={content}
        >
          <TipTapEditorContent title={title} category={category} />
        </EditorProvider>
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
  TextStyle,
  StarterKit.configure({
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];
