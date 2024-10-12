"use client";
import { useState } from "react";
import { useAppearanceThemeStore } from "@/store/useAppearanceThemeStore";

export default function Appearance() {
  const { toggleTheme } = useAppearanceThemeStore();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="m-0 p-0 box-borde overflow-hidden">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isChecked}
        onChange={() => {
          toggleTheme();
          setIsChecked(!isChecked);
        }}
      ></input>
      <div
        id="display"
        className="flex justify-center items-center w-[100%] h-[100%]"
      >
        <label
          htmlFor="toggle"
          className={`relative rounded-full w-[400px] h-[200px] cursor-pointer transition-all duration-500 ${
            isChecked
              ? "bg-appearancelightlabel shadow-appearancelightlabel"
              : "bg-appearancedarklabel shadow-appearancedarklabel"
          }`}
        >
          <div
            id="circle"
            className={`rounded-full hover:w-[200px] w-[160px] h-[160px] absolute top-[50%] overflow-hidden ${
              isChecked
                ? "left-[100%] translate-x-[-110%] translate-y-[-50%] bg-white shadow-appearancelightcircle"
                : "left-[0%] translate-x-[10%] translate-y-[-50%] bg-darkbg shadow-appearancedarkcircle"
            } flex items-center justify-center transition-all duration-500`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className={`w-[80px] absolute transition-all duration-500 ${isChecked ? "mt-[150%] opacity-0" : "mt-[0%] opacity-100"}`}
              id="moon"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#FFD580"
              className={`w-[80px] h-[80px]absolute transition-all duration-500 ${isChecked ? "mt-[0%] opacity-100" : "mt-[-150%] opacity-0"}`}
              id="sun"
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          </div>
        </label>
      </div>
    </div>
  );
}
