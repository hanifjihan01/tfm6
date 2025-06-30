'use client';

import { motion } from 'framer-motion';
import { aboutSectionData } from '@/data/about-section/v1';
import { Container } from '@/src/components/container';

export function AboutSection() {
  const { vissionMission, visionMission } = aboutSectionData;

  return (
    <motion.section
      id="about-us"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // hanya animasi sekali saat 20% terlihat
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="section-padding-primary overflow-hidden"
    >
      <Container>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl rounded-xl border border-t-0 border-gray-300 bg-white p-8 text-center text-accent-900 shadow-[4px_4px_12px_rgba(0,0,0,0.05),-4px_4px_12px_rgba(0,0,0,0.05)] dark:text-white"
          >
            {vissionMission?.vision && (
              <div className="mt-6">
                <h4 className="text-xl font-bold text-black">About Us</h4>
                <p className="mt-2">{vissionMission.vision}</p>
              </div>
            )}

            {visionMission?.vision && (
              <div className="mt-6">
                <h4 className="text-xl font-bold text-black">
                  Vision & Mission
                </h4>
                <p className="mt-2">{visionMission.vision}</p>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
