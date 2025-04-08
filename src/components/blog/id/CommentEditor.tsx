"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PLACEHOLDER = {
  1: "건초먹는 기니피그",
  2: "당근먹는 기니피그",
  3: "사과먹는 기니피그",
  4: "사료먹는 기니피그",
  5: "오이먹는 기니피그",
};

export default function CommentEditor({
  postId,
  setIsCommentUpdated,
  isCommentUpdated,
}: {
  postId: string;
  setIsCommentUpdated: (isCommentUpdated: number) => void;
  isCommentUpdated: number;
}) {
  const [placeholder, setPlaceholder] = useState("");
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    if (isLoading) return;

    if (comment.trim() === "") {
      toast.error("댓글을 입력해주세요.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("post", postId);
    if (nickname.trim() == "") {
      formData.append("nickname", placeholder);
    } else {
      formData.append("nickname", nickname);
    }
    formData.append("text", comment);

    fetch(`/api/comments`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          toast.success("댓글이 등록되었습니다.");
          setIsCommentUpdated(isCommentUpdated + 1);
        } else {
          toast.error("댓글 등록에 실패했습니다.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("댓글 등록에 실패했습니다.");
      })
      .finally(() => {
        setIsLoading(false);
        const randomInt = Math.floor(Math.random() * 5) + 1;
        setPlaceholder(PLACEHOLDER[randomInt as keyof typeof PLACEHOLDER]);
        setNickname("");
        setComment("");
      });
  };

  useEffect(() => {
    const randomInt = Math.floor(Math.random() * 5) + 1;
    setPlaceholder(PLACEHOLDER[randomInt as keyof typeof PLACEHOLDER]);
  }, [placeholder]);

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-md shadow-sm bg-white mb-24 font-pretendard dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder={placeholder}
          className="border rounded-md px-3 w-40 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>
      <div className="mb-1">
        <textarea
          rows={4}
          placeholder="댓글을 입력하세요..."
          className="w-full border rounded-md px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClick}
          disabled={isLoading}
          className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 text-sm ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "포스트 중..." : "올리기"}
        </button>
      </div>
    </div>
  );
}
