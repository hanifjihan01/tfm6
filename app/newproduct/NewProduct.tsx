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
    <section className="bg-white py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-accent-900 md:text-3xl">
          New Products
        </h2>
        <p className="mt-2 text-sm text-accent-700 md:text-base">
          New innovation, best quality than before.
        </p>
        <p className="mt-1 text-sm text-accent-700 md:text-base">
          Make every moment flying operation become unforgettable.
        </p>
      </div>

      {/* Product Cards */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-3">
        {productData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
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
            <div className="flex flex-1 flex-col items-center justify-between p-6 text-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 md:text-base">
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
        ))}
      </div>
    </section>
  );
}
