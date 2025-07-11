'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function FaceRecogDetail() {
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
          Face Recognation <br />
          Termal MVNT-86
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
          Perangkat face recognition ini memiliki layar HD IPS berukuran 8 inci
          dengan resolusi 1280 x 800 piksel. Ditenagai oleh prosesor quad-core,
          perangkat ini dilengkapi dengan RAM 1GB dan memori internal 8GB.
          Sistem kameranya menggunakan dual kamera WOR beresolusi 2MP yang mampu
          mengenali wajah pada jarak 0,2 hingga 3 meter. Kapasitas pengenalan
          wajah mencapai 10.000 orang dan dapat ditingkatkan hingga 20.000 atau
          50.000, dengan akurasi tinggi lebih dari 99%, tingkat kesalahan rendah
          FAR kurang dari 0,01%, dan waktu pencocokan kurang dari 100 milidetik.
          Untuk konektivitas, tersedia port LAN dan RS232, serta satu output
          relay untuk kontrol. Perangkat ini dapat digunakan di lingkungan dalam
          maupun luar ruangan, tahan terhadap kondisi cuaca dengan perlindungan
          IP55, dan dapat beroperasi pada suhu -20°C hingga 60°C. Instalasinya
          dilakukan dengan cara digantung, memiliki ukuran 235 x 30 x 20 mm, dan
          membutuhkan daya masuk DC 12V/2A.
        </p>
      </div>
    </section>
  );
}
