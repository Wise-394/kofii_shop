import { useCoffeeStore } from "../../store/useCoffeesStore.jsx";
import { useEffect } from "react";

const api = import.meta.env.VITE_BACKEND_API;

export function Carousel() {
  const getCoffee = useCoffeeStore((state) => state.getCoffee);
  const coffees = useCoffeeStore((state) => state.coffees);

  useEffect(() => {
    getCoffee();
  }, [getCoffee]);

  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-5">
      {coffees
        .filter((coffee) => coffee.isFeatured)
        .map((coffee) => (
          <div
            key={coffee.id}
            className="rounded-2xl text-left bg-brown-50 hover:-translate-y-2
              transition-transform duration-300 overflow-hidden"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={`${api}/${coffee.imagePath}`}
                alt={coffee.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-2xl font-bold font-playfair">{coffee.name}</p>
              <p className="pt-5 font-light">{coffee.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
