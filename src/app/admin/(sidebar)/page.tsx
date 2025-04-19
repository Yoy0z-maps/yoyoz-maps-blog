"use client";
import NavHighlighter from "@/components/NavHighlighter";
import useSidebarWidth from "@/hook/useSidebarWidth";

export default function Page() {
  const sidebarWidth = useSidebarWidth();

  return (
    <div
      style={{ paddingLeft: `${sidebarWidth}px` }}
      className="bg-admin-bg w-full"
    >
      <NavHighlighter path="/admin" />
      <div>AdminDashboardPage</div>
    </div>
  );
}
