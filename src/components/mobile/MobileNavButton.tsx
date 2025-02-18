import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";

import React from "react";
import { FiMinus } from "react-icons/fi";

interface MobileNavButtonProps {
  key: number;
  handleClick: () => void;
  isOpen: boolean;
}

// 이 부분 UI 키보드 UI 처리한 거 참고해서 입체감 살리기

export default function MobileNavButton({
  key,
  handleClick,
  isOpen,
}: MobileNavButtonProps) {
  return (
    <motion.div
      key={key}
      onClick={handleClick}
      animate={{ rotate: [0, 20, -20, 0] }}
      transition={{ duration: 0.3 }}
      className="flex w-[50px] h-[50px] fixed bottom-5 right-5 bg-red-500 rounded-full text-white items-center justify-center z-50 shadow-mobile-nav-button before:content-[''] before:absolute before:top-[5px] before:bottom-[10px] before:right-[8px] before:rounded-full before:bg-red-500"
    >
      {isOpen ? <FiMinus size={30} /> : <IoMdAdd size={30} />}
    </motion.div>
  );
}
