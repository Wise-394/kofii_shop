import { create } from "zustand";

export const useCoffeeStore = create((set) => ({
  coffees: [],
  isLoading: false,
  error: null,

  getCoffee: async () => {
    const api = import.meta.env.VITE_BACKEND_API;
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`${api}/coffee`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      set({ coffees: data });
    } catch (err) {
      console.error(err);
      set({ error: "Error fetching coffees" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
