import { projectSectionData } from '@/data/project-section/v1/home-page';
import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';

import { CtaSection } from '@/src/sections/cta/v1';
import { Hero } from '@/src/sections/hero/v1';
import { ProjectSection } from '@/src/sections/project/v1';

import { ServiceSection } from '@/src/sections/service/v1';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero />
      <ServiceSection className="!pb-0" {...serviceSectionData} />
      <AboutSection />
      <CtaSection />
      <ProjectSection {...projectSectionData} />

      <Footer />
    </>
  );
}
