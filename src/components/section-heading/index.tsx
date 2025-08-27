import { SectionHeadingProps } from './interface';
import { cn } from '@/src/utils/shadcn';

/**
 * This component renders a text section with `subtitle`, `title`,
 * and `description`. It has styling options for alignment
 * @param SectionHeadingProps
 * @returns JSX.Element
 */
export function SectionHeading({
  title,
  subtitle,
  description,
  alignment = 'start',
  hasBottomSpacing = false,
  className,
}: SectionHeadingProps) {
  const wrapperClasses = cn(
    alignment === 'start' && 'text-left',
    alignment === 'center' && 'text-center',
    alignment === 'end' && 'text-right',
    { 'mb-10 md:mb-[3.75rem]': hasBottomSpacing },
    className
  );

  return (
    <div className={wrapperClasses}>
      <h2
        className="text-left font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-accent-900 md:text-3xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <span className="mt-[.625rem] block text-center font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-gray-500 md:text-md">
          {subtitle}
        </span>
      )}
      {description && (
        <p className="mt-2 whitespace-pre-line text-accent-900 dark:text-accent-900">
          {description}
        </p>
      )}
    </div>
  );
}
