import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Image from "next/image";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { LuArrowDownRight } from "react-icons/lu";
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
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full w-8 h-8 object-cover"
            src={article.profileImage}
            alt="profile"
            width={30}
            height={30}
          />
          <p className="font-pretendard text-theme-light dark:text-theme-dark font-light">
            {article.author}
          </p>
        </div>
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
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              <AiFillHeart />
              <p>48</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCommentDots />
              <p>13</p>
            </div>
            <div className="flex items-center gap-x-2">
              <AiOutlineEye />
              <p>3,821</p>
            </div>
          </div>
          <div className="p-2 bg-red-500 rounded-sm">
            <LuArrowDownRight size={28} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
