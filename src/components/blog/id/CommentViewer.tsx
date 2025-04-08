"use client";

import { Comment } from "@/types/post";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";
import { API_SERVER_ADDRESS } from "@/constant/api_address";

export default function CommentViewer({
  postId,
  isCommentUpdated,
}: {
  postId: string;
  isCommentUpdated: number;
}) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/`, {
        cache: "no-cache",
      });
      const data = await response.json();
      setComments(data.comments);
    };

    fetchComments();
  }, [postId, isCommentUpdated]);

  return (
    <div className="space-y-4 font-pretendard mb-6">
      <div className="p-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
        <div className="mt-4 space-y-3 pl-4 border-l">
          <div className="p-3 bg-white border rounded-md dark:bg-neutral-800">
            <div className="flex justify-start items-center">
              <span className="font-semibold text-sm">후라이팬</span>
              {/* <span className="text-xs text-gray-500">1시간 전 · 삭제</span> */}
            </div>
            <p className="mt-1 text-sm text-gray-800 dark:text-neutral-200">
              대댓글 기능은 추후 추가 예정입니다!
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <input
                type="text"
                placeholder="닉네임"
                className="border w-40 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
              />
            </div>
            <textarea
              rows={3}
              placeholder="답글을 입력하세요..."
              className="w-full border rounded-md px-2 py-2 text-sm resize-none outline-none dark:bg-neutral-800 dark:text-neutral-200"
            />
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm cursor-not-allowed">
                올리기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
