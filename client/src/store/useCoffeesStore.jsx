import { create } from "zustand";
import { useAuthenticationStore } from "./useAuthenticationStore.jsx";

export const useCoffeeStore = create((set) => ({
  coffees: [],
  isLoading: false,
  error: null,
  isDeleting: false,
  deleteError: null,

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

  deleteCoffee: async (id) => {
    const api = import.meta.env.VITE_BACKEND_API;
    const token = useAuthenticationStore.getState().token;
    set({ isDeleting: true, deleteError: null });
    try {
      if (!token) throw new Error("Unauthorized");

      const res = await fetch(`${api}/coffee/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Unable to delete coffee");
      }

      set((state) => ({
        coffees: state.coffees.filter((c) => c.id !== id),
      }));

      return true;
    } catch (err) {
      console.error(err);
      set({ deleteError: err.message });
      return false;
    } finally {
      set({ isDeleting: false });
    }
  },
}));
