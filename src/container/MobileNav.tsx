"use client";

import MobileNavButton from "@/components/mobile/MobileNavButton";
import MobileNavModal from "@/container/MobileNavModal";
import { useState } from "react";
import { FaBloggerB } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import { MdHome } from "react-icons/md";

export const MOBILENAV = [
  { id: 0, href: "/", icon: <MdHome size={30} /> },
  { id: 1, href: "/blog", icon: <FaBloggerB size={26} /> },
  { id: 2, href: "/projects", icon: <FaProjectDiagram size={26} /> },
  { id: 3, href: "/guest", icon: <FaCircleUser size={26} /> },
];

export default function MobileNav() {
  const [key, setKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setKey((prevKey) => prevKey + 1);
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <MobileNavButton index={key} handleClick={handleClick} isOpen={isOpen} />
      <MobileNavModal isOpen={isOpen} items={MOBILENAV} />
    </>
  );
}
