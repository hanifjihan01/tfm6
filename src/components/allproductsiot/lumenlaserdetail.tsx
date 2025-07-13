'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LumenLaserDetail() {
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
          9000 Lumen Laser <br /> Projector L1668FCF
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
          proyektor digital tipe DLP dengan resolusi tinggi 4K UHD (3840 x
          2160), dirancang untuk keperluan home theater, bisnis, maupun edukasi.
          Proyektor ini mendukung aspek rasio 16:9 dan 4:3 serta menghasilkan
          gambar berkualitas tinggi dengan kontras rasio 4000:1 dan kecerahan
          hingga 9000 lumens / 2600 ANSI lumens. Perangkat ini menggunakan lampu
          laser sebagai sumber cahaya, memberikan umur pakai yang lebih panjang
          dan gambar yang lebih cerah. Ukuran gambar yang dapat ditampilkan
          berkisar antara 80 hingga 150 inci, dengan jarak proyeksi sangat
          pendek (short throw) hanya 10–100 cm, menjadikannya ideal untuk ruang
          terbatas. Wemax A300 dilengkapi fitur lengkap seperti dukungan 3D (3D
          Ready & 3D Built-in), konektivitas internet, serta desain portable.
          Proyektor ini juga mendukung berbagai bahasa termasuk Bahasa Inggris
          dan Mandarin, serta menghasilkan tingkat kebisingan sekitar 38 dB,
          cukup senyap untuk pengalaman menonton yang nyaman. Dengan bobot 9.7
          kg, perangkat ini hadir dalam desain modern dan bergaya, serta telah
          mengantongi sertifikasi CCC dan CE. Produk ini juga didukung oleh
          layanan purna jual berupa perbaikan dan garansi 1 tahun. Model ini
          dikenal dengan kode L1668FCF dan berasal dari Tiongkok di bawah merek
          Wemax.
        </p>
      </div>
    </section>
  );
}
