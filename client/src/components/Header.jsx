import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router";
export function Header() {
  return (
    <header className="p flex justify-between px-10 py-5">
      <Link
        to="/"
        className="flex items-center justify-center text-lg font-bold text-orange-400"
      >
        <GiCoffeeCup />
        Kofii Shop
      </Link>

      <nav className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  );
}
