'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AutogateDualDetail() {
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
          Autogate Dual
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
          Perangkat sistem pemeriksaan keamanan ini dirancang untuk lingkungan
          dalam ruangan dengan konsumsi daya utama sebesar 4000W dan tegangan
          input AC 220V. Memiliki ukuran besar (4700×3840×2300 mm) dengan bahan
          stainless steel 304 dan pelat baja canai dingin, alat ini dilengkapi
          saluran pemeriksaan berukuran 650×500 mm dan mampu mendeteksi beban
          hingga 160 kg. Perangkat ini mendukung berbagai antarmuka komunikasi
          seperti USB, PCI, dan jaringan, serta dilengkapi fitur deteksi logam,
          pembaca identitas sesuai standar ICAO9303, pemindai barcode 1D/2D,
          serta pengenalan wajah dan tubuh (opsional). Selain itu, perangkat ini
          memiliki sistem pengukuran suhu dan kelembapan dengan akurasi tinggi,
          serta sistem komputer bawaan dengan prosesor Intel Core i5, RAM 16GB
          DDR4, dan SSD 256GB. Keamanan ditingkatkan melalui deteksi logam lebih
          dari 30 gram serta alarm dan pembukaan pintu otomatis jika terjadi
          kondisi darurat. Standar keselamatan mengacu pada GB15208 untuk
          sinar-X dosis mikro, menjadikan perangkat ini ideal untuk pemeriksaan
          keamanan di area seperti bandara atau gedung pemerintahan.
        </p>
      </div>
    </section>
  );
}
