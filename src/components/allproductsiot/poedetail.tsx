'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PoeDetail() {
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
          POE Manageble <br /> LS6100G-24P-4X-L3M
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
          Switch ini dilengkapi dengan 24 port RJ45 10/100/1000Mbps adaptif
          sebagai downlink dan 4 port uplink 10G SFP+, memberikan fleksibilitas
          tinggi dalam konektivitas. Perangkat ini mendukung standar PoE IEEE
          802.3af/at dengan total daya output maksimum sebesar 450W,
          memungkinkan daya dan data dikirimkan melalui kabel yang sama.
          Indikator LED tersedia untuk status daya dan aktivitas koneksi (PWR,
          Link/Act). Dari sisi performa, switch ini memiliki bandwidth sebesar
          128Gbps dan kecepatan pemrosesan paket mencapai 95.23Mpps, dengan
          dukungan 16K MAC address. Switch ini kompatibel dengan berbagai
          standar protokol jaringan, seperti IEEE802.3i/u/ab/z/ae untuk
          kecepatan 10/100/1000/10G, serta berbagai standar kontrol lalu lintas
          dan manajemen jaringan seperti IEEE802.1x, IEEE802.3x Flow Control,
          dan Energy-Efficient Ethernet (EEE). Ditenagai oleh sumber listrik AC
          100~240V 50/60Hz, perangkat ini dirancang dalam ukuran 440 x 285 x 44
          mm, cocok untuk rack-mount, dengan rentang suhu kerja 0℃–45℃ dan
          penyimpanan –20℃–70℃. Dari sisi perangkat lunak, switch ini mendukung
          routing dinamis OSPF, RIP V1/V2, serta routing statis dan ARP proxy.
          Untuk keamanan jaringan, tersedia fitur loop protection, BPDU/root
          protection, serta dukungan untuk protokol STP, RSTP, dan MSTP. Fitur
          manajemen PoE mencakup pemantauan dan tampilan daya PoE serta
          watchdog. Switch ini juga mendukung 4K VLAN, dengan berbagai jenis
          VLAN seperti 802.1Q, Mac VLAN, Voice VLAN, dan VLAN mapping, serta
          protokol GVRP. Untuk keamanan, perangkat ini dilengkapi fitur
          manajemen berbasis pengguna dan autentikasi, seperti HTTPS, SSH,
          RADIUS, TACACS+, serta perlindungan terhadap ARP spoofing, DoS attack,
          DHCP attack, dan IP spoofing. Fitur Access Control List (ACL)
          mendukung filter hingga Layer 4 berdasarkan IP, MAC, protokol, dan
          port. Dalam hal kualitas layanan (QoS), tersedia 8 antrian port,
          mendukung prioritas berbasis port, 802.1p, DSCP, dan algoritma WRR
          serta strict priority. Untuk manajemen, switch ini dapat diakses
          melalui Web (HTTP/HTTPS), CLI (Telnet, SSH), dan SNMP V1/V2/V3. Fitur
          tambahan mencakup monitoring CPU dan memori, sistem log, deteksi
          ping/traceroute, serta upgrade perangkat lunak via HTTP/TFTP. Dengan
          fitur yang lengkap ini, switch sangat cocok digunakan dalam skenario
          jaringan kelas enterprise yang membutuhkan kecepatan tinggi, kontrol
          penuh, dan keamanan kuat.
        </p>
      </div>
    </section>
  );
}
