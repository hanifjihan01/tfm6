import { footerSectionData } from '@/data/layout/footer/v1';
import { ImageProps, LinkProps, SectionProps } from '@/src/common-types';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

import { FaChevronRight } from 'react-icons/fa6';

import { NewsletterForm } from '@/data/layout/footer/v1/NewsletterForm';

interface RecentBlog {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  date: string;
  title: string;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export interface FooterSectionProps {
  about: {
    description: string;
    socialLinks: SocialLinkProps[];
  };
  columnOne: {
    title: string;
    links: LinkProps[];
  };
  columnTwo: {
    title: string;
    location: string;
    mails: string[];
    phoneNumbers: string[];
  };
  columnThree: {
    title: string;
    blogs: RecentBlog[];
  };
  footerBottom: {
    copyrightText: string;
    links: LinkProps[];
  };
}

const titleClasses = cn(
  'text-white dark:text-white  text-md font-bold  leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]'
);

const addressItemClasses = cn('flex items-center gap-5');
const textColor = cn(
  'transition-colors duration-300 hover:text-primary dark:hover:text-white'
);

export function Footer({ className }: SectionProps) {
  const { about, columnOne, columnTwo, columnThree, footerBottom } =
    footerSectionData;
  return (
    <footer
      id="contact"
      className={cn(
        'overflow-hidden bg-accent-900 text-accent-800 dark:bg-accent-900 dark:text-body',
        className
      )}
    >
      <div className=" py-16 text-white md:mr-44 md:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-2  xl:grid-cols-4">
            {/* About  */}
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="mb-7 mt-3 ">{about.description}</p>
              {about.socialLinks && about.socialLinks.length > 0 && (
                <nav aria-label="social links">
                  <ul className="mt-6 flex items-center gap-3"></ul>
                </nav>
              )}
            </div>

            {/* Column one  */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className={titleClasses}>{columnOne.title}</h3>
              {columnOne.links && columnOne.links.length > 0 && (
                <nav aria-label="footer links navigation">
                  <ul className="grid gap-2">
                    {columnOne.links.map((link) => (
                      <li
                        key={link.label}
                        className="flex items-center gap-2.5 text-white"
                      >
                        <span className="flex-none text-sm/[1] text-white dark:text-white">
                          <FaChevronRight />
                        </span>
                        <CustomLink
                          href={link.href}
                          openNewTab={link.openNewTab}
                          className={textColor}
                        >
                          {link.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Column Two  */}
            <div data-aos="fade-up" data-aos-delay="600">
              <h3 className={titleClasses}>{columnTwo.title}</h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className={addressItemClasses}>
                  <address className="not-italic">{columnTwo.location}</address>
                </li>
                <li className={addressItemClasses}>
                  {columnTwo.mails && columnTwo.mails.length > 0 && (
                    <div className="grid gap-1">
                      {columnTwo.mails.map((mail, index) => (
                        <a
                          key={index}
                          href={`mailto:${mail}`}
                          className={textColor}
                        >
                          {mail}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
                <li className={addressItemClasses}>
                  {columnTwo.phoneNumbers &&
                    columnTwo.phoneNumbers.length > 0 && (
                      <div className="grid gap-1">
                        {columnTwo.phoneNumbers.map((phoneNumber, index) => (
                          <a
                            key={index}
                            href={`tel:${phoneNumber.split(' ').join('')}`}
                            className={textColor}
                          >
                            {phoneNumber}
                          </a>
                        ))}
                      </div>
                    )}
                </li>
              </ul>
              {about.socialLinks && about.socialLinks.length > 0 && (
                <nav aria-label="social links">
                  <ul className="mt-6 flex items-center gap-3">
                    {about.socialLinks.map((socialLink, index) => (
                      <li key={index}>
                        <CustomLink
                          aria-label={socialLink.href}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-white transition hover:bg-gray-800"
                          href={socialLink.href}
                          openNewTab
                        >
                          <span className="bg-accent-900 text-base">
                            {socialLink.icon}
                          </span>
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Column three  */}
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className={titleClasses}>{columnThree.title}</h3>
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex min-h-[90px] items-center border-t border-accent-800 border-opacity-20 py-5 dark:border-body dark:border-opacity-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 md:gap-x-10">
            <p>{footerBottom.copyrightText}</p>
            {footerBottom.links && footerBottom.links.length > 0 && (
              <nav aria-label="footer bottom navigation">
                <ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
                  {footerBottom.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        aria-label={`Go to page ${link.label}`}
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className={textColor}
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
