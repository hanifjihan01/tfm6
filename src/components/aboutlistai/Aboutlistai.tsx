'use client';

import Image from 'next/image';

export function Aboutlistai() {
  return (
    <section className="relative bg-white px-4 py-6 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Atas: Judul dan Deskripsi */}
        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {/* Kiri: Judul */}
          <div>
            <h1 className="text-2xl font-extrabold leading-snug text-gray-900 md:text-3xl">
              Lorem ipsum <br />
              dolor sit amet <br />
            </h1>
          </div>

          {/* Kanan: Deskripsi */}
          <div>
            <p className="text-base leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Sed nisl netus cras nisi
              fusce sodales vestibulum. Convallis hac sed scelerisque eget.
              Quisque pharetra lorem aliquam pretium vulputate tempor ac.
              Curabitur mauris mi mi sollicitudin pellentesque sed ridiculus
              nibh curabitur.
            </p>
          </div>
        </div>

        {/* Bawah: Gambar */}
        <div className="pointer-events-none relative z-0 mt-2 flex justify-center">
          <div className="relative aspect-[16/9] w-full max-w-7xl overflow-hidden rounded-2xl md:rounded-[1rem]">
            <Image
              src="/assets/images/hero/logosmartcitys.png"
              alt="People working"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
