import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import BlogRedButton from "@/components/blog/BlogRedButton";
import ArticleCouter from "./ArticleCouter";
import ArticleAuthor from "@/components/blog/ArticleAuthor";

const article = {
  thumbnail: "/assets/images/project/project-2.jpg",
  author: "John Han",
  profileImage: "/assets/images/johnhan.jpg",
  title:
    "Eiusmod veniam ad ut mollit sunt labore veniam proident eiusmod sit nostrud sit. Anim ullamco cillum minim aliqua commodo aliquip qui anim irure.",
  contents:
    "Magna cupidatat tempor commodo aliquip fugiat cillum est duis in sit eiusmod exercitation minim velit. Anim incididunt quis enim occaecat incididunt occaecat dolore. Elit ut irure exercitation aliquip excepteur et consequat ea voluptate deserunt. Ex minim do amet excepteur nulla adipisicing commodo excepteur deserunt ullamco ullamco ullamco enim laboris. Dolore nulla veniam nostrud. Aute laboris tempor exercitation ea reprehenderit cupidatat incididunt ipsum sunt reprehenderit sit pariatur cillum deserunt elit. Sunt ipsum minim irure. Amet et ullamco pariatur irure elit. Consequat mollit nisi laborum tempor incididunt enim velit esse nostrud. Tempor minim consectetur adipisicing excepteur aliqua Lorem consequat est ea.",
  tags: ["React.js", "TypeScript"],
  countLike: 0,
  countView: 0,
  countComments: 0,
};

export default function Article() {
  return (
    <div className="flex flex-col flex-shrink-0 w-full max-w-96">
      <Image
        src={article.thumbnail}
        alt="thumbnail"
        width={384}
        height={220}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <ArticleAuthor
          profileImage={article.profileImage}
          author={article.author}
        />
        <h1 className="font-pretendard text-xl line-clamp-2 my-2 text-theme-light dark:text-theme-dark font-semibold">
          {article.title}
        </h1>
        <div className="flex gap-x-3 text-theme-light items-center dark:text-theme-dark">
          <TfiLayoutLineSolid />
          {article.tags.map((tag, index) => (
            <p key={index} className="font-light font-pretendard">
              {tag}
            </p>
          ))}
        </div>
        <p className="font-pretendard line-clamp-3 text-gray-500 font-light mt-4">
          {article.contents}
        </p>
        <div className="flex text-gray-500 font-pretendard items-end justify-between mt-3">
          <ArticleCouter />
          <BlogRedButton id={1} />
        </div>
      </div>
    </div>
  );
}
