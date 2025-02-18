"use client";

import { motion } from "motion/react";

import { SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

import React from "react";

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

export default function Designs() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="font-pretendard my-20 text-center text-4xl text-text-light dark:text-white"
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
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <IoLogoFigma className="text-7xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <SiAdobeaftereffects className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <SiAdobephotoshop className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dark:border-neutral-800 border-gray-200 p-4"
        >
          <SiAdobeillustrator className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
