"use client";

import { motion } from "motion/react";
import { BiLogoDjango, BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "linear",
    },
  },
});

export default function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="font-pretendard my-20 text-center text-4xl text-theme-light dark:text-theme-dark"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <TbBrandNextjs className="text-7xl text-theme-light dark:text-theme-dark" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <BiLogoDjango className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <BiLogoTypescript className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <FaAws className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
