'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/src/utils/shadcn';

const tabs = [
  { label: 'Visitor Management System', value: 'visitor' },
  { label: 'Smart Security', value: 'security' },
];

// Mapping tab ke gambar
const images: Record<string, string> = {
  visitor: '/assets/images/hero/logosmartcitys.png', // Gambar untuk tab 'visitor'
  security: '/assets/images/hero/logosmartcitys.png', // Gambar untuk tab 'security'
};

export function HeroSections() {
  const [activeTab, setActiveTab] = useState('visitor');

  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-12 text-center md:pb-20 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-900">
          My Smart Lifestyle
        </h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nunc odio in et, lectus sit lorem id integer.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                'rounded border px-4 py-2 text-sm font-medium transition-all',
                activeTab === tab.value
                  ? 'border-[#4AC4F3] bg-[#4AC4F3] text-white'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Image */}
      <div className="mt-8 flex justify-center">
        <div className="max-w-9xl relative h-[300px] w-full overflow-hidden rounded-3xl md:h-[400px] md:rounded-[1rem]">
          <Image
            src={images[activeTab]}
            alt={tabs.find((t) => t.value === activeTab)?.label || 'Hero Image'}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
