'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function LedTransparantDetail() {
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
          LED Glass transparant
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
          Modul LED ini hadir dalam berbagai ukuran, dengan dimensi fisik modul
          yang berkisar antara 816×384 mm (P6) hingga 1000×400 mm (P6.25–P20).
          Jarak antar piksel (pixel pitch) semakin besar dari P6 ke P20, yaitu
          mulai dari 6 mm hingga 20 mm. Semua modul menggunakan komposisi piksel
          R1G1B1 (merah, hijau, biru), yang menghasilkan warna penuh (full
          color). Semakin kecil pixel pitch, semakin banyak jumlah piksel per
          modul dan per meter persegi, seperti P6 dengan 8.704 piksel per modul
          dan kepadatan 27.777 piksel/m², sedangkan P20 hanya memiliki 1.000
          piksel per modul dan 2.500 piksel/m². Dalam hal kualitas tampilan,
          seluruh tipe modul mendukung tingkat kecerahan hingga 4000 nits, serta
          sudut pandang lebar 160° yang memungkinkan visibilitas dari berbagai
          arah. Refresh rate mencapai 3840Hz dengan grayscale 16-bit, memberikan
          performa visual yang halus dan bebas kedipan, sangat ideal untuk
          tampilan dinamis seperti video. Tingkat transparansi (permeabilitas)
          juga meningkat seiring dengan besarnya pixel pitch, dari 90% (P6)
          hingga 95% (P20), cocok untuk aplikasi seperti LED transparan atau
          layar jendela. Kebutuhan daya dari modul ini cukup efisien. Semua
          modul dapat dioperasikan pada tegangan AC 110–240V dengan frekuensi
          50/60Hz. Daya maksimum berkisar antara 400W/m² hingga 600W/m² (khusus
          P6.25), sedangkan rata-rata konsumsi daya tetap stabil di 200W/m². Hal
          ini memastikan efisiensi energi dalam penggunaan jangka panjang.
          Selain itu, semua modul beroperasi dalam mode drive statis (static
          state) untuk stabilitas gambar. Dari segi daya tahan dan
          fleksibilitas, semua modul memiliki ketebalan hanya 2,5 mm dan berat
          sekitar 1,3 kg, membuatnya ringan dan mudah diinstal. Modul-modul ini
          dapat bekerja dalam lingkungan dengan suhu antara -20°C hingga 55°C
          dan kelembapan 10–90%, menunjukkan daya tahan tinggi terhadap kondisi
          cuaca ekstrem. Sistem kendali yang digunakan adalah Nova dan
          Colorlight, yang mendukung kontrol yang akurat dan mudah
          dikonfigurasi. Umur operasional tipikal mencapai 100.000 jam,
          memberikan investasi jangka panjang yang andal.
        </p>
      </div>
    </section>
  );
}
