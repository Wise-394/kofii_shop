import { useCoffeeStore } from "../../store/useCoffeesStore.jsx";
import { useCoffeeModalStore } from "../../store/useCoffeeModalStore.jsx";
import { MdDelete, MdEdit } from "react-icons/md";
export function CoffeeCardCMS({ coffee }) {
  const api = import.meta.env.VITE_BACKEND_API;
  const deleteCoffee = useCoffeeStore((state) => state.deleteCoffee);
  const openModal = useCoffeeModalStore((state) => state.openModal);

  const handleEdit = () => {
    openModal(coffee);
  };
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative">
      {!coffee.isActive ? (
        <div
          className="absolute top-2 right-2 bg-red-500 py-1 px-2 rounded-2xl
            shadow-lg text-sm text-white z-10"
        >
          <p>Inactive</p>
        </div>
      ) : (
        coffee.isFeatured && (
          <div
            className="absolute top-2 right-2 bg-orange-300 py-1 px-2
              rounded-2xl shadow-lg text-sm z-10"
          >
            <p>Featured</p>
          </div>
        )
      )}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={`${api}/${coffee.imagePath}`}
          alt={coffee.name}
          className={`w-full h-full object-cover
            ${!coffee.isActive ? "grayscale" : ""}`}
        />
      </div>
      <div className="p-3 flex flex-col">
        <p className="text-2xl font-playfair font-bold">{coffee.name}</p>
        <p className="text-sm text-gray-600 line-clamp-4">
          {coffee.description}
        </p>
        <p className="font-semibold mt-2 text-2xl text-brown-500">
          ₱{coffee.price}
        </p>
        <div className="flex items-center ml-auto gap-2 mt-2">
          <button
            onClick={() => deleteCoffee(coffee.id)}
            className="px-4 py-2 bg-red-400 rounded-lg cursor-pointer text-white
              hover:bg-red-300 transition-colors flex items-center"
          >
            <MdDelete />
          </button>
          <button
            className="px-4 py-1 bg-brown-500 rounded-lg cursor-pointer
              text-white hover:bg-brown-300 transition-colors flex items-center
              gap-1"
            onClick={handleEdit}
          >
            <MdEdit />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
