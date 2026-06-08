import { Carousel } from "./Carousel.jsx";

export function Featured() {
  return (
    <section
      className="bg-brown-100 p-5 md:py-10 md:px-[10vw] lg:px-[10vw]
        min-h-[92vh]"
    >
      <div
        className="flex flex-col items-center md:items-start gap-5 pt-2
          text-center md:text-left"
      >
        <h1 className="text-3xl font-bold font-playfair">
          Check Our Best Sellers
        </h1>
        <p className="font-light text-lg text-justify md:text-left">
          Our best sellers aren't chosen by us. They're chosen by you, the
          people who order them on Mondays, on rainy afternoons and on the way
          to work. Every sip tells a story of early mornings, quiet moments, and
          the small rituals that make each day worth savoring.
        </p>
        <Carousel />
      </div>
    </section>
  );
}
