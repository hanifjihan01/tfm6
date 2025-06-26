import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+62213440513 +6285966330775',
    mail: 'sales@transforme.co.id',
    address: 'Jl. Cideng No. 87C',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Contact',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
