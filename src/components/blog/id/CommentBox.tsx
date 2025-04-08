import { Comment } from "@/types/post";
import { useState } from "react";

export default function CommentBox({ comment }: { comment: Comment }) {
  const [isReply, setIsReply] = useState(false);

  return (
    <>
      <div className="flex justify-start items-center">
        <span className="font-semibold text-sm">{comment.nickname}</span>
        {/* <span className="text-xs text-gray-500">삭제</span> */}
      </div>
      <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
        {comment.text}
      </p>
      <button
        onClick={() => setIsReply(!isReply)}
        className="mt-2 mb-6 text-xs text-blue-500 hover:underline cursor-pointer"
      >
        답글 달기
      </button>
      {isReply && (
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
            placeholder="답글을 입력하세요... (대댓글 기능은 추후 추가 예정)"
            className="w-full border rounded-md px-2 py-2 text-sm resize-none outline-none dark:bg-neutral-800 dark:text-neutral-200"
          />
          <div className="flex justify-end">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm cursor-not-allowed">
              올리기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
