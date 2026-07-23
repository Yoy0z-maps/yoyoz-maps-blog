"use client";

import { DEFAULT_BLOG_THUMBNAIL } from "@/constant/blog";
import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import BlogRedButton from "@/components/blog/BlogRedButton";
import ArticleAuthor from "@/components/blog/ArticleAuthor";
import Link from "next/link";
import { BlogPost } from "@/types/post";
import { useEffect, useState } from "react";

export default function Article({ item }: { item: BlogPost }) {
  const [thumbnail, setThumbnail] = useState(
    item.thumbnail || DEFAULT_BLOG_THUMBNAIL,
  );

  useEffect(() => {
    setThumbnail(item.thumbnail || DEFAULT_BLOG_THUMBNAIL);
  }, [item.thumbnail]);

  return (
    <Link
      href={item.link}
      className="flex flex-col flex-shrink-0 w-full max-w-80"
    >
      <Image
        src={thumbnail}
        alt={`${item.title} 썸네일`}
        width={384}
        height={220}
        className="w-full h-56 object-cover"
        onError={() => {
          if (thumbnail !== DEFAULT_BLOG_THUMBNAIL) {
            setThumbnail(DEFAULT_BLOG_THUMBNAIL);
          }
        }}
      />
      <div className="p-4">
        <ArticleAuthor
          profileImage="/assets/images/johnhan.jpg"
          author="yoy0z-maps"
        />
        <h1 className="font-pretendard text-xl line-clamp-2 my-2 text-theme-light dark:text-theme-dark font-semibold">
          {item.title}
        </h1>
        <div className="flex gap-x-3 text-theme-light items-center dark:text-theme-dark">
          <TfiLayoutLineSolid />
          {item.tags.map((tag) => (
            <p key={tag} className="font-light font-pretendard">
              {tag}
            </p>
          ))}
        </div>
        <p className="font-pretendard line-clamp-3 text-gray-500 font-light mt-4">
          {item.description}
        </p>
        <div className="flex text-gray-500 font-pretendard items-end justify-between mt-3">
          <p className="font-light">{item.isoDate.split("T")[0]}</p>
          <BlogRedButton />
        </div>
      </div>
    </Link>
  );
}
