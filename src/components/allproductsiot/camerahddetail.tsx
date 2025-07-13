'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function IpCameraHdDetail() {
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
          HD IP Camera
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
          ynaMax IP Camera adalah kamera pengawas nirkabel yang mendukung
          berbagai fitur canggih seperti pemantauan jarak jauh, kontrol gerakan
          PTZ (pan-tilt-zoom), interkom suara dua arah, deteksi gerakan,
          tangkapan layar video, serta penglihatan malam dengan inframerah.
          Kamera ini dapat dikendalikan melalui perangkat pintar seperti ponsel
          maupun tablet, memberikan kemudahan dalam pengawasan dari mana saja.
          Untuk tampilan video, kamera ini menggunakan format encoding standar
          M-JPEG dengan pilihan resolusi mulai dari 256×144 hingga 1280×720,
          memungkinkan pengguna menyesuaikan kualitas video sesuai kebutuhan.
          Dari sisi audio, tersedia komunikasi dua arah dengan encoding G.726
          ADPCM. Kamera ini dilengkapi dengan mikrofon internal, juga mendukung
          mikrofon eksternal, serta memiliki speaker internal untuk keluaran
          suara. Kamera ini bergaya swivel dan menggunakan sensor CMOS, dengan
          jarak pengawasan efektif antara 10 hingga 30 meter. Format HDMI yang
          didukung adalah 1080P. Produk ini telah bersertifikat CE dan
          dilengkapi dengan remote control untuk pengoperasian jarak jauh.
          Dengan dimensi 115mm x 90mm x 108mm, IP Camera dari DynaMax cocok
          digunakan untuk keamanan rumah, kantor, atau area lain yang
          membutuhkan pengawasan 24/7 dengan fitur lengkap dan fleksibel.
        </p>
      </div>
    </section>
  );
}
