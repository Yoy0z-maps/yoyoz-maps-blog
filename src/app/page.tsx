"use client";
import LeftSideBar from "@/container/main/LeftSideBar";
import { useAppearanceThemeStore } from "@/store/useAppearanceThemeStore";
import Appearance from "./test/page";

export default function Home() {
  const theme = useAppearanceThemeStore((state) => state.theme);
  const bgColor = theme === "dark" ? "bg-darkbg" : "bg-lightbg";

  return (
    <div
      className={`flex w-full h-[100vh] gap-x-10 px-10 py-5 ${bgColor} relative transition-all duration-500`}
    >
      <LeftSideBar />
      {/* Main Content */}
      <section className="w-full h-full bg-container rounded-lg">
        <p className="text-white text-2xl font-bold">Main Content</p>
      </section>
      <div className="absolute top-0 left-0 w-full h-full">
        <Appearance />
      </div>
    </div>
  );
}
