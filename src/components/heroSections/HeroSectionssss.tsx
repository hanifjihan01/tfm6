'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/src/utils/shadcn';

const tabs = [
  { label: 'Smart Office', value: 'visitor' },
  { label: 'Smart Commercial Facility', value: 'security' },
];

const images: Record<string, string> = {
  visitor: '/assets/images/hero/logosmartcitys.png',
  security: '/assets/images/hero/logosmartcitys.png',
};

export function HeroSectionssss() {
  const [activeTab, setActiveTab] = useState('security');
  const router = useRouter();

  const handleTabClick = (value: string) => {
    if (value === 'visitor') {
      router.replace('/iot');
    } else {
      setActiveTab(value);
    }
  };

  return (
    <section className="relative overflow-hidden bg-accent-900 pb-10 pt-12 text-center md:pb-20 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Judul */}
        <h1 className="md:text-5xl text-2xl font-extrabold text-[#4AC4F6]">
          My Smart Lifestyle
        </h1>

        {/* Subjudul */}
        <p className="mt-2 text-xs text-white md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br className="hidden sm:block" />
          Nunc odio in et, lectus sit lorem id integer.
        </p>

        {/* Tombol tab */}
        <div className="relative z-10 mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabClick(tab.value)}
              className={cn(
                'w-64 rounded border px-4 py-2 text-sm font-medium transition-all sm:w-auto',
                activeTab === tab.value
                  ? 'border-[#4AC4F3] bg-[#4AC4F3] text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gambar (hanya tampil di desktop) */}
        <div className="pointer-events-none relative z-0 mt-4 hidden justify-center md:mt-[-180px] md:flex">
          <div className="relative aspect-[16/9] w-full max-w-7xl overflow-hidden rounded-2xl md:rounded-[1rem]">
            <Image
              src={images[activeTab]}
              alt={
                tabs.find((t) => t.value === activeTab)?.label || 'Hero Image'
              }
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
