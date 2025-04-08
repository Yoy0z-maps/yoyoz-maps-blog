import { Comment } from "@/types/post";

export default function CommentBox({ comment }: { comment: Comment }) {
  return (
    <>
      <div className="flex justify-start items-center">
        <span className="font-semibold text-sm">{comment.nickname}</span>
        {/* <span className="text-xs text-gray-500">삭제</span> */}
      </div>
      <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
        {comment.text}
      </p>
      <button className="mt-2 mb-4 text-xs text-blue-500 hover:underline cursor-not-allowed">
        답글 달기
      </button>
    </>
  );
}
