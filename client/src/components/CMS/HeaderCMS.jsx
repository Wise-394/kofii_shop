import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router";

export function HeaderCMS() {
  return (
    <header
      className="sticky top-0 flex w-full justify-between px-4 py-5 sm:px-10
        items-center h-[8vh] bg-brown-100 z-50"
    >
      <Link
        to="/"
        className="flex items-center justify-center text-lg font-bold
          text-brown-200 font-playfair"
      >
        <GiCoffeeCup className="" />
        Kofii Shop
      </Link>
    </header>
  );
}
