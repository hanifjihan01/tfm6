'use client';

import { motion } from 'framer-motion';
import { aboutSectionData } from '@/data/about-section/v1';
import { Container } from '@/src/components/container';

export interface AboutSectionProps {
  images: {
    [key: string]: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  vissionMission?: {
    subtitle?: string;
    title?: string;
    vision?: string;
  };
  visionMission?: {
    vision?: string;
  };
  keyPoints: Array<Record<string, unknown>>;
}

export function AboutSection() {
  const { vissionMission, visionMission } = aboutSectionData;

  return (
    <motion.section
      id="about-us"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="section-padding-primary overflow-hidden"
    >
      <Container>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-7xl rounded-xl border border-t-0 border-gray-300 bg-white p-8 text-center text-accent-900 shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_4px_12px_rgba(0,0,0,0.05)] dark:text-white"
          >
            {vissionMission?.vision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl font-bold text-black">About Us</h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-2"
                >
                  {vissionMission.vision}
                </motion.p>
              </motion.div>
            )}

            {visionMission?.vision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl font-bold text-black">
                  Vision & Mission
                </h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="mt-2"
                >
                  {visionMission.vision}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
