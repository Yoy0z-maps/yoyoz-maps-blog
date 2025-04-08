"use client";
import "../../../style/styles.scss";

import { useEffect, useState } from "react";
import { EditorProvider, JSONContent } from "@tiptap/react";
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
import ThumbnailSelector from "./ThumbnailSelector";
import CodeBlockShiki from "tiptap-extension-code-block-shiki";
import logDebug from "@/utils/debugLog";

type PostData = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  category: string;
  image: string;
};

export default function TipTapEditor({
  postData,
}: {
  postData: PostData | null;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [editorContent, setEditorContent] = useState<JSONContent | null>(null);

  useEffect(() => {
    const sidebar = document.getElementById("admin-sidebar")?.offsetWidth;
    if (sidebar) {
      setSidebarWidth(sidebar + 36);
    }

    if (postData) {
      setTitle(postData.title);
      setCategory(postData.category);
      //setThumbnail(postData.image);
      try {
        const content = JSON.parse(postData.body);
        setEditorContent(content);
      } catch (e) {
        logDebug("본문 파싱 실패", e);
        setEditorContent(null);
      }
    }
  }, [postData]);

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className={`flex flex-col gap-4 pr-9 my-6 py-6 bg-admin-bg overflow-y-auto`}
    >
      <TitleInput title={title} setTitle={setTitle} />
      <ThumbnailSelector thumbnail={thumbnail} setThumbnail={setThumbnail} />
      <CategorySelector category={category} setCategory={setCategory} />
      <div className="w-full bg-white rounded-md py-4 px-6 flex flex-col h-screen overflow-y-auto">
        <EditorProvider
          key={JSON.stringify(editorContent)}
          immediatelyRender={false}
          slotBefore={<TipTapEditorMenuBar />}
          extensions={extensions}
          content={editorContent}
        >
          <TipTapEditorContent
            title={title}
            category={category}
            thumbnail={thumbnail}
            postData={postData}
          />
        </EditorProvider>
      </div>
    </div>
  );
}

const extensions = [
  StarterKit.configure({
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    codeBlock: false,
  }),
  CodeBlockShiki.configure({
    defaultTheme: "github-dark-default",
  }),
  Image,
  CodeBlock,
  BulletList,
  Blockquote,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
];
