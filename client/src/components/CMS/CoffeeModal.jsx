import { useEffect, useRef } from "react";
import { useCoffeeModalStore } from "../../store/useCoffeeModalStore.jsx";
import { useAuthenticationStore } from "../../store/useAuthenticationStore.jsx";

export function CoffeeModal() {
  const dialogRef = useRef(null);

  const isCoffeeModalOpen = useCoffeeModalStore(
    (state) => state.isCoffeeModalOpen,
  );
  const closeModal = useCoffeeModalStore((state) => state.closeModal);
  const postCoffee = useCoffeeModalStore((state) => state.postCoffee);
  const updateCoffee = useCoffeeModalStore((state) => state.updateCoffee);
  const isPosting = useCoffeeModalStore((state) => state.isPosting);
  const postError = useCoffeeModalStore((state) => state.postError);
  const form = useCoffeeModalStore((state) => state.form);
  const setField = useCoffeeModalStore((state) => state.setField);
  const selectedCoffee = useCoffeeModalStore((state) => state.selectedCoffee);
  const token = useAuthenticationStore((state) => state.token);

  useEffect(() => {
    if (isCoffeeModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isCoffeeModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCoffee) {
      const success = await postCoffee(token);
      if (success) closeModal();
    } else {
      const success = await updateCoffee(token);
      if (success) closeModal();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={closeModal}
      className={`${isCoffeeModalOpen ? "flex" : "hidden"} m-auto p-6 rounded-xl
        shadow-xl relative flex-col w-full max-w-md items-stretch
        backdrop:bg-black/50`}
    >
      <button
        onClick={closeModal}
        aria-label="Close"
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-700
          hover:cursor-pointer transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <h1 className="text-xl font-semibold mb-4">Add Coffee</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Coffee Name
          </label>
          <input
            placeholder="e.g. Caramel Latte"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="bg-gray-100 border border-transparent rounded-md p-2
              focus:outline-none focus:ring-2 focus:ring-brown-300
              focus:bg-white transition-colors"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            placeholder="this coffee is good"
            type="text"
            name="description"
            id="description"
            value={form.description}
            onChange={(e) => setField("description", e.target.value)}
            className="bg-gray-100 border border-transparent rounded-md p-2
              focus:outline-none focus:ring-2 focus:ring-brown-300
              focus:bg-white transition-colors"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price
          </label>
          <div className="relative">
            <span
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
            >
              PHP
            </span>
            <input
              type="number"
              name="price"
              id="price"
              step="0.01"
              placeholder="0.00"
              value={form.price}
              onChange={(e) => setField("price", e.target.value)}
              className="bg-gray-100 border border-transparent rounded-md p-2
                pl-12 w-full focus:outline-none focus:ring-2
                focus:ring-brown-300 focus:bg-white transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-6">
          <label
            htmlFor="isFeatured"
            className="flex items-center gap-2 text-sm font-medium text-gray-700
              cursor-pointer"
          >
            <input
              type="checkbox"
              name="isFeatured"
              id="isFeatured"
              checked={form.isFeatured}
              onChange={(e) => setField("isFeatured", e.target.checked)}
              className="h-4 w-4 rounded accent-brown-400"
            />
            Featured
          </label>
          <label
            htmlFor="isActive"
            className="flex items-center gap-2 text-sm font-medium text-gray-700
              cursor-pointer"
          >
            <input
              type="checkbox"
              name="isActive"
              id="isActive"
              checked={form.isActive}
              onChange={(e) => setField("isActive", e.target.checked)}
              className="h-4 w-4 rounded accent-brown-400"
            />
            Active
          </label>
        </div>

        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="imageUpload"
            className="text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="imageUpload"
            name="imageFile"
            accept="image/*"
            onChange={(e) => setField("imageFile", e.target.files?.[0] ?? null)}
            className="bg-gray-100 rounded-md p-2 text-sm file:mr-3 file:py-1
              file:px-3 file:rounded-md file:border-0 file:bg-brown-100
              file:text-brown-700 file:text-sm file:font-medium
              hover:file:bg-brown-200 file:cursor-pointer cursor-pointer"
          />
          {selectedCoffee && (
            <i className="text-center text-gray-500 text-sm">
              only add image if u want to change old image
            </i>
          )}
        </div>

        {postError && (
          <p
            className="text-red-500 text-sm bg-red-50 border border-red-200
              rounded-md p-2"
          >
            {postError}
          </p>
        )}

        <button
          type="submit"
          disabled={isPosting}
          className="bg-brown-400 hover:bg-brown-500 text-white p-2.5 rounded-md
            mt-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed
            hover:cursor-pointer transition-colors"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </dialog>
  );
}
