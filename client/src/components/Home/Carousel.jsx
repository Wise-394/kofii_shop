import espresso from "/assets/espresso.webp";
export function Carousel() {
  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        className="rounded-2xl text-left bg-brown-50 hover:translate-y-2
          transition-transform"
      >
        <img src={espresso} alt="espress" className="rounded-t-2xl" />
        <div className="p-5">
          <p className="text-2xl font-bold font-playfair">Espresso</p>
          <p className="pt-5 font-light">
            A concentrated shot of coffee brewed by forcing hot water under high
            pressure through finely ground beans. Rich, bold, and velvety and
            with a golden crema on top that seals in the aroma. The foundation
            of every great coffee drink.
          </p>
        </div>
      </div>
      <div
        className="rounded-2xl text-left bg-brown-50 hover:translate-y-1
          transition-transform"
      >
        <img src={espresso} alt="espress" className="rounded-t-2xl" />
        <div className="p-5">
          <p className="text-2xl font-bold font-playfair">Espresso</p>
          <p className="pt-5 font-light">
            A concentrated shot of coffee brewed by forcing hot water under high
            pressure through finely ground beans. Rich, bold, and velvety and
            with a golden crema on top that seals in the aroma. The foundation
            of every great coffee drink.
          </p>
        </div>
      </div>
      <div
        className="rounded-2xl text-left bg-brown-50 hover:translate-y-1
          transition-transform"
      >
        <img src={espresso} alt="espress" className="rounded-t-2xl" />
        <div className="p-5">
          <p className="text-2xl font-bold font-playfair">Espresso</p>
          <p className="pt-5 font-light">
            A concentrated shot of coffee brewed by forcing hot water under high
            pressure through finely ground beans. Rich, bold, and velvety and
            with a golden crema on top that seals in the aroma. The foundation
            of every great coffee drink.
          </p>
        </div>
      </div>
      <div
        className="rounded-2xl text-left bg-brown-50 hover:translate-y-1
          transition-transform"
      >
        <img src={espresso} alt="espress" className="rounded-t-2xl" />
        <div className="p-5">
          <p className="text-2xl font-bold font-playfair">Espresso</p>
          <p className="pt-5 font-light">
            A concentrated shot of coffee brewed by forcing hot water under high
            pressure through finely ground beans. Rich, bold, and velvety and
            with a golden crema on top that seals in the aroma. The foundation
            of every great coffee drink.
          </p>
        </div>
      </div>
    </div>
  );
}
