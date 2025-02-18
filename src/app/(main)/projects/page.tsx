"use client";

import NavHighlighter from "@/components/NavHighlighter";
import ProjectPanel from "@/container/ProjectPanel";

export default function Page() {
  return (
    <div
      className={`bg-light-bg dark:bg-dark-bg flex items-center justify-center w-full h-full relative transition-all duration-500 pt-28`}
    >
      <NavHighlighter path="/projects" />
      <ProjectPanel />
    </div>
  );
}
