'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MagneticSensorDetail() {
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
          Smart Door Magnetic Sensor
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
          Produk ini berukuran kecil dengan daya sembunyi tinggi, konsumsi daya
          rendah, dan masa siaga yang sangat lama. Sisa daya baterai dapat
          terlihat dengan jelas, memudahkan pemantauan dan penggantian tepat
          waktu. Perangkat ini juga dapat terhubung dengan terminal pintar
          lainnya untuk mengontrol perangkat lain saat dibuka atau ditutup.
          Menggunakan dua baterai AAA (DC 3V), konsumsi arus statis ≤9uA, dan
          arus emisi ≤28mA. Mendukung keluaran alarm seperti laporan alarm,
          tamper, dan status baterai. Dimensi: 35mm x 18mm x 76mm. Merek:
          Dynamax.
        </p>
      </div>
    </section>
  );
}
