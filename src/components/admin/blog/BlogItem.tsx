"use client";

import { Post } from "@/types/post";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function BlogItem({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: () => void;
}) {
  const router = useRouter();

  const handleEdit = async (id: string) => {
    router.push(`/admin/blog/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      console.log("삭제 완료");
      onDelete();
    } else {
      toast.error("삭제 실패");
    }
  };

  return (
    <div
      key={post.id}
      className="flex flex-col w-[250px] h-[300px] rounded-lg overflow-hidden"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-[250px] h-[200px] object-cover"
      />
      <p className="text-lg line-clamp-2 font-semibold font-pretendard text-black">
        {post.title}
      </p>
      <div className="flex gap-x-2 items-center justify-end">
        <p
          onClick={() => handleEdit(post.id)}
          className="text-sm border-solid hover:border-orange-500 hover:text-orange-500 transition-all duration-300 border-gray-200 border-[1px] rounded-md px-2 py-1 text-gray-500 font-pretendard"
        >
          수정
        </p>
        <p
          onClick={() => handleDelete(post.id)}
          className="text-sm border-solid hover:border-red-500 hover:text-red-500 transition-all duration-300 border-gray-200 border-[1px] rounded-md px-2 py-1 text-gray-500 font-pretendard"
        >
          삭제
        </p>
      </div>
    </div>
  );
}
