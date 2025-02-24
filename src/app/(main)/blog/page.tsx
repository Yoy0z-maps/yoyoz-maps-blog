"use client";

import NavHighlighter from "@/components/NavHighlighter";
import BlogLastestArticlesPanel from "@/container/blog/BlogLastestArticlesPanel";
import BlogMainPanel from "@/container/blog/BlogMainPanel";

export default function Page() {
  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 py-28`}
    >
      <NavHighlighter path="/blog" />
      <BlogMainPanel />
      <BlogLastestArticlesPanel />
    </div>
  );
}

// 칼럼 내부 컨테이너 - 메인, Latest Article with Category&Search
