import { useEffect } from "react";
import { useCoffeeStore } from "../store/useCoffeesStore.jsx";
import { CoffeeCardMenu } from "../components/Menu/CoffeeCardMenu.jsx";

export function Menu() {
  const getCoffee = useCoffeeStore((state) => state.getCoffee);
  const coffees = useCoffeeStore((state) => state.coffees);

  useEffect(() => {
    getCoffee();
  }, [getCoffee]);
  return (
    <main
      className="min-h-screen flex-1 flex items-center p-2 flex-col gap-5
        bg-brown-50 text-center pb-5"
    >
      <div>
        <h1 className="text-2xl font-playfair font-bold mt-5 text-brown-500">
          View Our Menu
        </h1>
        <p className="text-brown-200 font-bold">
          Freshly Brewed Coffee For You
        </p>
      </div>

      <section
        className="flex flex-col gap-5 md:grid md:grid-cols-5 md:max-w-300
          lg:max-w-400"
      >
        {coffees
          .filter((coffee) => coffee.isActive)
          .map((coffee) => (
            <CoffeeCardMenu coffee={coffee} key={coffee.id} />
          ))}
      </section>
    </main>
  );
}
