"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-pretendard text-theme-light dark:text-theme-dark"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 font-pretendard text-theme-light dark:text-theme-dark"
        >
          91, Geumsan-ro, Gunpo-si, Gyeonggi-do, Republic of Korea
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 font-pretendard text-theme-light dark:text-theme-dark"
        >
          +82-10-7467-2124
        </motion.p>
        <a
          href="#"
          className="border-b font-pretendard text-theme-light dark:text-theme-dark"
        >
          work.johnhan@gmail.com
        </a>
      </div>
    </div>
  );
}
