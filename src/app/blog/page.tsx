"use client";

import NavHighlighter from "@/components/NavHighlighter";
import { useAppearanceThemeStore } from "@/store/useAppearanceThemeStore";

export default function Page() {
  const theme = useAppearanceThemeStore((state) => state.theme);
  const bgColor =
    theme === "dark"
      ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      : "bg-white";

  return (
    <div
      className={`flex w-full h-[100vh] ${bgColor} transition-all duration-500 pt-28`}
    >
      <NavHighlighter path="/blog" />
      <p className="text-white text-2xl font-productSansMedium">blog</p>
    </div>
  );
}
