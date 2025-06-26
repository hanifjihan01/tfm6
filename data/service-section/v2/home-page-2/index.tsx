import { ServiceSectionProps } from '@/src/sections/service/v2';

function Icon1() {
  return (
    <img
      src="/assets/images/project/airemover.png"
      alt="Icon 1"
      width={40}
      height={40}
    />
  );
}

function Icon2() {
  return (
    <img
      src="/assets/images/icons/airemover.png"
      alt="Icon 2"
      width={40}
      height={40}
    />
  );
}

function Icon3() {
  return (
    <img
      src="/assets/images/icons/images.jpeg"
      alt="Icon 3"
      width={40}
      height={40}
    />
  );
}

export const serviceSectionData: ServiceSectionProps = {
  sectionHeading: {
    subtitle: 'our services',
    title: 'Elevating Businesses with IT Ingenuity',
  },
  services: [
    {
      image: {
        src: '/assets/images/service/service-1.png',
        alt: 'Net Connect Plus',
      },
      icon: <Icon1 />,
      title: 'Net Connect Plus',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page layout long established',
      slug: '/service-details',
    },
    {
      image: {
        src: '/assets/images/service/service-2.png',
        alt: 'Data Guard Sentinel',
      },
      icon: <Icon2 />,
      title: 'Data Guard Sentinel',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page layout long established',
      slug: '/service-details',
    },
    {
      image: {
        src: '/assets/images/service/service-3.png',
        alt: 'App Swift DevOps',
      },
      icon: <Icon3 />,
      title: 'App Swift DevOps',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page layout long established',
      slug: '/service-details',
    },
  ],
};
