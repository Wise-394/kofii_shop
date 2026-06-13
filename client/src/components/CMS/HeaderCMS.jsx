import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router";
import { useAuthenticationStore } from "../../store/useAuthenticationStore.jsx";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
export function HeaderCMS() {
  const logoutUser = useAuthenticationStore((state) => state.logoutUser);
  const isLoggedIn = useAuthenticationStore((state) => state.isLoggedIn);
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
      {isLoggedIn && (
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer flex items-center justify-center gap-2
              text-brown-400 hover:text-brown-600 transition-colors
              hover:brightness-200"
          >
            <IoSettingsOutline className="text-xl" />
            <span className="hidden sm:inline">Settings</span>
          </button>
          <button
            onClick={logoutUser}
            className="cursor-pointer flex items-center justify-center gap-2
              text-brown-400 hover:text-brown-600 transition-colors
              hover:brightness-200"
          >
            <IoIosLogOut className="text-2xl" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      )}
    </header>
  );
}
