"use client";

import Article from "@/container/blog/Article";

import BlogCategory from "./BlogCategory";
import BlogArticleSearchBar from "@/components/blog/BlogArticleSearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useEffect, useState } from "react";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { Post } from "@/types/post";

export default function BlogLastestArticlesPanel() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_SERVER_ADDRESS}/posts`);
      const data = await response.json();
      setData(data.results);
    };
    fetchData();
  }, []);

  if (data.length === 0)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="flex items-center justify-between lg:px-40 2xl:px-60 w-full">
        <p className="font-pretendard text-4xl font-semibold text-theme-light dark:text-theme-dark">
          Latest Articles
        </p>
        <BlogCategory />
        <BlogArticleSearchBar />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-4 2xl:gap-x-36 pt-16">
        {data.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
