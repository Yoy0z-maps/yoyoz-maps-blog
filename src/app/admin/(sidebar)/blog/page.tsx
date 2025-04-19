"use client";

import NavHighlighter from "@/components/NavHighlighter";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import { PostResponse } from "@/types/post";
import BlogItem from "@/components/admin/blog/BlogItem";
import { toast } from "react-toastify";
import useSidebarWidth from "@/hook/useSidebarWidth";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostResponse>({
    count: 0,
    results: [],
  });
  const [isDelete, setIsDelete] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts`, {
        method: "GET",
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        toast.error("데이터를 불러오는데 실패했습니다.");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isDelete]);

  const sidebarWidth = useSidebarWidth();

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className="flex flex-col gap-4 w-full h-screen bg-admin-bg"
    >
      <NavHighlighter path="/admin/blog" />
      <div className="flex flex-col gap-4  mt-9 mr-9">
        <div className="flex gap-4 font-pretendard items-center justify-between bg-white rounded-md">
          <p className="text-xl py-4 pl-6 text-black font-semibold">
            Blog 관리 페이지
          </p>
          <div
            onClick={() => router.push("/admin/blog/edit")}
            className="flex items-center justify-center rounded-full gap-x-3 mr-5 bg-blue-600 py-2 px-4 my-4 hover:bg-blue-500"
          >
            <IoIosAdd className="text-2xl text-white" />
            <p className="text-base text-white">글 쓰러가기</p>
          </div>
        </div>
        {isLoading ? (
          <div className="bg-white flex rounded-md h-full items-center justify-center min-h-[800px]">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="bg-white rounded-md h-full flex flex-wrap gap-x-6 p-6">
            {posts.count === 0 ? (
              <p>Oooop... There is no post</p>
            ) : (
              posts.results.map((post) => (
                <BlogItem
                  key={post.id}
                  post={post}
                  onDelete={() => setIsDelete((prev) => !prev)}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
