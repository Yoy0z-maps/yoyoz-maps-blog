"use client";

import NavHighlighter from "@/components/NavHighlighter";
import BlogLastestArticlesPanel from "@/container/BlogLastestArticlesPanel";
import BlogMainPanel from "@/container/BlogMainPanel";

export default function Page() {
  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex w-full h-full relative transition-all duration-500 pt-28`}
    >
      <NavHighlighter path="/blog" />
      <BlogMainPanel />
      <BlogLastestArticlesPanel />
    </div>
  );
}

// 칼럼 내부 컨테이너 - 메인, Latest Article with Category&Search
