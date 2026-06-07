import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header
      className="sticky top-0 flex w-screen justify-between px-4 py-5 sm:px-10
        h-[8vh] bg-brown-100 z-50"
    >
      <Link
        to="/"
        className="flex items-center justify-center text-lg font-bold
          text-brown-200"
      >
        <GiCoffeeCup className="" />
        Kofii Shop
      </Link>

      <nav className="hidden gap-15 sm:flex">
        <Link
          to="/"
          className="hover:text-brown-500 font-medium hover:scale-108
            transition-transform"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="hover:text-brown-500 font-medium hover:scale-108
            transition-transform"
        >
          Cart
        </Link>
        <Link
          to="/shop"
          className="hover:text-brown-500 font-medium hover:scale-108
            transition-transform"
        >
          Shop
        </Link>
      </nav>
      <button className="block sm:hidden" onClick={toggleMobileMenu}>
        <CiMenuBurger className="" />
      </button>

      {/* Mobile menu */}
      <nav
        className={`${isOpen ? "translate-x-0" : "translate-x-full"} flex fixed
          top-0 right-0 h-screen w-2/4 flex-col items-center gap-10 bg-brown-500
          text-white pt-12 sm:hidden transition-transform`}
      >
        <button className="absolute top-5 right-5" onClick={toggleMobileMenu}>
          X
        </button>
        <Link to="/" className="hover:text-brown-200">
          Home
        </Link>
        <Link to="/cart" className="hover:text-brown-200">
          Cart
        </Link>
        <Link to="/shop" className="hover:text-brown-200">
          Shop
        </Link>
      </nav>
    </header>
  );
}
