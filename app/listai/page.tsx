import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Aboutlistai } from '@/src/components/aboutlistai/Aboutlistai';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transforme Indonesia',
  description: 'Transforme - IT Solutions and Services React Nextjs Template',
};

export default function Page() {
  return (
    <>
      <div className="mb-40 ">
        <MainHeader version="1" />
      </div>

      <Aboutlistai />
      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}
