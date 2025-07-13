'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Camera4Detail() {
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
          Smart IP Camera
          <br />
          JVS-N537-SDL
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
          Kamera keamanan ini dilengkapi sensor 1/3 CMOS 5MP dengan resolusi
          maksimal 2560x1792 dan lensa 2.8mm yang memberikan sudut pandang lebar
          (H 96°). Mampu merekam pada 25fps dengan kompresi H.264/H.265, serta
          dilengkapi audio dua arah melalui mic dan speaker bawaan. Kamera ini
          mendukung fitur pintar seperti deteksi gerakan, deteksi manusia,
          analisis area, dan hitung orang. Pengaturan gambar dapat disesuaikan,
          serta mendukung penglihatan malam hingga 30 meter dengan LED putih dan
          IR. Tersedia slot SD hingga 512GB, koneksi Ethernet 10/100Mbps,
          dukungan ONVIF, serta dapat diakses hingga 13 pengguna melalui browser
          atau aplikasi iOS/Android. Kamera tahan cuaca IP67, dapat dipasang di
          dinding atau plafon, dan bekerja pada suhu -25°C hingga 55°C dengan
          konsumsi daya rendah serta mendukung PoE.
        </p>
      </div>
    </section>
  );
}
