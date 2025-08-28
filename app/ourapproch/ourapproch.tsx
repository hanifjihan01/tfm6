'use client';

import Image from 'next/image';

const serviceData = [
  {
    id: 1,
    image: '/assets/images/service/ai1.png',
    title: 'Artificial Intelligence (AI)',
    description: 'Drone move faster with weighing component under 200 g',
  },
  {
    id: 2,
    image: '/assets/images/service/iot2.png',
    title: 'Internet Of Things (IoT) Solution',
    description:
      'Take a beautiful view with best camera up to 4K Camera Resolution',
  },
  {
    id: 3,
    image: '/assets/images/service/sm4.png',
    title: 'Software Management and Platform',
    description: 'Drone move faster with weighing component under 200 g',
  },
  {
    id: 4,
    image: '/assets/images/service/sms.png',
    title: 'Smart Home System',
    description:
      'Take a beautiful view with best camera up to 4K Camera Resolution',
  },
];

export function OurApproach() {
  return (
    <section className="bg-accent-900 py-16">
      {' '}
      {/* background jadi putih */}
      {/* Heading */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold text-white md:text-3xl">
          Our Approach
        </h3>
        <p className="-mt-4 mb-4 text-base text-white md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Orci mattis.
        </p>
      </div>
      {/* Grid 2x2 */}
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 sm:grid-cols-2">
        {serviceData.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* Konten teks di tengah */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-xl font-bold md:text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm md:text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
