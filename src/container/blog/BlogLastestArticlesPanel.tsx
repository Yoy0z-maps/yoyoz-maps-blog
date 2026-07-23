"use client";

import Article from "@/container/blog/Article";

import BlogCategory from "./BlogCategory";
import BlogArticleSearchBar from "@/components/blog/BlogArticleSearchBar";
import { BlogPost } from "@/types/post";
import { useMemo, useState } from "react";
import { Category } from "@/types/category";

const DESIGN_TAGS = new Set([
  "UI/UX",
  "Figma",
  "Web Design",
  "Design System",
  "Interaction Design",
  "Typography",
  "Animation",
]);

const LIFE_TAGS = new Set([
  "Career",
  "Internship",
  "Portfolio",
  "Retrospective",
  "Productivity",
]);

function matchesCategory(post: BlogPost, category: Category) {
  if (category === "ALL") return true;
  if (category === "DESIGN") {
    return post.tags.some((tag) => DESIGN_TAGS.has(tag));
  }
  if (category === "LIFE") {
    return post.tags.some((tag) => LIFE_TAGS.has(tag));
  }

  return (
    !post.tags.some((tag) => DESIGN_TAGS.has(tag)) &&
    !post.tags.some((tag) => LIFE_TAGS.has(tag))
  );
}

export default function BlogLastestArticlesPanel({
  contents,
}: {
  contents: BlogPost[];
}) {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContents = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();

    return contents.filter((post) => {
      if (!matchesCategory(post, activeCategory)) return false;
      if (!normalizedSearchTerm) return true;

      return [post.title, post.description, ...post.tags].some((value) =>
        value.toLocaleLowerCase().includes(normalizedSearchTerm),
      );
    });
  }, [activeCategory, contents, searchTerm]);

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
        <BlogArticleSearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-28 xl:gap-x-28  2xl:gap-x-52 pt-16">
        {filteredContents.map((item) => (
          <Article key={item.link} item={item} />
        ))}
      </div>
    </div>
  );
}
