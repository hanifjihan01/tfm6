'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import { heroData } from '@/data/hero/v1';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

import { motion } from 'framer-motion';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

export function Hero() {
  const swiperRef = useRef<any>();
  const { items } = heroData;

  const navigationButtonCommonClasses = cn(
    'w-[44px] h-[44px] grid place-items-center text-[1rem] bg-black hover:bg-accent-700 transition-all duration-300 text-white rounded-full'
  );

  return (
    <section className="relative overflow-hidden bg-white pt-20">
      {/* Judul Utama */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="px-4 py-8 text-center"
      >
        <h2 className="text-xl font-bold leading-tight text-accent-900 md:text-2xl lg:text-3xl">
          EMPOWERING DIGITAL LIFESTYLE <br />
          <span className="text-accent-700">
            WITH IOT SOLUTION & SMART SYSTEM
          </span>
        </h2>
      </motion.div>

      <Swiper
        effect="fade"
        loop
        speed={500}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-col items-center justify-center py-10"
            >
              {/* Background Setengah Lingkaran */}
              <div className="absolute bottom-0 left-1/2 z-0 h-[320px] w-[860px] -translate-x-1/2 rounded-t-full bg-[#4AC4F3]" />

              {/* Kartu Putih */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-20 flex min-h-[400px] w-full max-w-sm flex-col justify-between rounded-2xl bg-white px-6 py-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                {/* Dekorasi Lingkaran */}
                <span className="absolute -left-8 top-[230px] z-10 h-20 w-20 rounded-full bg-purple-300" />
                <span className="absolute -right-8 top-[6%] z-10 h-20 w-20 rounded-full bg-purple-700" />

                {/* Gambar dalam lingkaran biru */}
                <div className="flex justify-center">
                  <div className="mx-auto -mt-14 mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-[#059BEB]">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="h-36 w-36 object-contain"
                    />
                  </div>
                </div>

                {/* Judul dan Deskripsi */}
                <div>
                  <h3 className="mb-2 text-lg font-bold text-accent-900">
                    {item.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc odio in et.
                  </p>
                </div>

                {/* Tombol */}
                <CustomLink
                  href={item.button.href}
                  className="mx-auto mt-auto w-max rounded border border-[#059BEB] bg-[#059BEB] px-4 py-1.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#059BEB]"
                >
                  More info
                </CustomLink>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Navigasi */}
      <div className="absolute right-0 top-[50%] z-50 hidden h-max w-full [transform:translateY(-50%)] lg:block">
        <Container>
          {/* <div className="ml-auto grid max-w-max gap-2.5 px-4">
            <button
              className={navigationButtonCommonClasses}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="slide prev"
            >
              <FaArrowLeftLong />
            </button>
            <button
              className={navigationButtonCommonClasses}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="slide next"
            >
              <FaArrowRightLong />
            </button>
          </div> */}
        </Container>
      </div>
    </section>
  );
}
