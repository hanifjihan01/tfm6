'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function EGateDetail() {
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
          E-Gate single <br />
          MVCM-2108-J <br />Z
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
          Perangkat ini merupakan sistem gerbang ayun (swing gate) yang
          dirancang untuk penggunaan dalam ruangan. Ditenagai oleh tegangan AC
          90–264V dengan frekuensi 47–63Hz, sistem ini memiliki kecepatan
          buka/tutup yang dapat disesuaikan (hingga 515), tingkat kebisingan
          ≤40dB, dan torsi terukur sebesar 57N·m. Dilengkapi dengan 48 sensor
          inframerah dan layar 8 inci HD IPS, perangkat ini menggunakan kamera
          pengenal wajah binokular 2MP dengan tingkat kesalahan pengenalan hanya
          0,01% dan tingkat keberhasilan 99%. Komunikasi dilakukan melalui
          antarmuka TCP/IP. Untuk akses, tersedia fitur pemindaian kode 1D/2D
          dengan akurasi 23mil serta pembaca kartu yang sesuai dengan standar
          ISO 14443-A/B (frekuensi 13,56 MHz). Perangkat memiliki umur operasi
          (MCBF) hingga 220 juta siklus, lebar saluran 600–1200mm, dan dimensi
          keseluruhan 1500×150×1000mm.
        </p>
      </div>
    </section>
  );
}
