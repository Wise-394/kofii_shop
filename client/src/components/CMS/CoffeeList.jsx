import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useCoffeeStore } from "../../store/useCoffeesStore.jsx";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { MdError } from "react-icons/md";
import { useCoffeeModalStore } from "../../store/useCoffeeModalStore.jsx";
import { CoffeeCardCMS } from "./CoffeeCardCMS.jsx";

export function CoffeeList() {
  const { coffees, isLoading, error, getCoffee } = useCoffeeStore();
  const [search, setSearch] = useState("");
  const openModal = useCoffeeModalStore((state) => state.openModal);
  useEffect(() => {
    getCoffee();
  }, [getCoffee]);

  return (
    <section className="mt-5 flex flex-col gap-5 items-start">
      <p className="text-2xl font-bold text-brown-200">Coffees</p>

      <div className="flex w-full flex-col md:flex-row gap-2 items-start">
        <div className="flex gap-2 w-full md:w-auto">
          <div
            className="relative inline-flex items-center justify-center flex-1"
          >
            <span
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500
                pointer-events-none"
            >
              <IoMdSearch />
            </span>
            <input
              type="text"
              name="coffeeFilter"
              id="coffeeFilter"
              placeholder="Search Coffees..."
              className="py-2 pl-8 rounded-md bg-gray-200 w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className="py-2 px-3 bg-brown-300 rounded-lg text-white
            hover:brightness-110 cursor-pointer flex items-center gap-2"
          onClick={() => openModal()}
        >
          <FaPlus /> Add New Coffee
        </button>
      </div>

      <div
        className="flex flex-col gap-2 sm:grid-cols-2 sm:grid md:grid-cols-4
          2xl:grid-cols-6 sm:gap-5 w-full"
      >
        {isLoading && (
          <div className="bg-gray-200 rounded-lg">
            <div className="rounded-t-lg bg-gray-300 h-45" />
            <div className="p-3 flex flex-col">
              <p>loading...</p>
              <div className="flex items-center ml-auto gap-5">
                <div className="bg-gray-300 h-7 w-20 rounded-lg text-white"></div>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div
            className="bg-gray-200 rounded-lg w-full flex flex-col p-5
              items-center text-center"
          >
            <MdError className="text-5xl" />
            <p className="text-brown-200 font-bold text-lg">ERROR</p>
            <p>{error}</p>
          </div>
        )}
        {coffees.length <= 0 && !isLoading && !error && (
          <div
            className="bg-gray-200 rounded-lg w-full flex flex-col p-5
              items-center text-center"
          >
            <MdOutlineCoffeeMaker className="text-5xl" />
            <p className="text-brown-200 font-bold text-lg">EMPTY</p>
            <p>There are currently no coffee in the database</p>
          </div>
        )}
        {coffees
          .filter((coffee) =>
            coffee.name.toLowerCase().includes(search.toLowerCase()),
          )
          .map((coffee) => (
            <CoffeeCardCMS coffee={coffee} key={coffee.id} />
          ))}
      </div>
    </section>
  );
}
