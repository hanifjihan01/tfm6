'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function P4LedDetail() {
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
          LED Outdoor p4
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
          Modul LED tipe HXQC-P4-8S memiliki ukuran 256mm x 128mm dengan pitch
          piksel 4mm dan kepadatan piksel sebesar 62.500 per meter persegi.
          Menggunakan teknologi SMD1921, modul ini memiliki resolusi 64 x 32
          titik, ketebalan 20mm, dan bobot 0.6 kg dengan sistem penggerak
          constant drive serta tingkat kecerahan ≥5000 cd/m². Bracket memiliki
          ukuran yang sama, sementara dimensi box panel adalah 512mm x 512mm
          dengan suplai daya 5V/40A atau 5V/60A dan sistem pembuangan panas
          berbasis resolusi 128 x 128 titik. Produk ini optimal dilihat dari
          jarak 4–15 meter, dengan sudut pandang 160° horizontal dan 120°
          vertikal, serta dapat beroperasi pada suhu -20°C hingga +50°C dengan
          kelembaban 10%–75%. Konsumsi daya rata-rata mencapai ≤350W/m² dan
          maksimum ≤1000W/m² dengan tegangan kerja AC220V ±10%. Sistem kontrol
          mendukung koneksi 3G, WiFi, dan sinkronisasi, serta mendukung refresh
          rate ≥1920Hz, frame rate 50 & 60Hz, sistem warna RGB256, dan tingkat
          gradasi abu-abu hingga 16.384 level untuk kualitas tampilan yang halus
          dan detail.
        </p>
      </div>
    </section>
  );
}
