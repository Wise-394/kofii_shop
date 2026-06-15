import { create } from "zustand";
import { useCoffeeStore } from "./useCoffeesStore.jsx";
export const useCoffeeModalStore = create((set) => ({
  isCoffeeModalOpen: false,
  isPosting: false,
  postError: null,

  openModal: () => set({ isCoffeeModalOpen: true }),
  closeModal: () => set({ isCoffeeModalOpen: false }),

  postCoffee: async (formData, token) => {
    const api = import.meta.env.VITE_BACKEND_API;
    set({ isPosting: true, postError: null });
    try {
      if (!token) {
        throw new Error("Error submitting coffee: unauthorized");
      }

      const res = await fetch(`${api}/coffee`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const data = await res.json();

      if (!res.ok)
        throw new Error(data.errors?.[0] || "Error submitting coffee");

      useCoffeeStore.setState((state) => ({
        coffees: [...state.coffees, data.coffee],
      }));

      return true;
    } catch (err) {
      console.error(err);
      set({ postError: err.message });
      return false;
    } finally {
      set({ isPosting: false });
    }
  },
}));
