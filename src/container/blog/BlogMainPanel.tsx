"use client";

import BlogRedButton from "@/components/blog/BlogRedButton";
import { useEffect, useRef, useState } from "react";
import { Post } from "@/types/post";

export default function BlogMainPanel({ contents }: { contents: Post[] }) {
  const delay = 4000;
  const isMountedRef = useRef(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const posts = contents;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    isMountedRef.current = true;

    const preloadAndSetNext = () => {
      const nextIndex = (activeIndex + 1) % posts.length;
      const img = new Image();
      img.src = posts[nextIndex].image;

      // decode가 되면 safe하게 전환
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

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="hidden sm:flex flex-wrap items-end justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute h-[10px] bg-yellow-500 w-full bottom-0 z-[0]"></div>
              <p className="font-pretendard font-black text-5xl text-gray-700 z-[1] relative dark:text-theme-dark">
                {JSON.parse(currentPost.tags)[0].split(",")[0]}
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-20">
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                {currentPost.profile.nickname}
              </p>
              <div className="w-4 h-[0.5px] bg-theme-light dark:bg-theme-dark"></div>
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                {currentPost.published_date.split("T")[0]}
              </p>
            </div>
            <h1 className="font-pretendard text-theme-light text-5xl font-semibold line-clamp-3 mt-4 dark:text-theme-dark">
              {`${currentPost.title}`}
            </h1>
            <div className="flex items-center justify-center gap-x-8 mt-8">
              <p className="font-pretendard text-theme-light text-lg line-clamp-2 dark:text-theme-dark font-light">
                {`${currentPost.summary}`}
              </p>
              <BlogRedButton id={currentPost.id} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 max-w-xl">
          <div className="flex justify-center aspect-square relative">
            <img
              src={currentPost.image}
              alt="John Han"
              className="rounded-md overflow-hidden object-cover w-full h-full"
            />
            <div className="dark:absolute inset-0 bg-black/20 rounded-md flex items-center justify-center"></div>
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
