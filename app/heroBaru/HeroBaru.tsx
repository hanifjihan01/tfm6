'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation as SwiperNavigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';

import type { Swiper as SwiperType } from 'swiper';

import { BrandLogo } from '@/src/layout/brand-logo';
import { ContactBox } from '@/src/layout/header/desktop/v1/contact-box';
import { Navigation as MainNavigation } from '@/src/layout/header/desktop/common/navigation';
import { headerData } from 'data/layout/header/v1';

import { FiMenu, FiX } from 'react-icons/fi';

SwiperCore.use([EffectFade, SwiperNavigation]);

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative">
      {/* HEADER */}
      <header className="absolute left-0 right-0 top-0 z-50 w-full bg-white/80 py-3 shadow-sm backdrop-blur-md md:bg-transparent md:shadow-none">
        <Container>
          <div className="flex items-center justify-between gap-x-10">
            {/* Brand logo */}
            <BrandLogo />

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-x-8 md:flex">
              {menuItems && menuItems.length > 0 && (
                <MainNavigation menuItems={menuItems} />
              )}
              <ContactBox {...contactInfo} />
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-2xl text-gray-800"
                aria-label="Open Menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center space-y-4 bg-white px-6 py-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute right-6 top-6 text-3xl text-gray-700"
            aria-label="Close Menu"
          >
            <FiX />
          </button>
          <nav className="flex w-full max-w-sm flex-col items-center gap-4">
            {menuItems.map((item, index) => (
              <CustomLink
                key={index}
                href={'href' in item ? item.href : '#'}
                openNewTab={'openNewTab' in item ? item.openNewTab : false}
                className="w-full rounded-md px-4 py-3 text-center text-lg font-medium text-gray-800 hover:bg-sky-100 hover:text-sky-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {'label' in item ? item.label : item.title}
              </CustomLink>
            ))}
          </nav>
        </div>
      )}

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
                  className="absolute inset-0 -z-10 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  <div className="relative z-10 px-4 pt-28 text-center">
                    <div className="space-y-5 md:space-y-7">
                      {/* Judul */}
                      <h1 className="md:text-5xl lg:text-6xl text-3xl font-bold leading-tight text-black sm:text-4xl">
                        {item.title}
                      </h1>

                      {/* Sub Judul */}
                      <p className="text-sm text-gray-700 sm:text-base md:text-lg lg:text-xl">
                        Solusi Kebutuhan Digital Anda!
                      </p>

                      {/* Tombol */}
                      <Button
                        asChild
                        className="mx-auto rounded-md bg-sky-500 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-600 sm:text-base md:px-6 md:py-3 md:text-lg"
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
