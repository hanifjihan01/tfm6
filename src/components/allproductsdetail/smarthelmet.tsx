'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function SmartHelmetDetail() {
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
          Smart Helmet
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
          Perangkat ini memiliki dimensi 294×273×186 mm dan berat sekitar 1080
          g. Dilengkapi dengan tampilan AR berukuran 35° setara dengan menonton
          TV 74 inci dari jarak 3 meter, serta kecerahan 300 nits. Kamera
          utamanya beresolusi 13 MP dengan aperture F2.0, sudut pandang 48°, dan
          mendukung perekaman 1080p@30fps. Perangkat ini juga mendukung sistem
          navigasi GPS, Galileo, GLONASS, dan BeiDou. Daya tahan baterainya
          mencapai 5 jam dalam mode pengukuran suhu, 3 jam dalam mode pengenalan
          wajah/pelat/QR code, dan 24 jam dalam mode standby, dengan kapasitas
          5000 mAh serta mendukung pengisian cepat 2A. Untuk fitur thermal
          imaging, resolusinya 384×288 dengan FOV 33,4°, rentang suhu -20~120°C,
          akurasi ±0,3°C, dan refresh rate 25 Hz. Perangkat ini dapat beroperasi
          pada suhu -10°C hingga 50°C dan disimpan pada suhu -20°C hingga 60°C.
        </p>
      </div>
    </section>
  );
}
