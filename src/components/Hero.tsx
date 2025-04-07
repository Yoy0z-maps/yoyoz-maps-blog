"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/johnhan.jpg";
    img.decode?.().then(() => setImgLoaded(true));
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-theme-light dark:text-theme-dark pb-16 text-6xl font-thin font-pretendard tracking-tight lg:mt-16 lg:text-8xl"
            >
              John Han
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-pretendard text-red-500 text-3xl tracking-tight"
              /* className="font-pretendard text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight" */
            >
              Interactive Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="font-pretendard dark:text-white font-light py-6 my-2 max-w-xl tracking-tighter"
            >
              Welcome to the blog of a maker who strives for beauty and
              innovation! I believe that things with ‘beauty’ have the power to
              make us pause, even in the midst of a busy life. This site,
              created with the thought of how to express who I am, is hoped to
              add a small pause of inspiration to your busy routine.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 max-w-xl">
          <div className="flex justify-center aspect-square relative">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={imgLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0 }}
              src="/assets/images/johnhan.jpg"
              alt="John Han"
              className="rounded-md overflow-hidden object-cover w-full h-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="dark:absolute inset-0 bg-black/20 rounded-md flex items-center justify-center"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
