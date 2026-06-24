import { create } from "zustand";
import { useCoffeeStore } from "./useCoffeesStore.jsx";

const defaultForm = {
  name: "",
  description: "",
  price: "",
  isFeatured: false,
  isActive: false,
  imageFile: null,
};

export const useCoffeeModalStore = create((set, get) => ({
  isCoffeeModalOpen: false,
  isPosting: false,
  postError: null,
  selectedCoffee: null,
  form: { ...defaultForm },

  setField: (field, value) =>
    set((state) => ({ form: { ...state.form, [field]: value } })),

  resetForm: () => set({ form: { ...defaultForm } }),

  openModal: (coffee = null) =>
    set({
      isCoffeeModalOpen: true,
      selectedCoffee: coffee,
      postError: null,
      form: coffee
        ? {
            name: coffee.name ?? "",
            description: coffee.description ?? "",
            price: coffee.price ?? "",
            isFeatured: coffee.isFeatured ?? false,
            isActive: coffee.isActive ?? false,
            imageFile: null,
          }
        : { ...defaultForm },
    }),

  closeModal: () =>
    set({
      isCoffeeModalOpen: false,
      selectedCoffee: null,
      form: { ...defaultForm },
    }),

  _buildFormData: () => {
    const { form } = get();
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("price", form.price);
    fd.append("isFeatured", form.isFeatured);
    fd.append("isActive", form.isActive);
    if (form.imageFile) fd.append("imageFile", form.imageFile);
    return fd;
  },

  postCoffee: async (token) => {
    const api = import.meta.env.VITE_BACKEND_API;
    set({ isPosting: true, postError: null });
    try {
      if (!token) throw new Error("Error submitting coffee: unauthorized");

      const res = await fetch(`${api}/coffee`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: get()._buildFormData(),
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

  updateCoffee: async (coffeeId, token) => {
    const api = import.meta.env.VITE_BACKEND_API;
    set({ isPosting: true, postError: null });
    try {
      if (!token) throw new Error("Error updating coffee: unauthorized");

      const res = await fetch(`${api}/coffee/${coffeeId}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: get()._buildFormData(),
      });
      const data = await res.json();

      if (!res.ok)
        throw new Error(
          data.errors?.[0] || data.message || "Error updating coffee",
        );

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
