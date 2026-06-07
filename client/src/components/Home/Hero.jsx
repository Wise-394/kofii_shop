export function Hero() {
  return (
    <section
      className="h-[92vh] flex flex-col md:grid md:grid-cols-2 justify-center
        items-center bg-[url('/assets/heroBg.webp')] bg-fixed bg-center
        bg-no-repeat bg-cover text-white"
    >
      <div
        className="text-center flex justify-center items-center flex-col order-2
          md:order-1"
      >
        <h1>Slow down. Sip something warm.</h1>
        <p>A cozy spot made for long conversations and quiet mornings alike.</p>
        <button>Buy Now!</button>
      </div>
      <div className="order:2 md:order-1 items-center justify-center flex"></div>
    </section>
  );
}
