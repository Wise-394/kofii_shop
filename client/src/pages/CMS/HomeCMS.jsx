import { CoffeeList } from "../../components/CMS/CoffeeList.jsx";
import { DashBoard } from "../../components/CMS/Dashboard.jsx";
import { CoffeeModal } from "../../components/CMS/CoffeeModal.jsx";

export function HomeCMS() {
  return (
    <main className="p-5 flex-1 bg-brown-50 px-20">
      <CoffeeModal />
      <div
        className="w-full flex flex-col sm:flex-row sm:justify-between
          items-start gap-3 sm:items-center"
      >
        <div>
          <h1 className="text-2xl font-playfair font-bold text-brown-200">
            Kofii Dashboard
          </h1>
        </div>
      </div>

      <DashBoard />
      <CoffeeList />
    </main>
  );
}
