import { useEffect, useRef } from "react";
import { useCoffeeModalStore } from "../../store/useCoffeeModalStore.jsx";
export function CoffeeModal() {
  const dialogRef = useRef(null);
  const isCoffeeModalOpen = useCoffeeModalStore(
    (state) => state.isCoffeeModalOpen,
  );
  const closeModal = useCoffeeModalStore((state) => state.closeModal);
  useEffect(() => {
    if (isCoffeeModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isCoffeeModalOpen]);
  return (
    <dialog
      ref={dialogRef}
      onClose={closeModal}
      className="m-auto p-5 rounded-lg"
    >
      <p>test</p>
      <button onClick={closeModal}>close</button>
    </dialog>
  );
}
