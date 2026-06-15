import { useCoffeeStore } from "../../store/useCoffeesStore.jsx";
export function CoffeeCardCMS({ coffee }) {
  const deleteCoffee = useCoffeeStore((state) => state.deleteCoffee);
  const api = import.meta.env.VITE_BACKEND_API;

  return (
    <div
      className="bg-gray-200 rounded-lg overflow-hidden shadow-sm
        hover:shadow-md transition-shadow"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={`${api}/${coffee.imagePath}`}
          alt={coffee.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex flex-col">
        <p className="text-2xl font-playfair font-bold">{coffee.name}</p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {coffee.description}
        </p>
        <p className="font-semibold mt-1">${coffee.price}</p>
        <div className="flex items-center ml-auto gap-5 mt-2">
          <button
            onClick={() => deleteCoffee(coffee.id)}
            className="px-8 py-2 bg-brown-200 rounded-lg cursor-pointer
              text-white hover:bg-brown-300 transition-colors"
          >
            Delete
          </button>
          <button
            className="px-8 py-2 bg-brown-500 rounded-lg cursor-pointer
              text-white hover:bg-brown-300 transition-colors"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
