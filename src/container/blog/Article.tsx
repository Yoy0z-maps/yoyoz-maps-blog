import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import BlogRedButton from "@/components/blog/BlogRedButton";
import ArticleCouter from "./ArticleCouter";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import Link from "next/link";
import { Post } from "@/types/post";

export default function Article({ item }: { item: Post }) {
  return (
    <Link
      href={`/blog/${item.id}`}
      className="flex flex-col flex-shrink-0 w-full max-w-80"
    >
      <Image
        src={item.image}
        alt="thumbnail"
        width={384}
        height={220}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <ArticleAuthor
          profileImage={item.profile.image}
          author={item.profile.nickname}
        />
        <h1 className="font-pretendard text-xl line-clamp-2 my-2 text-theme-light dark:text-theme-dark font-semibold">
          {item.title}
        </h1>
        <div className="flex gap-x-3 text-theme-light items-center dark:text-theme-dark">
          <TfiLayoutLineSolid />
          {JSON.parse(item.tags)[0]
            .split(",")
            .map((tag: string, index: number) => (
              <p key={index} className="font-light font-pretendard">
                {tag}
              </p>
            ))}
        </div>
        <p className="font-pretendard line-clamp-3 text-gray-500 font-light mt-4">
          {item.summary}
        </p>
        <div className="flex text-gray-500 font-pretendard items-end justify-between mt-3">
          <ArticleCouter
            like={item.likes}
            comment={item.comments.length}
            view={item.views}
          />
          <BlogRedButton id={item.id} />
        </div>
      </div>
    </Link>
  );
}
