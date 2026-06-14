import { create } from "zustand";

export const useCoffeeModalStore = create((set) => ({
  isCoffeeModalOpen: false,

  openModal: () => set({ isCoffeeModalOpen: true }),
  closeModal: () => set({ isCoffeeModalOpen: false }),
}));
