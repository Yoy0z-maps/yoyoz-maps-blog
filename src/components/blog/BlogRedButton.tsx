"use client";

import { LuArrowDownRight } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Post } from "@/types/post";

export default function BlogRedButton({ id }: { id: Post["id"] }) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/blog/${id}`);
      }}
      className="p-2 bg-red-500 rounded-sm cursor-pointer hover:bg-red-600 transition-all duration-300"
    >
      <LuArrowDownRight size={28} color="white" />
    </div>
  );
}
