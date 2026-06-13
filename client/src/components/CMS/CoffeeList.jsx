export function CoffeeList() {
  return (
    <section className="mt-5">
      <p className="text-2xl font-bold text-brown-200">Coffees</p>
      <div
        className="flex flex-col gap-2 sm:grid-cols-2 sm:grid md:grid-cols-4
          2xl:grid-cols-6 sm:gap-5"
      >
        <div className="bg-gray-200 rounded-lg">
          <img
            src="https://placehold.co/600x400"
            alt="coffee"
            className="rounded-t-lg"
          />
          <div className="p-3 flex flex-col">
            <p className="text-2xl font-playfair font-bold">Coffee Name</p>
            <p>description, This is a very large description</p>
            <p className="font-semibold">100$</p>
            <div className="flex items-center ml-auto gap-5">
              <button
                className="px-8 py-2 bg-brown-200 rounded-lg cursor-pointer
                  text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg">
          <img
            src="https://placehold.co/600x400"
            alt="coffee"
            className="rounded-t-lg"
          />
          <div className="p-3 flex flex-col">
            <p className="text-2xl font-playfair font-bold">Coffee Name</p>
            <p>description, This is a very large description</p>
            <p className="font-semibold">100$</p>
            <div className="flex items-center ml-auto gap-5">
              <button
                className="px-8 py-2 bg-brown-200 rounded-lg cursor-pointer
                  text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
