import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="h-[92vh] flex flex-col">
      {/* ADDTL INFOS */}

      {/* GRID */}
      <div
        className="flex flex-col md:grid md:grid-cols-2 justify-center
          items-center bg-[url('/assets/heroBg.webp')] bg-center bg-no-repeat
          bg-cover text-white relative px-2 md:px-10 h-full lg:px-15"
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/70 md:bg-transparent
            md:bg-linear-to-r md:from-black/85 md:via-black/45 md:to-black/30"
        />
        {/* Main CONTENT */}
        <div
          className="text-center flex justify-center items-center flex-col
            order-2 md:order-1 z-10 gap-3 md:text-left md:items-start lg:px-10"
        >
          <h1
            className="text-3xl font-bold md:text-4xl lg:text-5xl font-playfair"
          >
            Slow down. <br /> Sip something warm.
          </h1>
          <p className="text-md md:text-xl font-light">
            A cozy spot made for long conversations and quiet mornings alike.
          </p>
          <Link
            className="hover:cursor-pointer bg-brown-300 py-3 px-6 rounded-2xl
              hover:brightness-115 mt-7"
            to="/menu"
          >
            Buy Now!
          </Link>
        </div>
        <div
          className="order:2 md:order-1 items-center justify-center flex z-10"
        ></div>
      </div>
      <div
        className="bg-brown-500 text-white h-12 flex justify-between
          items-center p-5 text-xs md:text-base sm:px-10 font-light"
      >
        <p className="flex items-center gap-1">
          <IoIosPin />
          42 CRT Avenue, Akiba Underground
        </p>
        <div className="flex gap-4 sm:gap-5 hover:cursor-pointer text-lg">
          <RiInstagramFill />
          <FaFacebook />
          <FaFacebookMessenger />
        </div>
      </div>
    </section>
  );
}
