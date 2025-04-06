"use client";

import { EXPERIENCES } from "@/constant/experiences";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="font-pretendard text-theme-light dark:text-theme-dark my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="font-pretendard mb-2 text-sm text-neutral-800 dark:text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold font-pretendard text-logo-light dark:text-white">
                {experience.role} -
                <span className="text-sm font-pretendard text-logo-light dark:text-purple-100">
                  {` ${experience.company} `}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 font-pretendard">
                {experience.description}
              </p>
              <div className="hidden flex-wrap dark:block">
                {experience.technologies.map((tech, index) => (
                  <span
                    className="font-pretendard mr-2 mt-4 rounded dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-800"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="block flex-wrap dark:hidden">
                {experience.technologies.map((tech, index) => (
                  <div
                    className="inline-flex items-center font-pretendard mr-2 mt-4 rounded px-2 py-1 text-sm font-medium"
                    key={index}
                  >
                    <span className="text-red-500">+</span>{" "}
                    <span className="text-logo-light">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
