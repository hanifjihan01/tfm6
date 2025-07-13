'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartTemperaturDetail() {
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
          Smart Temperature & Humidity Sensor
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
          Perangkat ini mampu memantau suhu dan kelembaban lingkungan secara
          real-time dan dapat dikontrol secara otomatis melalui koneksi nirkabel
          untuk mengatur peralatan rumah tangga. Salah satu keunggulan perangkat
          ini adalah kemampuannya dalam melakukan konversi suhu antara
          Fahrenheit dan Celsius, memberikan fleksibilitas untuk pengguna
          internasional. Selain itu, perangkat ini memiliki baterai yang dapat
          diisi ulang, sehingga cocok untuk penggunaan jangka panjang. Sensor
          ini bekerja dengan daya DC 5V dan arus 500mA. Untuk deteksi
          kelembaban, perangkat mendukung rentang 15~95% RH dengan akurasi ±5%
          RH dan resolusi 1%. Sementara itu, untuk deteksi suhu, perangkat mampu
          membaca suhu antara -20 hingga 50°C (-4 hingga 122°F) dengan akurasi
          ±0.5°C (0.9°F) dan resolusi 0.1°C (0.1°F). Sensor ini menggunakan tipe
          resistif, tanpa kontak langsung (contactless), serta berbasis sinyal
          output nirkabel. Dari sisi fisik, perangkat ini menggunakan material
          ABS dan didesain untuk pemasangan di dinding (wall-mounted). Produk
          ini juga telah tersertifikasi ISO, namun tidak mendukung kustomisasi.
          Merek: DynaMax.
        </p>
      </div>
    </section>
  );
}
