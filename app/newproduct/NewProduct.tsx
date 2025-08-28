'use client';

import Image from 'next/image';

const productData = [
  {
    id: 1,
    image: '/assets/images/service/mini_drone.png',
    title: 'Mini Drone',
    description:
      'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 2,
    image: '/assets/images/service/drone_light.png',
    title: 'Drone Light',
    description:
      'Drone light is every creators dream. Setting apperture manually and high battery performance. Drone light is everything you need.',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
  },
  {
    id: 3,
    image: '/assets/images/service/phantom.jpg',
    title: 'Phantom Drone',
    description:
      'Inspired by performance. Phantom drone can move faster and smarter with stable focus on speed & power.',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
];

export function NewProducts() {
  return (
    <section className="bg-accent-900 py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          New Products
        </h2>
        <p className="mt-2 text-sm text-white md:text-base">
          New innovation, best quality than before.
        </p>
        <p className="mt-1 text-sm text-white md:text-base">
          Make every moment flying operation become unforgettable.
        </p>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">
        {productData.map((item) => {
          const isDroneLight = item.id === 2;

          return (
            <div
              key={item.id}
              className={`flex flex-col overflow-hidden rounded-xl border shadow-sm transition hover:shadow-lg
                ${isDroneLight ? 'border-black bg-white' : 'border-gray-200 bg-accent-900'}`}
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div
                className={`flex flex-1 flex-col items-center justify-between p-6 text-center 
                  ${isDroneLight ? 'text-black' : 'text-white'}`}
              >
                <div>
                  <h3
                    className={`text-lg font-bold md:text-xl ${
                      isDroneLight ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm md:text-base ${
                      isDroneLight ? 'text-black' : 'text-white'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <button
                  className={`mt-6 rounded-full px-6 py-2 text-sm font-semibold text-white ${item.buttonColor}`}
                >
                  GET NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
