'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MotorizedDetail() {
  return (
    <section className="relative bg-accent-900 px-4 py-10 text-white sm:px-6 sm:py-12 md:py-20">
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl md:max-w-6xl"
      >
        <h1 className="md:text-6xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Motorized Conference LCD
        </h1>

        <p className="mt-4 text-sm text-gray-300 sm:text-base">
          In frispees, we spearhead new initiatives and provide mentorship to a
          new startup, and help grow their opportunities in key local, regional
          and global markets.
        </p>
      </motion.div>

      {/* Image */}
      <div className="relative mx-auto mt-8 w-full max-w-full sm:max-w-2xl md:mt-16 md:max-w-[1250px]">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/assets/images/hero/logosmartcitys.png"
            alt="Hero Image"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:gap-6 md:mt-12 md:max-w-6xl md:flex-row md:items-start md:gap-10">
        <div className="min-w-[100px]">
          <h3 className="mb-1 text-xs font-semibold text-white sm:text-sm">
            About us
          </h3>
          <button className="flex items-center gap-2 text-xs text-white sm:text-sm">
            Detail more
            <span className="h-2 w-2 rounded-full bg-white"></span>
          </button>
        </div>
        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
          Perangkat ini memiliki panel berukuran 558mm x 88mm x 5mm dan boks
          berukuran 538mm x 75mm x 605mm. Dilengkapi dengan sensor gambar
          T31X+4335 dan lensa zoom optik 10X (4.7mm–47mm). Sudut pandang pada
          mode wide adalah D: 67.6°, H: 64.8°, V: 41.2°, dan pada mode tele
          adalah D: 7.15°, H: 5.8°, V: 4.38°. Output video menggunakan USB2.0.
          Ditenagai oleh adaptor DC12V (2A), perangkat ini memiliki jangkauan
          gerakan pan 0–355° dan tilt -30° hingga +90°. Zoom dan fokus
          disesuaikan secara otomatis dengan kecepatan yang sesuai. Resolusi
          efektif kamera mencapai 4.0 Megapiksel.
        </p>
      </div>
    </section>
  );
}
