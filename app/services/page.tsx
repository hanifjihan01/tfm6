import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';

import { Metadata } from 'next';
import { HeroSections } from '@/src/components/heroSections/HeroSections';
import { ArtificialIntelligent } from '@/src/components/artificialIntelligent/ArtificialIntelligent';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Techlab - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-16">
        <MainHeader version="1" />
      </div>

      <HeroSections />
      <ArtificialIntelligent />

      <Footer />
    </>
  );
}
