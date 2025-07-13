'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MeetingtvDetail() {
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
          Meeting TV Interactive <br /> HZS-Y651ABBXC
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
          Perangkat ini merupakan solusi multifungsi untuk kebutuhan presentasi,
          dilengkapi dengan teknologi layar sentuh canggih. Layar menggunakan
          panel DLED berukuran 1428 x 804 mm dengan resolusi tinggi 4K UHD (3840
          x 2160), rasio 16:9, kecerahan puncak hingga 350cd/㎡±30, dan kontras
          dinamis 5000:1. Sudut pandangnya lebar, mencapai 178 derajat secara
          horizontal dan vertikal. Warna tampilan mendukung 10-bit dengan 16,7
          juta warna, memberikan kualitas gambar yang jernih dan tajam. Dari
          sisi sistem, perangkat ini menggunakan chipset H560 dengan prosesor
          ARM A55 quad-core 1.5GHz, RAM 2/3GB, ROM 16/32GB, dan berjalan pada
          sistem Android 9.0. Teknologi sentuh yang digunakan adalah pengenalan
          sentuh inframerah 20 titik, serta mendukung penyesuaian kecerahan
          otomatis melalui sensor cahaya sekitar dengan 8 tingkat peredupan
          linier. Antarmuka I/O sangat lengkap, meliputi berbagai port USB
          (USB2.0 dan USB3.0), input dan output audio, HDMI, VGA, port jaringan
          RJ45, serta antarmuka kontrol RS232. Tersedia pula dukungan
          konektivitas Wi-Fi eksternal dengan 4 port antena termasuk 2 hotspot
          5G. Dari sisi audio, perangkat ini dibekali sistem amplifier stereo
          CLASS-D dengan output 2x10W, memberikan kualitas suara yang cukup
          untuk kebutuhan presentasi. Konsumsi daya perangkat berada pada
          kisaran 240W dalam mode standar tanpa komputer, dengan input listrik
          AC 180-240V 50/60Hz. Secara keseluruhan, perangkat ini cocok digunakan
          di ruang pertemuan, ruang kelas, atau tempat presentasi lain yang
          membutuhkan layar besar interaktif dengan konektivitas dan performa
          yang handal.
        </p>
      </div>
    </section>
  );
}
