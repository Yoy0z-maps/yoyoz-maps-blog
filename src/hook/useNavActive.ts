import { create } from "zustand";

interface NavActiveState {
  path: string;
  setPath: (value: string) => void;
}

const useNavActiveStore = create<NavActiveState>((set) => ({
  path: "",
  setPath: (value) => set({ path: value }),
}));

export default useNavActiveStore;
