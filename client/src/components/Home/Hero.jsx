export function Hero() {
  return (
    <section
      className="h-[90vh] flex flex-col sm:grid sm:grid-cols-2 justify-center
        items-center"
    >
      <div
        className="text-center flex justify-center items-center flex-col order-2
          sm:order-1"
      >
        <h1>Everyone loves coffee </h1>
        <p>lorem ipsum sample test that says something</p>
        <button>Buy Now!</button>
      </div>
      <div className="order:2 sm:order-1">
        <p>sample image</p>
      </div>
    </section>
  );
}
