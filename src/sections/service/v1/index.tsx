'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v1';

export interface ServiceSectionProps {
  services: ServiceProps[];
  className?: ClassValue;
}

export function ServiceSection({ services, className }: ServiceSectionProps) {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className={cn('section-padding-primary', className)}>
      <Container>
        {/* Title & Subtitle aligned to left */}
        <div
          className="mb-16 max-w-2xl space-y-1 text-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-2xl">
            Our Approach
          </h2>
          <p className="text-sm text-gray-600 sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Orci mattis.
          </p>
        </div>

        {/* Service Cards */}
        {services && services.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/4"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
