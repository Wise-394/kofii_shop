import threefee from "/assets/threefee.jpg";
export function Info() {
  return (
    <section
      className="min-h-50 bg-brown-300 flex flex-col p-5 md:flex-row text-white
        gap-5 md:px-[10vw] justify-center items-center lg:px-[15vw]"
    >
      <div className="flex-1 gap-2 flex flex-col md:items-start">
        <h1
          className="font-playfair text-2xl text-center md:text-2xl font-bold
            md:text-left lg:text-4xl"
        >
          Start your morning with us
        </h1>
        <p className="font-thin text-justify md:text-left lg:text-lg">
          There is something magical about the first sip of the day. The warmth
          wraps around your hands, the rich aroma slowly pulls you into the
          present moment, and the world feels a little more welcoming. At our
          coffee shop, we believe mornings deserve to be savored, not rushed.
        </p>
      </div>
      <div>
        <img
          src={threefee}
          className="rounded-lg md:max-w-[40vw] md:max-h-[30vh]"
        />
      </div>
    </section>
  );
}
