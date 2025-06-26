import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
// import { TestimonialCard, TestimonialCardProps } from 'src/components/cards/testimonial/v1';
// import { Carousel } from '@/src/components/carousel';
// import { CarouselItem } from '@/src/components/carousel/sub-components/item';
import { testimonialSectionData } from '@/data/testimonial-section/v1';
// import { cn } from '@/src/utils/shadcn';

export interface TestimonialSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  // cards: TestimonialCardProps[];
}

export function TestimonialSection() {
  const { sectionHeading } = testimonialSectionData;

  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="mb-10 mr-30px max-w-[680px] md:mb-[3.75rem] md:pr-[140px]">
          <SectionHeading {...sectionHeading} />
        </div>
        {/* Testimonial di-nonaktifkan */}
      </Container>
    </section>
  );
}
