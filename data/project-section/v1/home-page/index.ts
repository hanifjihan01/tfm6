import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest products',
    title: 'Where Innovation Meets IT Excellence',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/gates.png',
        alt: 'portfolio-1',
      },
      title: 'Smart Turnstile with Thermal Face Recognition Camera',
      description: 'Pintu Putar Cerdas dengan Kamera Pengenalan Wajah Termal',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/smartcamera.png',
        alt: 'portfolio-1',
      },
      title: 'Smart Camera AI 1S',
      description: 'Kamera Pintar AI 1S',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/motorized.png',
        alt: 'portfolio-1',
      },
      title: 'Motorized Conference LCD',
      description: 'Motorized Conference LCD',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/smartvendings.png',
        alt: 'portfolio-1',
      },
      title: 'Smart Vending Machine',
      description: 'Smart Vending Machine',
    },
  ],
};
