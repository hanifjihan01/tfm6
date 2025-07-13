'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function XRayDetail() {
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
          X Ray
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
          Perangkat ini dilengkapi dengan sabuk konveyor berkecepatan 0,22 meter
          per detik dan mampu menahan beban maksimum hingga 170 kg. Sistem
          pemindaian memiliki sudut pandang bawah dan samping yang dapat
          menembus pelat baja setebal 40 mm, dengan resolusi garis sebesar Φ
          0,0787 mm serta resolusi penetrasi sebesar Φ 0,202 mm. Resolusi
          spasial horizontal dan vertikal mencapai Φ 1,0 mm untuk kedua sudut
          pandang. Dari segi keamanan radiasi, saluran perangkat berukuran 650
          mm (L) × 500 mm (T), dan dosis pemeriksaan tunggalnya kurang dari 4
          μGy. Tingkat paparan radiasi di sekitar perangkat sangat rendah, yakni
          di bawah 0,2 μSv/jam, sesuai dan melampaui standar kesehatan nasional
          maupun internasional. Perangkat menggunakan tirai timbal berlapis
          ganda dan pelat timbal setebal 2–5 mm untuk perlindungan radiasi
          maksimal. Perangkat dilengkapi generator sinar-X dengan tabung
          antarmuka digital yang memiliki tegangan 80–160 kV dan arus 0,3–1,2
          mA, serta menggunakan sistem pendingin oli tertutup dengan siklus
          kerja 100%. Dari sisi desain, perangkat dilengkapi fitur pelindung
          penjepit jari di bagian masuk dan keluar saluran, serta indikator
          status operasional dengan lampu pilar di empat sudut. Desainnya juga
          memperhatikan kenyamanan pengguna, dengan keyboard profesional dan
          meja kerja ergonomis. Sabuk konveyornya terbuat dari bahan berpola
          berlian setebal 3 mm, tahan gores, antistatis, dan tidak mudah melar
          atau berubah bentuk. Rangka perangkat dibuat dari baja tahan karat GB
          304 dan pelat canai dingin standar, memberikan ketahanan terhadap
          karat, korosi, dan kerusakan mekanis.
        </p>
      </div>
    </section>
  );
}
