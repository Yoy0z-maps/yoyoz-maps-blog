import { IoLanguageOutline } from "react-icons/io5";

export default function LanguageSelector() {
  return (
    <div className="absolute right-24 text-theme-light dark:text-theme-dark p-2 rounded-full hover:bg-black/20 dark:hover:bg-white/10 transition-all duration-300">
      <IoLanguageOutline size={20} />
    </div>
  );
}
