'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LcdStandingDetail() {
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
          LCD Standing <br /> (Digital Signage)
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
          Perangkat ini tersedia dalam berbagai ukuran layar, yaitu 32, 43, 49,
          55, 65, dan 75 inci. Setiap ukuran memiliki dimensi fisik panel dan
          layar yang berbeda, namun semuanya memiliki aspek rasio 16:9 dan sudut
          pandang lebar 89° dari semua arah. Resolusi yang didukung adalah Full
          HD (1920x1080) dan 4K (3840x2160), dengan tingkat kecerahan 400 nits,
          kontras rasio 1000:1, dan waktu respon kurang dari 6ms. Backlight
          menggunakan LED, dengan masa pakai hingga 100.000 jam. Perangkat ini
          mendukung beberapa pilihan layar sentuh, seperti non-touch, infrared
          touch, dan capacitive touch. Dari sisi sistem, perangkat menggunakan
          sistem Android secara default (versi 5.1/6.0/7.1/8.1) dengan pilihan
          prosesor RK3128, RK3288, atau RK3399. RAM tersedia dalam opsi 1GB,
          2GB, hingga 4GB, dan ROM antara 8GB hingga 32GB. Juga tersedia versi
          dengan sistem operasi Windows (Win7/8/10) yang menggunakan prosesor
          Intel i3/i5/i7, RAM 4GB-16GB DDR3, serta SSD 128GB hingga 512GB. Untuk
          konektivitas, perangkat ini mendukung jaringan kabel (LAN 10/100M atau
          1000M), Wi-Fi, dan opsional 3G/4G. Perangkat dilengkapi dengan
          berbagai port seperti USB, RJ45, HDMI, dan audio. Dukungan media
          termasuk format gambar (JPG, PNG, BMP, GIF), audio (MP3, WMA, FLAC,
          dll), serta video (MP4, AVI, MKV, MOV, dll). Sistem juga menyediakan
          berbagai aplikasi dasar seperti pemutar video, pemutar gambar,
          browser, dan file manager, menjadikan perangkat ini ideal untuk
          kebutuhan display digital interaktif atau komersial.
        </p>
      </div>
    </section>
  );
}
