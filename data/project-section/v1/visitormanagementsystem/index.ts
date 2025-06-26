import { ProjectSectionProps } from '@/src/sections/project/v1';

export const visitormanagementsystemData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Type Of Product',
    title: 'Visitor Management System',
  },
  isWave: false,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/gates.png',
        alt: 'Gate',
      },
      title: 'Smart Turnstile with Thermal Face Recognition Camera',
      description: 'Pintu Putar Cerdas dengan Kamera Pengenalan Wajah Termal',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/kamerathermal.png',
        alt: 'portfolio-1',
      },
      title: 'Thermal Face Recognition Camera',
      description: 'Thermal Face Recognition Camera',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/plank.png',
        alt: 'portfolio-1',
      },
      title: 'Integrated Boom Gate With Smart AI Camera',
      description: 'Integrated Boom Gate With Smart AI Camera',
    },
  ],
};
