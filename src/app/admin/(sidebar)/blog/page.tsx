"use client";

import NavHighlighter from "@/components/NavHighlighter";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_SERVER_ADDRESS, API_TOKEN } from "@/constant/api_address";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Post {
  count: number;
  results: {
    id: string;
    title: string;
    image: string;
  }[];
}

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post>({
    count: 0,
    results: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(`${API_SERVER_ADDRESS}/posts/`, {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        alert("데이터를 불러오는데 실패했습니다.");
      }
      setIsLoading(false);
    };
    fetchData();

    const sidebar = document.getElementById("admin-sidebar")?.offsetWidth;
    if (sidebar) {
      setSidebarWidth(sidebar + 36);
    }
  }, []);

  const [sidebarWidth, setSidebarWidth] = useState(0);

  const handleEdit = async (id: string) => {
    router.push(`/admin/blog/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`${API_SERVER_ADDRESS}/posts/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${API_TOKEN}`,
      },
    });
    if (res.ok) {
      alert("삭제 완료");
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className="flex flex-col gap-4 w-full h-full bg-admin-bg"
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
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
