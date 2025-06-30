'use client'; // Wajib jika pakai framer-motion di komponen ini

import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { motion } from 'framer-motion';

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  slug: string;
}

export function ServiceCard({ icon, title, description, slug }: ServiceProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={cn([
        'group/service bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white dark:shadow-none',
        'relative z-1 flex h-full flex-col justify-between overflow-hidden rounded-5 p-6 md:p-10',
        'hover:[transform:translateY(-.5rem)]',
      ])}
    >
      <div>
        <div className="flex items-center gap-5">
          <h2 className="text-md font-bold leading-[1.25] md:text-lg">
            <CustomLink href={slug}>{title}</CustomLink>
          </h2>
          <span className="ml-auto flex-none text-[2.5rem] text-[#4AC4F3] transition-all duration-300 group-hover/service:scale-90 md:text-[4rem]">
            {icon}
          </span>
        </div>

        <div className="mt-4 space-y-1 text-accent-800 dark:text-body">
          {description.map(
            (line, index) =>
              line && (
                <p key={index} className="text-sm">
                  {line}
                </p>
              )
          )}
        </div>
      </div>

      <div className="mt-6">
        <CustomLink href={slug}>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#4AC4F3] hover:underline">
            Read More
            <svg
              className="h-3 w-3"
              viewBox="0 0 12 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.00033 0.666504L4.82533 1.8415L8.47699 5.49984H0.666992V7.1665H8.47699L4.82533 10.8252L6.00033 11.9998L11.3337 6.6665L6.00033 0.666504Z" />
            </svg>
          </span>
        </CustomLink>
      </div>

      <span className="invisible absolute bottom-0 left-0 h-[2px] w-full scale-x-[30%] bg-[#4AC4F3] opacity-0 transition-all duration-400 group-hover/service:visible group-hover/service:scale-x-100 group-hover/service:opacity-100"></span>
    </motion.article>
  );
}
