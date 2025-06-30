// src/components/sections/ClientLogoLayangLayang.tsx
import Image from 'next/image';

const clientLogos = [
  '/assets/images/project/logms.png',
  '/assets/images/project/logogoogle.png',
  '/assets/images/project/logooyo.png',
  '/assets/images/project/logoairbnb.png',
  '/assets/images/project/logofedex.png',
  '/assets/images/project/logoamazon.png',
  '/assets/images/project/logobms.png',
  '/assets/images/project/logoola.png',
  '/assets/images/project/logowalmart.png',
];

export function ClientLogoDiamondGrid() {
  const rows = [
    [0], // baris 0: tengah atas
    [1, 2], // baris 1: kiri-kanan atas
    [3, 4, 5], // baris tengah
    [6, 7], // baris 3: kiri-kanan bawah
    [8], // baris 4: tengah bawah
  ];

  const rowOffsets = [
    'ml-[7.5rem]', // baris 0
    'ml-[4rem]', // baris 1
    '', // baris 2
    'ml-[4rem]', // baris 3
    'ml-[7.5rem]', // baris 4
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <p className="text-gray-600">
          We have been working with some fortune 500 clients
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`flex gap-16 ${rowOffsets[rowIndex]}`}>
            {row.map((logoIndex) => (
              <div
                key={logoIndex}
                className={`flex h-20 w-20 items-center justify-center rounded-lg bg-white shadow sm:h-24 sm:w-24
                  ${
                    logoIndex === 0 || logoIndex === 8
                      ? 'ml-4 mr-32'
                      : logoIndex === 1 ||
                          logoIndex === 2 ||
                          logoIndex === 6 ||
                          logoIndex === 7
                        ? 'relative z-10 -mt-10 ml-20 mr-32'
                        : logoIndex === 5 || logoIndex === 3
                          ? 'relative z-20 -mt-10 ml-40 mr-40'
                          : ''
                  }
                `}
              >
                <Image
                  src={clientLogos[logoIndex % clientLogos.length]}
                  alt={`Client ${logoIndex + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
