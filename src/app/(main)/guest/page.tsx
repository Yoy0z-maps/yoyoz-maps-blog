"use client";

import NavHighlighter from "@/components/NavHighlighter";

export default function Page() {
  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex w-full h-[100vh] relative transition-all duration-500 pt-28`}
    >
      <NavHighlighter path="/guest" />
      <p className="text-white text-2xl font-pretendard font-medium">guest</p>
    </div>
  );
}
