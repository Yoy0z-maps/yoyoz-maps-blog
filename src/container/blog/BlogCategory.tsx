"use client";

import BlogCategoryText from "@/components/blog/BlogCategoryText";
import { CATEGORIES } from "@/constant/categories";
import { Category } from "@/types/category";

export default function BlogCategory({
  activeCategory,
  setActiveCategory,
}: {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}) {
  return (
    <div className="flex gap-x-8">
      {CATEGORIES.map((category) => (
        <BlogCategoryText
          onClick={() => setActiveCategory(category.value as Category)}
          active={activeCategory === category.value}
          key={category.id}
          text={category.text}
        />
      ))}
    </div>
  );
}
