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
    title: 'Information',
    links: [
      {
        label: 'Software Development',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Data Analytics',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'IT Consulting',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'UI/UX Design',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Network Solutions',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Others',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location:
      'Jl. Tanah Abang II No. 87C Cideng, Gambir Kota Administrasi Jakarta Pusat, DKI Jakarta, 10150 Indonesia ',
    mails: ['sales@transforme.co.id'],
    phoneNumbers: ['+62 21 3440513', '+62859 6633 0775'],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'June 25, 2025',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'June 24, 2025',
        slug: './blog-details',
      },
    ],
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
