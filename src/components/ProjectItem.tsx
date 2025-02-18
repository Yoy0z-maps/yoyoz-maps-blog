"use client";

import { motion } from "motion/react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  delay: number;
}

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0, type: "tween", ease: "easeIn" },
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: project.delay },
      }}
      initial={{ opacity: 0, y: -50 }}
      className="w-[310px] h-[560px] flex-shrink-0 relative transition-all duration-500"
      key={index}
    >
      <div className="w-[280px] h-[560px] dark:bg-project-dark border-2 border-gray-300 dark:border-0 absolute left-0 px-4 pt-12 shadow-xl">
        <span className="font-regular font-pretendard text-4xl text-text-light dark:text-white border-b-[2px] border-b-yellow-500">
          {project.id}
        </span>
        <h1 className="font-regular font-pretendard text-text-light dark:text-white pr-5 mt-16 text-base font-medium line-clamp-1">
          {project.title}
        </h1>
        <p className="font-regular font-pretendard text-text-light dark:text-white pr-5 mt-2 text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4 pr-5">
          {project.skills.map((skill: string, index: number) => (
            <p
              className="dark:bg-project-tag-dark bg-gray-100 px-2 py-1 text-xs rounded-sm font-regular font-pretendard text-text-light dark:text-white"
              key={index}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="w-[280px] h-[180px] absolute right-0 bottom-10 shadow-xl">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 dark:bg-black/20"></div>
        <img src={project.image} alt={project.title} />
      </div>
    </motion.div>
  );
}
