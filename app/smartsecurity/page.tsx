import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';

import { HeroSectionsss } from '@/src/components/heroSections/HeroSectionsss';
import { ArtificialIntelligent2 } from '@/src/components/artificialintelligent2/Artificialintelligent2';

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
        <HeroSectionsss />
      </div>

      <div className="relative z-20 ">
        <ArtificialIntelligent2 />
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}
