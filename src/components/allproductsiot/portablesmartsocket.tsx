'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PortableSmartDetail() {
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
          Portable Smart Socket
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
          Produk soket listrik pintar dari Dynamax ini memungkinkan pemantauan
          daya dan konsumsi listrik secara real-time, serta dilengkapi fitur
          alarm otomatis saat terjadi kelebihan beban dan kemampuan untuk
          memulai ulang daya guna menjaga keamanan penggunaan listrik. Soket ini
          mendukung fungsi plug and play, posisi pemasangan yang fleksibel,
          serta dapat dikendalikan melalui perangkat pintar seperti ponsel atau
          tablet. Dengan tegangan kerja AC 85~265V, arus 10A, daya terukur
          2200W, dan dimensi 64.5mm x 87mm x 37.5mm, produk ini dirancang untuk
          memberikan kenyamanan dan perlindungan dalam penggunaan listrik
          sehari-hari.
        </p>
      </div>
    </section>
  );
}
