import { create } from "zustand";
import { useCoffeeStore } from "./useCoffeesStore.jsx";
export const useCoffeeModalStore = create((set) => ({
  isCoffeeModalOpen: false,
  isPosting: false,
  postError: null,
  selectedCoffee: null,

  openModal: (coffee = null) =>
    set({ isCoffeeModalOpen: true, selectedCoffee: coffee }),
  closeModal: () => set({ isCoffeeModalOpen: false, selectedCoffee: null }),

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

  updateCoffee: async (formData, coffeeId, token) => {
    const api = import.meta.env.VITE_BACKEND_API;
    set({ isPosting: true, postError: null });
    try {
      if (!token) {
        throw new Error("Error updating coffee: unauthorized");
      }

      const res = await fetch(`${api}/coffee/${coffeeId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.errors?.[0] || data.message || "Error updating coffee",
        );
      }

      useCoffeeStore.setState((state) => ({
        coffees: state.coffees.map((coffee) =>
          coffee.id === coffeeId ? data.coffee : coffee,
        ),
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
//TODO BACKEND UPDATING
