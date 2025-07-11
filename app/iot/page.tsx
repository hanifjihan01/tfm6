import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';
import { HeroSectionss } from '@/src/components/heroSections/HeroSectionss';
import { LatestCollectioniot } from '@/src/components/latestcollectioniot/LatestCollectioniot';

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
        <HeroSectionss />
      </div>

      <div className="relative z-20 ">
        <Iot />
      </div>

      <LatestCollectioniot />

      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}
