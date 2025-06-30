import { PersonProps, blurDataUrl } from '@/src/common-types';
import Image from 'next/image';

export interface TestimonialCardProps {
  person: PersonProps;
  speech: string;
  rating: number;
}

export function TestimonialCard({
  person: { image, about, name },
  speech,
}: TestimonialCardProps) {
  return (
    <div className="relative flex flex-col items-center overflow-visible">
      {/* Card testimonial */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[#4AC4F3] p-6 pb-24 pt-10 text-center shadow-md sm:p-10">
        {/* Rating */}
        <div className="mb-6 text-white"></div>

        {/* Speech */}
        <p className="text-base leading-relaxed text-white">{speech}</p>

        {/* Segitiga bawah */}
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 transform"
          style={{ filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2))' }}
        >
          <svg
            width={60}
            height={30}
            viewBox="0 0 60 30"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#4AC4F3]"
          >
            <polygon points="0,0 30,30 60,0" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Foto & info orang */}
      <div className="mt-14 flex flex-col items-center text-center">
        <div className="relative mb-4 h-20 w-20">
          <Image
            src={image.src}
            alt={image.alt}
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="rounded-full border-4 border-white object-cover"
          />
          {/* Icon kutipan */}
          <span className="absolute -right-2 top-0 text-white">
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path d="M6.60221 12.8771C6.99327..." />
              <path d="M22.985 12.8771C23.3761..." />
            </svg>
          </span>
        </div>
        <h3 className="text-md font-bold leading-tight text-accent-900 dark:text-white md:text-lg">
          {name}
        </h3>
        <p className="text-accent-600 mt-1 text-sm dark:text-accent-200">
          {about}
        </p>
      </div>
    </div>
  );
}
