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
      className={`font-productSansRegular cursor-pointer transition-all duration-300 hover:text-white text-md ${
        path === href ? "text-white" : "text-gray-400"
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
