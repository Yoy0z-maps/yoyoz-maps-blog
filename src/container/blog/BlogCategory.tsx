"use client";

import BlogCategoryText from "@/components/blog/BlogCategoryText";
import { useState } from "react";
export default function BlogCategory() {
  const [activeItem, setActiveItem] = useState(0);

  const categories = [
    { text: "All", id: 0 },
    { text: "Technology", id: 1 },
    { text: "Design", id: 2 },
    { text: "Lifestyle", id: 3 },
  ];

  return (
    <div className="flex gap-x-8">
      {categories.map((category) => (
        <BlogCategoryText
          onClick={() => setActiveItem(category.id)}
          active={activeItem === category.id}
          key={category.id}
          text={category.text}
        />
      ))}
    </div>
  );
}
