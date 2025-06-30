import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description: '',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },
    ],
  },
  columnOne: {
    title: 'About',
    links: [
      {
        label: 'Introducing',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Terms of Services',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Contact',
    location:
      'Jl. Tanah Abang II No. 87C Cideng, Gambir Kota Administrasi Jakarta Pusat, DKI Jakarta, 10150 Indonesia ',
    mails: ['sales@transforme.co.id'],
    phoneNumbers: ['+62 21 3440513', '+62859 6633 0775'],
  },
  columnThree: {
    title: 'Newslater',
    blogs: [],
  },
  footerBottom: {
    copyrightText: '© Transforme  2025 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
