'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartLockerDetail() {
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
          Smart Locker
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
          Produk ini merupakan kotak penyimpanan pintar yang dilengkapi dengan
          modul transaksi cerdas, memungkinkan pengguna mengakses barang melalui
          pemindaian kode QR, pengenalan wajah, atau kata sandi. Dibandingkan
          dengan loker tradisional, sistem ini menawarkan kemudahan, efisiensi,
          dan tingkat keamanan yang lebih tinggi. Selain itu, dengan desain yang
          hemat ruang dan biaya operasional rendah, produk ini cocok digunakan
          di berbagai lokasi umum. Salah satu skenario penggunaan utamanya
          adalah di tempat wisata, khususnya bagi wisatawan yang membawa barang
          berharga seperti ponsel dan koper. Ketika mereka mengikuti aktivitas
          yang tidak memungkinkan membawa barang (misalnya panjat tebing atau
          bermain air), loker ini dapat digunakan dengan aman dan praktis
          melalui pengenalan wajah atau sidik jari, tanpa perlu membawa ponsel.
          Selain memberikan kenyamanan bagi pengguna, produk ini juga dapat
          menciptakan konsumsi sekunder yang stabil bagi pengelola lokasi,
          karena tingkat penggunaannya yang tinggi dan fungsinya yang
          dibutuhkan. Dengan sistem identifikasi cerdas dan modul transaksi
          otomatis, proses penyimpanan dan pengambilan barang menjadi lebih aman
          dan minim kesalahan, sehingga mengurangi kebutuhan akan pemeliharaan
          dan intervensi manual. Fleksibilitas metode akses yang ditawarkan juga
          menjadi nilai tambah, memungkinkan pengguna untuk memilih antara
          pengenalan wajah, sandi pribadi, atau scan kode QR, sesuai dengan
          situasi masing-masing. Dengan sistem manajemen terpadu, operator dapat
          memantau status perangkat secara real-time dari jarak jauh, menjadikan
          solusi ini efisien dan modern untuk kebutuhan penyimpanan barang
          sementara.
        </p>
      </div>
    </section>
  );
}
