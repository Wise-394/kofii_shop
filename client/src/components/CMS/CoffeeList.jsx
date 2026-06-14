import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useEffect } from "react";
import { useCoffeeStore } from "../../store/useCoffeesStore.jsx";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { MdError } from "react-icons/md";
import { useCoffeeModalStore } from "../../store/useCoffeeModalStore.jsx";

export function CoffeeList() {
  const { coffees, isLoading, error, getCoffee } = useCoffeeStore();
  const openModal = useCoffeeModalStore((state) => state.openModal);

  useEffect(() => {
    getCoffee();
  }, [getCoffee]);

  return (
    <section className="mt-5 flex flex-col gap-5 items-start">
      <p className="text-2xl font-bold text-brown-200">Coffees</p>

      <div
        className="flex w-full justify-between flex-col md:flex-row gap-2
          items-start"
      >
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
            />
          </div>
          <button
            className="py-2 px-3 bg-brown-200 rounded-lg text-white
              hover:brightness-110 cursor-pointer flex items-center gap-2"
          >
            <IoMdSearch />
            Search
          </button>
        </div>

        <button
          className="py-2 px-3 bg-brown-300 rounded-lg text-white
            hover:brightness-110 cursor-pointer flex items-center gap-2"
          onClick={openModal}
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
        {coffees.map((post) => (
          <div className="bg-gray-200 rounded-lg" key={post.id}>
            <img
              src="https://placehold.co/600x400"
              alt="coffee"
              className="rounded-t-lg"
            />
            <div className="p-3 flex flex-col">
              <p className="text-2xl font-playfair font-bold">{post.name}</p>
              <p>{post.description}</p>
              <p className="font-semibold">{post.price}</p>
              <div className="flex items-center ml-auto gap-5">
                <button
                  className="px-8 py-2 bg-brown-200 rounded-lg cursor-pointer
                    text-white"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
