const api = import.meta.env.VITE_BACKEND_API;

export function CoffeeCardMenu({ coffee }) {
  return (
    <div
      className="bg-gray-200 rounded-lg overflow-hidden shadow-md relative
        hover:-translate-y-2 transition-transform text-left"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={`${api}/${coffee.imagePath}`}
          alt={coffee.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex flex-col px-5">
        <p className="text-2xl font-playfair font-bold">{coffee.name}</p>
        <p className="text-sm text-gray-600 line-clamp-4">
          {coffee.description}
        </p>
        <p className="font-semibold mt-5 text-2xl text-brown-500">
          ₱{coffee.price}
        </p>
      </div>
    </div>
  );
}
//TODO MANUALLY SEED DATABASE
