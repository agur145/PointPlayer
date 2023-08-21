import { create } from "zustand";

const useStore = create((set, get) => ({
  userData: null,
  getUserData: () => {
    return get();
  },
}));
