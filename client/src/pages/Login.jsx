import { MdCoffee } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
export function Login() {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const toggleIsPasswordOpen = () => {
    setIsPasswordOpen((prev) => !prev);
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <main className="h-screen flex flex-col items-center justify-center p-5">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="p-7 rounded-2xl w-full shadow-lg border-2 border-brown-200
          max-w-90 flex flex-col items-center gap-3"
      >
        <div className="bg-brown-200 p-3 rounded-lg">
          <MdCoffee className="text-5xl text-white" />
        </div>
        <div>
          <h1 className="text-2xl text-center font-bold text-brown-200">
            Koffii CMS
          </h1>
          <h2 className="text-lg text-center font-semibold">
            Sign in to your account to continue
          </h2>
        </div>
        <div className="flex flex-col items-center p-1 w-full gap-2">
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="font-semibold">
              Username:
            </label>
            <div className="relative w-full">
              <span
                className="absolute left-2 top-1/2 -translate-y-1/2
                  text-gray-400"
              >
                <IoMdPerson />
              </span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                className="rounded-md p-1 pl-7 bg-gray-200 w-full"
                autoComplete="username"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="font-semibold">
              Password:
            </label>
            <div className="w-full relative">
              <span
                className="absolute left-2 top-1/2 -translate-y-1/2
                  text-gray-400"
              >
                <TbLockPassword />
              </span>
              <span
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={toggleIsPasswordOpen}
              >
                {isPasswordOpen ? <FaRegEye /> : <FaEyeSlash />}
              </span>
              <input
                type={isPasswordOpen ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                className="rounded-md p-1 bg-gray-200 pl-7 w-full pr-7"
                autoComplete="current-password"
              />
            </div>
          </div>
          <button
            className="bg-brown-500 text-white w-full rounded-md p-2 mt-7
              cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
