"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import NavHighlighter from "@/components/NavHighlighter";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import BlogLastestArticlesPanel from "@/container/blog/BlogLastestArticlesPanel";
import BlogMainPanel from "@/container/blog/BlogMainPanel";
import { Post } from "@/types/post";
import { useState } from "react";
import { useEffect } from "react";

const CONTENTS = [
  {
    id: 0,
    target: "0e6c2d9d-48e2-4b63-b4a7-58089a62b72b",
  },
  {
    id: 1,
    target: "8bb47f0f-bc1e-4e6a-9420-e49299ca3ad5",
  },
  {
    id: 2,
    target: "79f44627-fb84-4d4f-aed8-ccdbc52b8704",
  },
];

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [mainPanelContents, setMainPanelContents] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // 로딩 시작
      try {
        // 두 API 호출을 동시에 실행
        const [postsResponse, ...contentsResponses] = await Promise.all([
          fetch(`${API_SERVER_ADDRESS}/posts`).then((res) => res.json()),
          ...CONTENTS.map((item) =>
            fetch(`${API_SERVER_ADDRESS}/posts/${item.target}/`).then((res) =>
              res.json()
            )
          ),
        ]);

        // 데이터 설정
        setAllPosts(postsResponse.results);
        setMainPanelContents(contentsResponses);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // 로딩 완료
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 py-28`}
    >
      <NavHighlighter path="/blog" />
      {isLoading || mainPanelContents.length === 0 ? (
        <div className="flex items-center justify-center h-screen w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <BlogMainPanel contents={mainPanelContents} />
          <BlogLastestArticlesPanel contents={allPosts} />
        </>
      )}
    </div>
  );
}

// 칼럼 내부 컨테이너 - 메인, Latest Article with Category&Search
