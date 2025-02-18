"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="font-pretendard my-20 text-center text-4xl text-text-light dark:text-white">
        About Me
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img
              className="rounded-2xl"
              src="/assets/images/about.jpg"
              alt="John Han"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="font-pretendard dark:text-white text-text-light my-2 max-w-xl py-6">
              Although I majored in literature at university, which may seem
              unrelated to being a designer, developer, or maker, I find common
              ground in my pursuit of ‘beauty.’ Beyond the beauty of literature,
              I seek beauty in design, code readability, and other forms of
              elegance. With a passion to absorb anything ‘awesome’ I come
              across, I am constantly striving to grow and create better work,
              driven by my pursuit of beauty and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
