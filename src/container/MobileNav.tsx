"use client";

// import MobileNavButton from "@/components/mobile/MobileNavButton";
// import MobileNavModal from "@/container/MobileNavModal";
import { useState } from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

import { MdHome } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export const MOBILENAV = [
  { id: 0, href: "/", icon: <MdHome size={18} /> },
  { id: 1, href: "/projects", icon: <FaProjectDiagram size={18} /> },
  { id: 2, href: "/blog", icon: <FaBloggerB size={18} /> },
];

export default function MobileNav() {
  // 기존 좌측하단 네비게이션 버튼
  // const [key, setKey] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setKey((prevKey) => prevKey + 1);
  //   setIsOpen((prevIsOpen) => !prevIsOpen);
  // };

  const [navIndex, setNavIndex] = useState(0);
  const router = useRouter();

  function handleNavigationButtonClick(index: number) {
    setNavIndex(index);
    router.push(MOBILENAV[index].href);
  }

  return (
    <>
      {/* <MobileNavButton index={key} handleClick={handleClick} isOpen={isOpen} />
      <MobileNavModal isOpen={isOpen} items={MOBILENAV} /> */}
      <div className="fixed bottom-16 w-full z-50 flex justify-center items-center md:hidden">
        <div className="relative flex w-[90%] items-center justify-center rounded-full bg-white/20 border border-white/30 p-1 shadow-lg backdrop-blur-md dark:bg-gray-800/40 dark:border-gray-600/30 dark:shadow-lg dark:backdrop-blur-md">
          {/* 그리드로 각 아이템을 같은 너비로 배치 */}
          <div className="grid w-full grid-cols-3 gap-1 relative">
            {MOBILENAV.map((nav, index) => {
              const isActive = navIndex === index;
              return (
                <button
                  key={nav.id}
                  type="button"
                  onClick={() => handleNavigationButtonClick(index)}
                  className="relative h-10 w-full rounded-full focus:outline-none"
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* 활성 탭의 배경 '알약'을 해당 셀 내부에 렌더링 */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        layoutId="mobile-nav-pill"
                        className="absolute inset-0 rounded-full bg-white/90 shadow-md dark:bg-white/20 dark:shadow-lg"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 40,
                          mass: 0.5,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* 아이콘 레이어 */}
                  <span
                    className={`relative z-10 flex h-full w-full items-center justify-center transition-colors duration-200 ${
                      isActive
                        ? "text-gray-800 dark:text-white"
                        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                  >
                    {nav.icon}
                  </span>

                  {/* 클릭 영역을 Link로 감싸고 싶다면 아래 주석 해제
                  <Link href={nav.href} className="absolute inset-0" aria-label={`go to ${nav.href}`} />
                  */}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
