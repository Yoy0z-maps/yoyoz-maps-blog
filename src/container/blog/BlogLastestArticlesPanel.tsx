"use client";

import Article from "@/container/blog/Article";

import BlogCategory from "./BlogCategory";
import BlogArticleSearchBar from "@/components/blog/BlogArticleSearchBar";
import { Post } from "@/types/post";
import { useEffect, useState } from "react";
import { Category } from "@/types/category";

export default function BlogLastestArticlesPanel({
  contents,
}: {
  contents: { results: Post[]; count: number };
}) {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [filteredContents, setFilteredContents] = useState<Post[]>(
    contents.results
  );

  useEffect(() => {
    console.log(activeCategory);
    if (activeCategory === "ALL") {
      setFilteredContents(contents.results);
    } else {
      setFilteredContents(
        contents.results.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory, contents]);

  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="flex items-center justify-between lg:px-40 2xl:px-60 w-full">
        <p className="font-pretendard text-4xl font-semibold text-theme-light dark:text-theme-dark">
          Latest Articles
        </p>
        <BlogCategory
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <BlogArticleSearchBar />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-28 xl:gap-x-28  2xl:gap-x-52 pt-16">
        {filteredContents.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
