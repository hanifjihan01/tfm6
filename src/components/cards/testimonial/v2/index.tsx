'use client';

import { motion } from 'framer-motion';
import { PersonProps, blurDataUrl } from '@/src/common-types';
import Image from 'next/image';

export interface TestimonialCardProps {
  person: PersonProps;
  speech: string;
}

export function TestimonialCard({
  person: { image, about, name },
  speech,
}: TestimonialCardProps) {
  // cek apakah card ini Hugo Adams
  const isHugo = name === 'Hugo Adams';

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-start overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Card testimonial */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className={`relative z-10 flex h-full flex-col justify-between rounded-xl border p-4 text-left sm:p-6
          ${
            isHugo
              ? 'border-black bg-white text-black'
              : 'border-white bg-accent-900 text-white'
          }`}
        style={{
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        }}
      >
        {/* Speech */}
        <p
          className={`text-sm leading-relaxed sm:text-base ${
            isHugo ? 'text-black' : 'text-white'
          }`}
        >
          {speech}
        </p>

        {/* Foto & info orang */}
        <div className="mt-6 flex items-center gap-3 sm:gap-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="rounded-full object-cover sm:h-[70px] sm:w-[70px]"
          />
          <div>
            <h3
              className={`text-base font-semibold sm:text-xl ${
                isHugo ? 'text-black' : 'text-white'
              }`}
            >
              {name}
            </h3>
            <p
              className={`text-xs sm:text-base ${
                isHugo ? 'text-black' : 'text-white'
              }`}
            >
              {about}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
