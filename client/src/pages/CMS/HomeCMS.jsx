import { CoffeeList } from "../../components/CMS/CoffeeList.jsx";
import { DashBoard } from "../../components/CMS/Dashboard.jsx";

export function HomeCMS() {
  return (
    <main className="p-5">
      <div
        className="w-full flex flex-col sm:flex-row sm:justify-between
          items-start gap-3 sm:items-center"
      >
        <div>
          <h1 className="text-2xl font-playfair font-bold text-brown-200">
            Content Management System
          </h1>
          <h2 className="text-md">Manage Koffii Shop Here</h2>
        </div>
        <button
          className="py-3 px-3 bg-brown-300 rounded-lg text-white
            hover:brightness-110 cursor-pointer"
        >
          Add New Coffee
        </button>
      </div>

      <DashBoard />
      <CoffeeList />
    </main>
  );
}
