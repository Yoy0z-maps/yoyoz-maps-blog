"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import Blockquote from "@tiptap/extension-blockquote";
import StarterKit from "@tiptap/starter-kit";
import { useParams } from "next/navigation";

import ArticleTitleView from "./ArticleTitleView";
import ArticleInfoView from "./ArticleInfoView";

import Divider from "@/components/Divider";
import LoveShareButtonContainer from "./LoveShareButtonContainer";
import CodeBlockShiki from "tiptap-extension-code-block-shiki";
import { Post } from "@/types/post";
import CommentViewer from "./CommentViewer";
import CommentEditor from "./CommentEditor";

// 이 부분 오류 나중에 수정해야함...
const defaultTheme =
  localStorage.getItem("theme") === "dark"
    ? "github-dark-default"
    : "github-light-default";

const extensions = [
  StarterKit.configure({
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
    codeBlock: false,
  }),
  CodeBlockShiki.configure({
    defaultTheme: defaultTheme,
  }),
  Image,
  BulletList,
  Blockquote,
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
];

export default function TipTapViewer({ post }: { post: Post }) {
  const params = useParams();
  const [isCommentUpdated, setIsCommentUpdated] = useState<number>(0);

  const editor = useEditor({
    extensions: extensions,
    editable: false,
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!post || !Array.isArray(post.comments)) return;
    setIsCommentUpdated(post.comments.length);
  }, [post]);

  useEffect(() => {
    try {
      const parsedContent = JSON.parse(post.body);
      if (editor) {
        editor.commands.setContent(parsedContent);
      }
    } catch (error) {
      console.error("Error parsing content:", error);
    }
  }, [editor, post]);

  return (
    <div className="w-screen flex items-center justify-center overflow-y-auto pt-24 bg-light-bg dark:bg-dark-bg text-theme-light dark:text-theme-dark">
      <div className="w-full max-w-4xl">
        <ArticleTitleView
          image={post.image}
          title={post.title}
          category={post.category}
        />
        <EditorContent
          editor={editor}
          className="font-pretendard overflow-y-auto mb-9"
        />
        <ArticleInfoView
          tags={JSON.parse(post.tags)}
          date={post.published_date}
          profile={post.profile}
        />
        <Divider />
        <LoveShareButtonContainer
          postId={params.id as string}
          likeCount={post.likes}
        />
        <CommentViewer postId={post.id} isCommentUpdated={isCommentUpdated} />
        <CommentEditor
          postId={post.id}
          setIsCommentUpdated={setIsCommentUpdated}
          isCommentUpdated={isCommentUpdated}
        />
      </div>
    </div>
  );
}
