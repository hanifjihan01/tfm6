'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MKiosDetail() {
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
          M Kios
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
          Produk ini adalah mesin front desk pintar dengan layar sentuh
          berukuran 27 inch dan rasio aspek 16:9. Mesin ini dirancang untuk
          mempermudah proses check-in secara mandiri di hotel, dengan kemampuan
          integrasi ke berbagai sistem seperti sistem keamanan, manajemen
          pengunjung, dan HRD untuk pencatatan kehadiran. Pengoperasiannya
          sangat mudah karena dilengkapi dengan fitur pemindaian kode dan wajah
          yang cepat, serta dapat digunakan sebagai kontrol akses menuju lantai
          atau ruangan tertentu. Mesin ini beroperasi selama 24 jam dan
          memungkinkan tamu hotel—baik individu, rombongan wisata, pemesan
          online, hingga tamu yang tidak membawa KTP—untuk melakukan check-in
          secara mandiri melalui ID card digital. Dengan kecepatan proses yang
          tinggi, mesin ini memungkinkan check-in hanya dalam 10 detik dan
          check-out dalam 3 detik. Selain meningkatkan efisiensi operasional,
          mesin ini juga membantu hotel menghemat biaya tenaga kerja secara
          signifikan. Satu mesin mampu menggantikan peran tiga petugas front
          desk, yang berpotensi menghemat biaya operasional hingga Rp180 juta
          per tahun.
        </p>
      </div>
    </section>
  );
}
