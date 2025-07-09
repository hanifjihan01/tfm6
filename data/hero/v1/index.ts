// src/data/hero/v1.ts

import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/project/gatestestingcoba.png',
        alt: 'hero 1',
      },
      title: 'E-Gate single MVCM-2108-J Z ',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/smartipcamera.png',
        alt: 'hero 2',
      },
      title: 'Smart IP Camera JVS-N537-SDL',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/xray.png',
        alt: 'hero 3',
      },
      title: 'X-Ray',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
    {
      image: {
        src: '/assets/images/project/smarthelmet.png',
        alt: 'hero 4',
      },
      title: 'SMART HELMET',
      button: {
        label: 'Discover More',
        href: '/',
      },
    },
  ],
};
