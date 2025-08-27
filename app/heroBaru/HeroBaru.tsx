'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import styles from './hero.module.css';
import type { Swiper as SwiperType } from 'swiper';

import { BrandLogo } from '@/src/layout/brand-logo';

import { ContactBox } from '@/src/layout/header/desktop/v1/contact-box';

import { Navigation as MainNavigation } from '@/src/layout/header/desktop/common/navigation';
import { headerData } from 'data/layout/header/v1';

SwiperCore.use([EffectFade, Navigation]);

const heroData = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero2.jpg',
        alt: 'hero image 1',
      },
      title: 'Transforme Indonesia',
      button: {
        label: 'More Info',
        href: '/#about-us',
      },
    },
  ],
};

export function HeroBaru() {
  const swiperRef = useRef<SwiperType>();
  const { items } = heroData;
  const { menuItems, contactInfo } = headerData;

  return (
    <section className={styles['hero']}>
      {/* HEADER dipindah ke Hero */}
      <header className="absolute left-0 right-0 top-0 z-50 w-full bg-transparent py-[10px]">
        <Container>
          <div className="flex items-center gap-x-10 bg-transparent">
            {/* Brand logo */}
            <div className="flex-none bg-transparent">
              <BrandLogo />
            </div>

            {/* Spacer + nav + contact */}
            <div className="ml-auto flex items-center gap-x-10 bg-transparent">
              {menuItems && menuItems.length > 0 && (
                <MainNavigation menuItems={menuItems} />
              )}
              <ContactBox {...contactInfo} />
            </div>
          </div>
        </Container>
      </header>

      {/* HERO CONTENT */}
      {items && items.length > 0 && (
        <Swiper
          effect="fade"
          loop={false}
          speed={300}
          autoplay={{ delay: 3000 }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
                {/* Background */}
                <div
                  className={cn(
                    'absolute inset-0 -z-1 bg-cover bg-center md:bg-cover',
                    styles['hero-bg']
                  )}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  <div
                    className={cn(
                      'relative z-10 px-4 pt-28 text-center text-accent-900 dark:text-accent-900',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-6 md:space-y-8">
                      {/* Judul */}
                      <h1 className="md:text-6xl lg:text-8xl whitespace-normal text-3xl font-bold leading-tight text-black sm:text-4xl md:whitespace-nowrap">
                        {item.title}
                      </h1>

                      {/* Sub Judul */}
                      <p className="text-sm text-gray-800 dark:text-gray-800 sm:text-base md:text-lg lg:text-xl">
                        Solusi Kebutuhan Digital Anda!
                      </p>

                      {/* Tombol */}
                      <Button
                        asChild
                        className="mx-auto rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 sm:text-base md:px-6 md:py-3 md:text-lg"
                      >
                        <CustomLink
                          aria-label={item.button.label}
                          href={item.button.href}
                        >
                          <span>{item.button.label}</span>
                        </CustomLink>
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
