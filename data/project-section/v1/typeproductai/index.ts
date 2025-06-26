import { ProjectSectionProps } from '@/src/sections/project/v1';

export const typeProductAiData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest produts',
    title: 'Type Of Product',
  },
  isWave: false,
  works: [
    {
      slug: '/visitormanagementsystem',
      image: {
        src: '/assets/images/project/compounditem6.png',
        alt: 'Gate',
      },
      title: 'Visitor Management System',
      description: '',
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/compounditem2.png',
        alt: 'portfolio-1',
      },
      title: 'Smart Security',
      description: '',
    },
  ],
};
