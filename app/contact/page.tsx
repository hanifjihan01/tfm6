import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v2';

import { MapSection } from '@/src/sections/map-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-28">
        <MainHeader version="1" />
      </div>
      {/* <HeroSection
        title="Contact Us"
        breadcrumbItems={[
          {
            label: 'Contact',
            href: '/',
          },
          {
            label: 'Request Support',
          },
        ]}
      /> */}
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}
