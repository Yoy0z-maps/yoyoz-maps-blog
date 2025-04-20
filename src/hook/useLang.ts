import { create } from "zustand";

interface LangState {
  lang: "ko" | "en";
  setLang: (lang: "ko" | "en") => void;
}

const useLangStore = create<LangState>((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),
}));

export default useLangStore;
