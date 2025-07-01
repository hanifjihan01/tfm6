import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/#about-us',
  },
  // {
  //   label: 'Products',
  //   href: '/services',
  // },
  // {
  //   title: 'Services',
  //   subMenuItems: [
  //     {
  //       label: 'Service List',
  //       href: '/services',
  //     },
  //     {
  //       label: 'Service single',
  //       href: '/services/single',
  //     },
  //   ],
  // },
  {
    title: 'Products',
    subMenuItems: [
      {
        label: 'Artificial Inteligent (AI)',
        href: '/services',
      },
      {
        label: 'Internet Of Things (IOT)',
        href: '/iot',
      },
    ],
  },
  {
    title: 'Solutions',
    subMenuItems: [
      {
        label: 'Solutions 1',
        href: '#',
      },
      {
        label: 'Solutions 2',
        href: '#',
      },
    ],
  },

  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Request Support',
    href: '/contact',
  },
];
