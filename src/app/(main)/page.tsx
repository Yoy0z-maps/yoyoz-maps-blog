"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Designs from "@/components/Designs";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavHighlighter from "@/components/NavHighlighter";
import Technologies from "@/components/Technologies";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [progress, setProgress] = useState(0);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const audio = new Audio("/assets/sounds/boot.wav");
  //   audio.play().catch((error) => {
  //     console.error("Failed to play audio:", error);
  //   });

  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(interval);
  //         setTimeout(() => {
  //           setIsLoading(false);
  //         }, 500);
  //       }
  //       return prevProgress + 1;
  //     });
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
  //       <p className="mb-4 font-pretendard">Loading...</p>
  //       <div className="w-64 h-2 bg-gray-700 rounded-full">
  //         <div
  //           className="h-full bg-white transition-all rounded-full"
  //           style={{ width: `${progress}%` }}
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div
      className={`bg-light-bg sm:px-0 px-6 dark:bg-dark-bg flex flex-col w-full h-full relative transition-all duration-500 pt-28 items-center overflow-x-hidden`}
    >
      <NavHighlighter path="/" />
      <Hero />
      <About />
      <Technologies />
      <Designs />
      <Experience />
      <Contact />
    </div>
  );
}
