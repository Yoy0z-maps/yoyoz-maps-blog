"use client";

import useLangStore from "@/hook/useLang";
import { useState } from "react";

export default function LanguageSelector() {
  const { lang, setLang } = useLangStore();
  const [language, setLanguage] = useState<"ko" | "en" | null>(lang);

  const handleLangChange = (lang: "ko" | "en") => {
    setLang(lang);
    setLanguage(lang);
  };

  return (
    <div className="absolute right-24 text-theme-light dark:text-theme-dark p-2 rounded-full hover:bg-black/20 dark:hover:bg-white/10 transition-all duration-300">
      <div
        onClick={() => handleLangChange(language === "ko" ? "en" : "ko")}
        className="w-8 h-8 relative"
      >
        <p
          className={`text-[12px] absolute top-[2px] left-[4px] font-pretendard text-theme-light dark:text-theme-dark transition-all duration-300 ${
            language === "ko" ? "scale-150" : ""
          }`}
        >
          한
        </p>
        <p
          className={`text-sm absolute bottom-[2px] right-[4px] font-pretendard text-theme-light dark:text-theme-dark transition-all duration-300 ${
            language === "en" ? "scale-150" : ""
          }`}
        >
          A
        </p>
      </div>
    </div>
  );
}
