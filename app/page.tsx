import { Footer } from '@/src/layout/footer/v1';

import { AboutSection } from '@/src/sections/about/v1';

import { ClientLogoDiamondGrid } from '@/src/components/sections/ClientLogoDiamondGrid';
import { OurApproach } from './ourapproch/ourapproch';

import { TestimonialSection } from '@/src/sections/testimonial/v2';
import { NewProducts } from './newproduct/NewProduct';

import { HeroBaru } from './heroBaru/HeroBaru';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      {/* <MainHeader version="1" /> */}

      <div className="">
        <HeroBaru />
      </div>

      {/* <Hero /> */}
      <div className="relative">
        {/* Konten di atas background */}
        <div className="relative z-10">
          <br />
        </div>
      </div>

      <OurApproach />

      {/* <ServiceSection className="!pb-0" {...serviceSectionData} /> */}
      <AboutSection />
      <NewProducts />
      <TestimonialSection />
      <ClientLogoDiamondGrid />

      <Footer />
    </>
  );
}
