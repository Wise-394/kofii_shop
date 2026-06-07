export function Hero() {
  return (
    <section
      className="h-[92vh] flex flex-col md:grid md:grid-cols-2 justify-center
        items-center bg-[url('/assets/heroBg.webp')] bg-fixed bg-center
        bg-no-repeat bg-cover text-white relative p-2 md:p-10"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="text-center flex justify-center items-center flex-col order-2
          md:order-1 z-10 gap-3 md:text-left md:items:start"
      >
        <h1 className="text-3xl font-bold md:text-4xl">
          Slow down. Sip something warm.
        </h1>
        <p className="text-md font-semibold md:text-xl">
          A cozy spot made for long conversations and quiet mornings alike.
        </p>
        <button>Buy Now!</button>
      </div>
      <div className="order:2 md:order-1 items-center justify-center flex z-10"></div>
    </section>
  );
}
