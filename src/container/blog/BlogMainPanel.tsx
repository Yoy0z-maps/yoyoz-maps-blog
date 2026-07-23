"use client";

import BlogRedButton from "@/components/blog/BlogRedButton";
import { DEFAULT_BLOG_THUMBNAIL } from "@/constant/blog";
import NextImage from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BlogPost } from "@/types/post";

export default function BlogMainPanel({ contents }: { contents: BlogPost[] }) {
  const delay = 4000;
  const isMountedRef = useRef(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const posts = contents;
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedThumbnails, setFailedThumbnails] = useState<string[]>([]);

  useEffect(() => {
    isMountedRef.current = true;

    const preloadAndSetNext = () => {
      const nextIndex = (activeIndex + 1) % posts.length;
      const img = new window.Image();
      img.src = posts[nextIndex].thumbnail;

      img
        .decode?.()
        .then(() => {
          if (isMountedRef.current) setActiveIndex(nextIndex);
        })
        .catch(() => {
          if (isMountedRef.current) setActiveIndex(nextIndex);
        });
    };

    intervalRef.current = setInterval(preloadAndSetNext, delay);

    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex, posts]);

  const currentPost = posts[activeIndex];
  const currentThumbnail = currentPost.thumbnail || DEFAULT_BLOG_THUMBNAIL;
  const thumbnailSrc = failedThumbnails.includes(currentThumbnail)
    ? DEFAULT_BLOG_THUMBNAIL
    : currentThumbnail;

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="hidden sm:flex flex-wrap items-end justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute h-[10px] bg-yellow-500 w-full bottom-0 z-[0]"></div>
              <p className="font-pretendard font-black text-5xl text-gray-700 z-[1] relative dark:text-theme-dark">
                {currentPost.tags[0]}
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-20">
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                yoy0z-maps
              </p>
              <div className="w-4 h-[0.5px] bg-theme-light dark:bg-theme-dark"></div>
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                {currentPost.isoDate.split("T")[0]}
              </p>
            </div>
            <h1 className="font-pretendard text-theme-light text-5xl font-semibold line-clamp-2 mt-4 dark:text-theme-dark">
              {`${currentPost.title}`}
            </h1>
            <div className="flex items-center justify-center gap-x-8 mt-8">
              <p className="font-pretendard text-theme-light text-lg line-clamp-2 dark:text-theme-dark font-light">
                {currentPost.description}
              </p>
              <Link
                href={currentPost.link}
                aria-label={`${currentPost.title} Velog에서 읽기`}
              >
                <BlogRedButton />
              </Link>
            </div>
          </div>
        </div>
        {/* 이미지 크기 고정 */}
        <div className="w-full max-w-xl shrink-0 lg:w-1/3 lg:p-8">
          <div className="relative mx-auto aspect-square w-[min(100%,28rem)] overflow-hidden rounded-md">
            <NextImage
              src={thumbnailSrc}
              alt={`${currentPost.title} 썸네일`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
              className="object-cover"
              onError={() => {
                if (currentThumbnail !== DEFAULT_BLOG_THUMBNAIL) {
                  setFailedThumbnails((previousThumbnails) => {
                    if (previousThumbnails.includes(currentThumbnail)) {
                      return previousThumbnails;
                    }

                    return [...previousThumbnails, currentThumbnail];
                  });
                }
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-transparent dark:bg-black/20"></div>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between gap-x-10 px-36 w-full">
        <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-600"></div>
        <p className="font-pretendard text-theme-light text-4xl dark:text-theme-dark">
          {activeIndex + 1}
          <span className="text-neutral-500 text-lg">
            {` / ${posts.length}`}
          </span>
        </p>
        <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-600"></div>
      </div>
      <div className="flex flex-col sm:hidden"></div>
    </div>
  );
}
