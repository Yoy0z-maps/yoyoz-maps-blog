"use client";

import Link from "next/link";
import useNavActiveStore from "@/hook/useNavActive";

interface MainHeaderNavigationItemProps {
  href: string;
  text: string;
}

export default function MainHeaderNavigationItem({
  href,
  text,
}: MainHeaderNavigationItemProps) {
  const { path } = useNavActiveStore();

  return (
    <Link
      className={`font-pretendard font-regular cursor-pointer transition-all duration-300 dark:hover:text-white hover:text-red-500 text-md ${
        path === href ? "dark:text-white text-red-500" : "text-gray-600"
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
