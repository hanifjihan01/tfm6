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

SwiperCore.use([EffectFade, Navigation]);

const heroData = {
  items: [
    {
      image: {
        src: '/assets/images/hero/maps.png',
        alt: 'hero image 1',
      },
      title: 'EMPOWERING DIGITAL LIFESTYLE WITH IOT SOLUTION & SMART SYSTEM',
      button: {
        label: 'More',
        href: '/#about-us',
      },
    },
  ],
};

export function HeroBaru() {
  const swiperRef = useRef<SwiperType>();
  const { items } = heroData;

  return (
    <section className={styles['hero']}>
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
              <div className="relative flex items-center justify-center overflow-hidden py-[9.375rem] lg:min-h-screen">
                <div
                  className={cn(
                    'absolute inset-0 -z-1 bg-accent-700 bg-cover bg-no-repeat bg-blend-luminosity',
                    'before:absolute before:inset-0 before:bg-[#EDF8FE] before:opacity-80 dark:before:bg-accent-900',
                    'after:absolute after:inset-0 after:[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_100%)] dark:after:[background:linear-gradient(180deg,rgba(20,20,22,0.00)_0%,#141416_100%)]',
                    styles['hero-bg']
                  )}
                  style={{ backgroundImage: `url(${item.image.src})` }}
                />

                <Container>
                  <div
                    className={cn(
                      'relative z-10 mx-auto max-w-[800px] text-center text-accent-900 dark:text-white lg:mt-[60px]',
                      styles['hero-content']
                    )}
                  >
                    <div className="space-y-6 md:space-y-8">
                      <h1 className="font-secondary text-lg font-semibold uppercase leading-tight md:text-xl lg:text-2xl">
                        {item.title}
                      </h1>
                      <p className="text-sm md:text-base lg:text-lg">
                        PT Transforme Indonesia is the leading provider of
                        end-to-end information technology solution to business
                        corporations in Indonesia. Our creative solution
                        combines the leverage of cutting edge technology and
                        business process reengineering expertise in exploiting
                        opportunities to create values to maximize the profit of
                        our clients.
                      </p>
                      <Button asChild className="rounded-full">
                        <CustomLink
                          aria-label={item.button.label}
                          href={item.button.href}
                        >
                          <span>{item.button.label}</span>
                          <svg
                            width={28}
                            height={9}
                            viewBox="0 0 28 9"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
                          </svg>
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
