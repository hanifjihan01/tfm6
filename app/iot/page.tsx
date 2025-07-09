import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Metadata } from 'next';

import { Iot } from '@/src/components/iot/Iot';
import { HeroSectionss } from '@/src/components/heroSections/HeroSectionss';

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

      <HeroSectionss />
      <Iot />

      <Footer />
    </>
  );
}
