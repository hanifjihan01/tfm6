'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function CameraOutdoorDetail() {
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
          Kamera Outdoor JVS
          <br />
          BS10-5WPL-F0S
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
          Kamera ini menggunakan sensor CMOS 1/1,8 inci dengan resolusi hingga
          3072x1728 pada 25fps dan mendukung kompresi H.265/H.264. Memiliki
          piksel efektif 5MP, sudut pandang lensa 110.8° (4mm) dan 66.6° (6mm),
          serta dilengkapi 6 lampu hangat dengan peredupan adaptif untuk
          pencahayaan malam. Fitur gambar meliputi penyesuaian kontras,
          kecerahan, dan pengoptimalan seperti mode wajah dan penghilangan
          kabut. Mendukung audio dua arah, pengkodean G711A/U, serta pemantauan
          dan interkom suara. Kamera dapat diakses hingga 8 klien secara
          bersamaan melalui Cloud Video 2.0 dan kompatibel dengan protokol
          ONVIF, RTSP, dan lainnya. Dilengkapi port RJ45, slot TF card, RS485,
          input/output audio dan alarm, serta mendukung hingga 12 pengguna
          dengan berbagai tingkat izin. Kamera ini tahan suhu -20℃ hingga 60℃,
          menggunakan daya DC 12V atau POE, dan memiliki konsumsi daya maksimum
          9W di malam hari. Bobot sekitar 610g, berukuran 104×98×184 mm, dengan
          opsi pemasangan di dinding atau langit-langit.
        </p>
      </div>
    </section>
  );
}
