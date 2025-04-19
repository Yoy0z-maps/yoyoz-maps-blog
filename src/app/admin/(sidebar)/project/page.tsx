"use client";
import NavHighlighter from "@/components/NavHighlighter";
import useSidebarWidth from "@/hook/useSidebarWidth";

export default function Page() {
  const sidebarWidth = useSidebarWidth();

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className="flex flex-col gap-4 w-full h-screen bg-admin-bg"
    >
      <NavHighlighter path="/admin/project" />
      <div>ProjectPage</div>
    </div>
  );
}
