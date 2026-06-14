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
  const isPosting = useCoffeeModalStore((state) => state.isPosting);
  const postError = useCoffeeModalStore((state) => state.postError);
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
    const formData = new FormData(e.target);

    const success = await postCoffee(formData, token);
    if (success) {
      e.target.reset();
      closeModal();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={closeModal}
      className={`${isCoffeeModalOpen ? "flex" : "hidden"} m-auto p-5 rounded-lg
        relative flex-col w-full items-center sm:w-120`}
    >
      <button onClick={closeModal} className="absolute top-2 right-2">
        close
      </button>
      <h1>Coffee</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="name">Coffee Name</label>
          <input
            placeholder="enter coffee name"
            type="text"
            name="name"
            id="name"
            className="bg-gray-200 p-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="description">Coffee Description</label>
          <input
            placeholder="this coffee is good"
            type="text"
            name="description"
            id="description"
            className="bg-gray-200 p-2"
          />
        </div>
        <div className="flex flex-col w-full items-start">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className="bg-gray-200 p-2"
          />
        </div>
        <div className="flex flex-col w-full items-start">
          <label htmlFor="imageUpload">Select an image:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageFile"
            accept="image/*"
            className="bg-gray-200 p-2"
          />
        </div>
        {postError && <p className="text-red-500 text-sm">{postError}</p>}
        <button
          type="submit"
          disabled={isPosting}
          className="bg-blue-500 text-white p-2 rounded mt-2
            disabled:opacity-50"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </dialog>
  );
}
