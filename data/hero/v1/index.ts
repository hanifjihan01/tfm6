// src/data/hero/v1.ts

import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/project/gates.png',
        alt: 'hero 1',
      },
      title: 'Smart Turnstile with Thermal Face Recognition Camera',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/smartcamera.png',
        alt: 'hero 2',
      },
      title: 'Smart Camera AI 1S',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/motorized.png',
        alt: 'hero 3',
      },
      title: 'Motorized Conference LCD',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/smartvendings.png',
        alt: 'hero 4',
      },
      title: 'Smart Vending Machine',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
  ],
};
