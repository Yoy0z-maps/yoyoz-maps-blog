"use client";

import NavHighlighter from "@/components/NavHighlighter";

export default function Page() {
  return (
    <div
      className={`bg-white dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex w-full h-[100vh] relative transition-all duration-500 pt-28`}
    >
      <NavHighlighter path="/guest" />
      <p className="text-white text-2xl font-pretendard font-medium">guest</p>
    </div>
  );
}
