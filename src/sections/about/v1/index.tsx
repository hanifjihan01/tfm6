'use client';

import { aboutSectionData } from '@/data/about-section/v1';
import { Container } from '@/src/components/container';

export interface KeyPoint {
  title: string;
  description: string;
}

export interface AboutSectionProps {
  vissionMission: {
    subtitle: string;
    title: string;
    vision: string;
  };
  visionMission: {
    vision: string;
  };
  images: {
    image1: { src: string; alt: string; width: number; height: number };
    image2: { src: string; alt: string; width: number; height: number };
    image3: { src: string; alt: string; width: number; height: number };
    image4: { src: string; alt: string; width: number; height: number };
  };
  keyPoints: KeyPoint[];
}

export function AboutSection() {
  const { vissionMission, visionMission } = aboutSectionData;

  return (
    <section
      id="about-us"
      className="section-padding-primary ] overflow-hidden" // biru muda
    >
      <Container>
        <div className="mx-auto w-full max-w-7xl">
          {/* About Us */}
          {vissionMission?.vision && (
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <h4 className="shrink-0 text-2xl font-bold text-black md:text-2xl">
                About Us
              </h4>
              <p className="text-base text-black md:text-lg">
                {vissionMission.vision}
              </p>
            </div>
          )}

          {/* Vision & Mission */}
          {visionMission?.vision && (
            <div className="mt-10 md:mt-16">
              {/* Mobile layout */}
              <div className="flex flex-col items-center text-center md:hidden">
                <h4 className="mb-4 text-2xl font-bold text-black">
                  Vision & <br /> Mission
                </h4>
                <p className="text-base text-black">{visionMission.vision}</p>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:flex md:flex-row md:items-start md:gap-6">
                <p className="flex-1 text-base text-black md:text-lg">
                  {visionMission.vision}
                </p>
                <h4 className="min-w-[200px] text-right text-2xl font-bold text-black md:text-2xl">
                  <div className="-mt-5 mr-28">Vision &</div>
                  <div className="-mt-7 mr-28">Mission</div>
                </h4>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
