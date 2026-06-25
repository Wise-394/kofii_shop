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
    <main className="min-h-screen flex-1 flex items-center p-2 flex-col gap-5">
      <h1 className="text-2xl font-playfair font-bold mt-5">View Our Menu</h1>
      <section
        className="flex flex-col gap-5 md:grid md:grid-cols-4 md:max-w-300
          lg:grid-cols-6 lg:max-w-400"
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
