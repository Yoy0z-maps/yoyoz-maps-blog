"use client";

import BlogRedButton from "@/components/blog/BlogRedButton";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Post } from "@/types/post";

const CONTENTS = [
  {
    id: 0,
    target: "0e6c2d9d-48e2-4b63-b4a7-58089a62b72b",
  },
  {
    id: 1,
    target: "8bb47f0f-bc1e-4e6a-9420-e49299ca3ad5",
  },
  {
    id: 2,
    target: "79f44627-fb84-4d4f-aed8-ccdbc52b8704",
  },
];

export default function BlogMainPanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contents, setContents] = useState<Post[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const responses = await Promise.all(
          CONTENTS.map((item) =>
            fetch(`${API_SERVER_ADDRESS}/posts/${item.target}/`).then((res) =>
              res.json()
            )
          )
        );
        setContents(responses);
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    fetchContents();
  }, []);

  useEffect(() => {
    if (contents.length === 0) return;

    let timeout: NodeJS.Timeout;

    const preloadImageAndSetIndex = () => {
      const nextIndex = (activeIndex + 1) % contents.length;
      const img = new Image();
      img.src = contents[nextIndex].image;

      img.onload = () => {
        timeout = setTimeout(() => {
          setActiveIndex(nextIndex);
        }, 4000);
      };
    };

    preloadImageAndSetIndex();

    return () => clearTimeout(timeout);
  }, [activeIndex, contents]);

  if (contents.length === 0)
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="hidden sm:flex flex-wrap items-end justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute h-[10px] bg-yellow-500 w-full bottom-0 z-[0]"></div>
              <p className="font-pretendard font-black text-5xl text-gray-700 z-[1] relative dark:text-theme-dark">
                {JSON.parse(contents[activeIndex].tags)[0].split(",")[0]}
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-20">
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                {contents[activeIndex].profile.nickname}
              </p>
              <div className="w-4 h-[0.5px] bg-theme-light dark:bg-theme-dark"></div>
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">
                {contents[activeIndex].published_date.split("T")[0]}
              </p>
            </div>
            <h1 className="font-pretendard text-theme-light text-5xl font-semibold line-clamp-3 mt-4 dark:text-theme-dark">
              {`${contents[activeIndex].title}`}
            </h1>
            <div className="flex items-center justify-center gap-x-8 mt-8">
              <p className="font-pretendard text-theme-light text-lg line-clamp-2 dark:text-theme-dark font-light">
                {`${contents[activeIndex].summary}`}
              </p>
              <BlogRedButton id={contents[activeIndex].id} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 max-w-xl">
          <div className="flex justify-center aspect-square relative">
            <img
              src={contents[activeIndex].image}
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
          {`${CONTENTS[0].id + 1}`}
          <span className="text-neutral-500 text-lg">
            {` / ${CONTENTS.length}`}
          </span>
        </p>
        <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-600"></div>
      </div>
      <div className="flex flex-col sm:hidden"></div>
    </div>
  );
}
