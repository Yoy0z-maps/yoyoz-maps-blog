"use client";

import { Comment } from "@/types/post";
import CommentBox from "./CommentBox";
import { useEffect, useState } from "react";

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
      const response = await fetch(`/api/posts/${postId}`, {
        method: "GET",
        cache: "no-cache",
      });

      const data = await response.json();
      setComments(data.comments);
    };

    fetchComments();
  }, [postId, isCommentUpdated]);

  if (comments.length === 0) {
    return (
      <div className="space-y-4 font-pretendard mb-6">
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
          <p className="font-pretendard">
            아직 댓글이 없어요. 첫 댓글을 남겨주세요!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 font-pretendard mb-6">
      <div className="px-4 pt-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
