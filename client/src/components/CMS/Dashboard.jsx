import { FaCoffee } from "react-icons/fa";
import { TbCoffee, TbCoffeeOff } from "react-icons/tb";

export function DashBoard() {
  return (
    <section
      className="w-full flex mt-5 gap-5 justify-center flex-wrap flex-col
        sm:flex-row"
    >
      <div
        className="p-3 pl-5 bg-gray-200 rounded-lg flex flex-col flex-1 h-fit
          shadow-md"
      >
        <p className="text-lg flex items items-center gap-2 text-brown-200">
          <FaCoffee />
          total coffees
        </p>
        <p className="text-3xl font-extrabold">10</p>
        <p>In the database</p>
      </div>
      <div
        className="p-3 pl-5 bg-gray-200 rounded-lg flex flex-col flex-1 h-fit"
      >
        <p className="text-lg flex items items-center gap-2 text-green-500">
          <TbCoffee />
          Active
        </p>
        <p className="text-3xl font-extrabold">10</p>
        <p> 80% of your coffees</p>
      </div>
      <div
        className="p-3 pl-5 bg-gray-200 rounded-lg flex flex-col flex-1 h-fit"
      >
        <p className="text-lg flex items items-center gap-2 text-red-500">
          <TbCoffeeOff />
          Inactive
        </p>
        <p className="text-3xl font-extrabold">1</p>
        <p> 10% of your coffees</p>
      </div>
    </section>
  );
}
