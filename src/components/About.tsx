"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="font-pretendard my-20 text-center text-4xl text-white">
        About
        <span className="text-neutral-500 font-pretendard"> Me</span>
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
            <p className="font-pretendard text-white my-2 max-w-xl py-6">
              Eu tempor aute elit. Elit labore sunt consequat nostrud. Laboris
              nisi dolore nulla nostrud. Ut id fugiat nulla commodo cillum ut
              aliquip nostrud pariatur eiusmod ullamco est velit velit irure.
              Eiusmod amet ipsum eiusmod minim culpa.Eu tempor aute elit. Elit
              labore sunt consequat nostrud. Laboris nisi dolore nulla nostrud.
              Ut id fugiat nulla commodo cillum ut aliquip nostrud pariatur
              eiusmod ullamco est velit velit irure. Eiusmod amet ipsum eiusmod
              minim culpa.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
