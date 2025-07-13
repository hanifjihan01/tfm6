import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';

import { Iot2 } from '@/src/components/iot2/iot2';

import { LatestCollectioniot2 } from '@/src/components/latestcollectioniot/LatestCollectioniot2';
import { HeroSectionssss } from '@/src/components/heroSections/HeroSectionssss';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-16">
        <MainHeader version="1" />
      </div>

      <div className="relative z-10 md:mb-[-180px]">
        <HeroSectionssss />
      </div>

      <div className="relative z-20 ">
        <Iot2 />
      </div>

      <LatestCollectioniot2 />

      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}
