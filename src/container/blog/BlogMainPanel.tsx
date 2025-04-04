"use client";

import BlogRedButton from "@/components/blog/BlogRedButton";
import { useEffect, useState } from "react";

const CONTENTS = [
  {
    id: 0,
    date: "2025-02-18",
    author: "John Han",
    title:
      "Minim excepteur magna duis Lorem et qui proident eiusmod culpa irure enim proident ut.",
    content:
      "Cupidatat commodo esse nulla et ipsum nisi cillum nulla id. Irure laborum tempor minim et. Culpa labore esse dolor incididunt laborum laborum minim qui. Ea eiusmod excepteur occaecat voluptate. Laborum veniam commodo proident dolore est anim sint qui fugiat aliquip ex. Qui proident mollit consequat incididunt duis proident in amet anim incididunt laboris officia ea id cupidatat. Nisi reprehenderit dolor adipisicing commodo esse est velit commodo minim. Ea anim eiusmod nulla consequat ea do sint et incididunt commodo. Labore velit aliquip aute pariatur non labore in ad exercitation duis sunt ipsum do nisi occaecat. Anim mollit exercitation proident est qui nostrud do dolore laboris irure cupidatat cupidatat elit reprehenderit cupidatat.",
    tags: ["React.js", "Frontend", "Web Development"], // 첫 태그는 중요함!
    image: "/assets/images/project/project-1.jpg",
  },
  {
    id: 1,
    date: "2025-01-13",
    author: "Shawn Ko",
    title: "Culpa irure cillum nisi qui in officia reprehenderit dolore.",
    content:
      "Culpa adipisicing adipisicing et velit nisi ea incididunt sunt in. Quis laborum officia ipsum eiusmod enim. Cillum non non commodo. Eiusmod esse Lorem aliquip. Id proident aliqua labore dolore consequat culpa id incididunt. Commodo ipsum id velit tempor sunt fugiat. Tempor magna exercitation duis est culpa proident esse laborum nisi magna ipsum ea eu et. Nostrud magna officia est sint incididunt. Sit voluptate laboris irure ut. Enim deserunt reprehenderit incididunt esse adipisicing reprehenderit cupidatat excepteur.",
    tags: ["Django", "Backend", "Web Development"],
    image: "/assets/images/project/project-2.jpg",
  },
  {
    id: 2,
    date: "2024-12-25",
    author: "John Han",
    title:
      "Commodo irure duis qui officia magna laborum aute ut ea anim sint amet Lorem officia ad.",
    content:
      "Eu ullamco sint culpa non fugiat do esse tempor et voluptate exercitation exercitation ex. Id voluptate elit eiusmod duis sit minim sunt dolor anim ex exercitation deserunt velit. Cillum eu sit excepteur consectetur ut nisi duis incididunt. Ullamco exercitation aute pariatur culpa laboris consequat amet mollit veniam eu. Do excepteur commodo quis eu. Aliqua laboris veniam commodo tempor. Eu incididunt ex incididunt sunt consequat velit excepteur voluptate. Dolor commodo elit sunt amet velit qui veniam duis nulla aute est laborum id eiusmod. Voluptate nostrud in aliquip. Non aute commodo ex sit dolor nisi cupidatat proident non in quis quis ut fugiat sint.",
    tags: ["UI/UX", "Figma", "Design"],
    image: "/assets/images/project/project-3.jpg",
  },
];

export default function BlogMainPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % CONTENTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="items-center justify-center flex flex-col">
      <div className="hidden sm:flex flex-wrap items-end justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="absolute h-[10px] bg-yellow-500 w-full bottom-0 z-[0]"></div>
              <p className="font-pretendard font-black text-5xl text-gray-700 z-[1] relative dark:text-theme-dark">{`${CONTENTS[activeIndex].tags[0]}`}</p>
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-20">
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">{`${CONTENTS[activeIndex].author}`}</p>
              <div className="w-4 h-[0.5px] bg-theme-light dark:bg-theme-dark"></div>
              <p className="font-pretendard font-light text-theme-light dark:text-theme-dark">{`${CONTENTS[activeIndex].date}`}</p>
            </div>
            <h1 className="font-pretendard text-theme-light text-5xl font-semibold line-clamp-3 mt-4 dark:text-theme-dark">
              {`${CONTENTS[activeIndex].title}`}
            </h1>
            <div className="flex items-center justify-center gap-x-8 mt-8">
              <p className="font-pretendard text-theme-light text-lg line-clamp-2 dark:text-theme-dark font-light">
                {`${CONTENTS[activeIndex].content}`}
              </p>
              <BlogRedButton id={CONTENTS[activeIndex].id} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8 max-w-xl">
          <div className="flex justify-center aspect-square relative">
            <img
              src={CONTENTS[activeIndex].image}
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
