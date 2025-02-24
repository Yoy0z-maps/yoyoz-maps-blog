import Article from "@/components/blog/Article";
import { RiSearchLine } from "react-icons/ri";

export default function BlogLastestArticlesPanel() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="flex items-center justify-between px-40 w-full">
        <p className="font-pretendard text-4xl font-semibold text-theme-light dark:text-theme-dark">
          Latest Articles
        </p>
        <div className="flex gap-x-8">
          <p className="font-pretendard text-md text-red-500">All</p>
          <p className="font-pretendard text-md text-theme-light dark:text-theme-dark">
            Technology
          </p>
          <p className="font-pretendard text-md text-theme-light dark:text-theme-dark">
            Design
          </p>
          <p className="font-pretendard text-md text-theme-light dark:text-theme-dark">
            Business
          </p>
          <p className="font-pretendard text-md text-theme-light dark:text-theme-dark">
            Lifestyle
          </p>
        </div>
        <div className="relative">
          <span className="text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2">
            <RiSearchLine size={20} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-white placeholder:text-gray-400 border-b border-neutral-400 px-2 py-3 font-pretendard text-md min-w-64 focus:border-red-600 focus:outline-none text-logo-light"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-16">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}
