'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { heroData } from '@/data/hero/v1';
import { CustomLink } from '@/src/components/custom-link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export function Hero() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { items } = heroData;
  const activeItem = items[activeIndex];

  return (
    <section className="relative z-0 bg-white text-white dark:bg-accent-900">
      {/* Header */}
      <div className="mx-auto w-full max-w-[1600px] px-4 pb-0 pt-4 text-center md:px-12 md:text-left lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-2"
        >
          <h1 className="font-secondary text-sm font-bold uppercase text-black dark:text-white sm:text-base md:text-lg lg:text-xl">
            Most Products
          </h1>
        </motion.div>
      </div>

      {/* Konten Card */}
      <div className="flex w-full justify-center bg-white dark:bg-accent-900">
        <div className="w-full max-w-[1480px] px-4 py-10 md:px-12 lg:px-24">
          <div className="space-y-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-200 dark:bg-accent-800 dark:ring-gray-700 md:p-10">
            {/* Judul Produk */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="font-secondary text-xs font-semibold uppercase leading-tight text-black dark:text-white sm:text-sm md:text-base lg:text-lg"
            >
              {activeItem?.title}
            </motion.h2>

            {/* Tombol Telusuri */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              <CustomLink
                href={activeItem?.button.href}
                className="mt-2 inline-block rounded bg-[#4AC4F6] px-3 py-1.5 text-xs text-white transition-colors duration-300 hover:bg-[#007bbd] md:text-sm"
              >
                Telusuri
              </CustomLink>
            </motion.div>

            {/* Swiper Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="relative z-10"
            >
              {/* Tombol Navigasi Desktop */}
              <div className="absolute -top-16 right-4 z-20 hidden gap-2 md:flex">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  className={`rounded-full border p-2 shadow transition-all duration-300 ${
                    isBeginning
                      ? 'cursor-not-allowed bg-gray-700'
                      : 'bg-white hover:bg-gray-200 dark:bg-[#444]'
                  }`}
                >
                  <ChevronLeft
                    size={20}
                    className="text-black dark:text-white"
                  />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  className={`rounded-full border p-2 shadow transition-all duration-300 ${
                    isEnd
                      ? 'cursor-not-allowed bg-gray-700'
                      : 'bg-white hover:bg-gray-200 dark:bg-[#444]'
                  }`}
                >
                  <ChevronRight
                    size={20}
                    className="text-black dark:text-white"
                  />
                </button>
              </div>

              {/* Swiper */}
              <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                centeredSlides={true}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                pagination={false}
                className="overflow-visible"
              >
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <SwiperSlide
                      key={index}
                      className="!w-[85%] sm:!w-[70%] md:!w-[50%] lg:!w-[33%]"
                      onClick={() => {
                        if (!isActive) swiperRef.current?.slideToLoop(index);
                      }}
                      style={{ cursor: !isActive ? 'pointer' : 'default' }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: isActive ? 1 : 0.6,
                          scale: isActive ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`relative flex h-[200px] items-center justify-center rounded-xl p-2 sm:h-[250px] md:h-[300px] ${
                          !isActive ? 'blur-sm' : ''
                        }`}
                      >
                        <img
                          src={item.image.src}
                          alt={item.image.alt}
                          className="h-full w-auto object-contain"
                        />
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>

            {/* Tombol Navigasi Mobile */}
            <div className="relative z-10 md:hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center gap-2"
              >
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  className={`rounded-full border p-2 shadow transition-all duration-300 ${
                    isBeginning
                      ? 'cursor-not-allowed bg-gray-700'
                      : 'bg-white hover:bg-gray-200 dark:bg-[#444]'
                  }`}
                >
                  <ChevronLeft
                    size={20}
                    className="text-black dark:text-white"
                  />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  className={`rounded-full border p-2 shadow transition-all duration-300 ${
                    isEnd
                      ? 'cursor-not-allowed bg-gray-700'
                      : 'bg-white hover:bg-gray-200 dark:bg-[#444]'
                  }`}
                >
                  <ChevronRight
                    size={20}
                    className="text-black dark:text-white"
                  />
                </button>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="relative h-[6px] w-full overflow-hidden rounded-full bg-gray-300 dark:bg-gray-600">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-[#059BEB] transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / items.length) * 100}%`,
                  }}
                ></div>
                <div className="absolute left-0 top-0 z-10 flex h-full w-full">
                  {items.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => swiperRef.current?.slideTo(index)}
                      className="flex-1 cursor-pointer"
                      title={`Slide ${index + 1}`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
