"use client";

import useLangStore from "@/hook/useLang";
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
  const { lang } = useLangStore();

  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/johnhan.jpg";
    img.decode?.().then(() => setImgLoaded(true));
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-10 lg:mb-35">
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
              animate={imgLoaded ? "visible" : {}}
              className="font-pretendard text-red-500 text-3xl tracking-tight"
              /* className="font-pretendard text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight" */
            >
              Maker · Developer · Fixer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate={imgLoaded ? "visible" : {}}
              className="font-pretendard tracking-wide text-theme-light dark:text-white font-light py-6 my-2 max-w-xl"
            >
              {lang === "ko" ? (
                <>
                  안녕하세요 Yoy0z-maps의 블로그에 오신 것을 환영합니다! 저는
                  메이커로서 무언가 혁신적인 것을 창작하는 것을 좋아하며,
                  개발자로서는 새로운 기술을 배우는 것을 좋아하고, 해결사로서
                  문제가 있다면 그 문제에 깊게 고민하고 해결방안을 찾는 것을
                  즐깁니다. 이 블로그가 당신의 바쁜 하루 속에 잠시나마 영감을 줄
                  수 있는 쉼표가 되길 바랍니다.
                </>
              ) : (
                <>
                  Welcome to the blog of Yoy0z-maps! As a maker, I love creating
                  innovative things. As a developer, I enjoy learning new
                  technologies. And as a problem solver, I find joy in diving
                  deep into challenges and discovering solutions. I hope this
                  blog can be a small pause of inspiration in your busy day.
                </>
              )}
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
