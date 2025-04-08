import Article from "@/container/blog/Article";

import BlogCategory from "./BlogCategory";
import BlogArticleSearchBar from "@/components/blog/BlogArticleSearchBar";
import { Post } from "@/types/post";

export default function BlogLastestArticlesPanel({
  contents,
}: {
  contents: { results: Post[]; count: number };
}) {
  return (
    <div className="mt-16 flex flex-col items-center">
      <div className="flex items-center justify-between lg:px-40 2xl:px-60 w-full">
        <p className="font-pretendard text-4xl font-semibold text-theme-light dark:text-theme-dark">
          Latest Articles
        </p>
        <BlogCategory />
        <BlogArticleSearchBar />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-y-6 lg:gap-x-4 2xl:gap-x-8 pt-16">
        {contents.results.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
