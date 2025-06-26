import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    subMenuItems: [
      {
        label: 'Service List',
        href: '/services',
      },
      {
        label: 'Service single',
        href: '/services/single',
      },
    ],
  },
  {
    title: 'Products',
    subMenuItems: [
      {
        label: 'Project List',
        href: '/project',
      },
      {
        label: 'Project single',
        href: '/project/single',
      },
    ],
  },
  {
    title: 'Solution',
    subMenuItems: [
      {
        label: 'Blog List',
        href: '/blog',
      },
      {
        label: 'Blog single',
        href: '/blog/single',
      },
    ],
  },

  {
    label: 'Contact',
    href: '/contact',
  },
];
