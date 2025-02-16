"use client";

import { motion } from "motion/react";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-white pb-16 text-6xl font-thin font-pretendard tracking-tight lg:mt-16 lg:text-8xl"
            >
              John Han
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-pretendard text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="font-pretendard text-white font-light py-6 my-2 max-w-xl tracking-tighter"
            >
              Eu tempor aute elit. Elit labore sunt consequat nostrud. Laboris
              nisi dolore nulla nostrud. Ut id fugiat nulla commodo cillum ut
              aliquip nostrud pariatur eiusmod ullamco est velit velit irure.
              Eiusmod amet ipsum eiusmod minim culpa.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="/assets/images/KevinRushProfile.png"
              alt="John Han"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
