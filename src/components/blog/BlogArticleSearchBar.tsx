"use client";

import { RiSearchLine } from "react-icons/ri";

export default function BlogArticleSearchBar({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}) {
  return (
    <div className="relative">
      <span className="text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2">
        <RiSearchLine size={20} />
      </span>
      <input
        type="text"
        placeholder="Search"
        aria-label="블로그 글 검색"
        className="bg-theme-dark dark:bg-dark-bg placeholder:text-gray-400 border-b border-neutral-400 px-2 py-3 font-pretendard text-md min-w-64 focus:border-red-600 focus:outline-none text-logo-light dark:text-theme-dark"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
