import Article from "@/container/blog/Article";

import BlogCategory from "./BlogCategory";
import BlogArticleSearchBar from "@/components/blog/BlogArticleSearchBar";

export default function BlogLastestArticlesPanel() {
  return (
    <div className="mt-24 flex flex-col items-center">
      <div className="flex items-center justify-between lg:px-40 2xl:px-60 w-full">
        <p className="font-pretendard text-4xl font-semibold text-theme-light dark:text-theme-dark">
          Latest Articles
        </p>
        <BlogCategory />
        <BlogArticleSearchBar />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-4 2xl:gap-x-36 pt-16">
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
