import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';

export interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  slug: string;
}

export function ServiceCard({ icon, title, description, slug }: ServiceProps) {
  return (
    <article
      className={cn([
        'group/service bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white dark:shadow-none',
        'relative z-1 flex h-full flex-col justify-between overflow-hidden rounded-5 p-6 md:p-10',
        'hover:[transform:translateY(-.5rem)]',
      ])}
    >
      <div>
        <div className="flex items-center gap-5">
          <span className="flex-none text-[2.5rem] transition-all duration-300 group-hover/service:scale-90 group-hover/service:text-primary md:text-[4rem]">
            {icon}
          </span>
          <h2 className="text-md font-bold leading-[1.25] md:text-lg">
            <CustomLink href={slug}>{title}</CustomLink>
          </h2>
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
        <Button
          asChild
          className={cn([
            'rounded-5 border',
            'group-hover/service:border-primary',
            'border-current bg-transparent text-accent-900 hover:border-primary hover:bg-transparent hover:text-primary',
            'dark:border-accent-900 dark:bg-accent-900 dark:text-white dark:hover:text-primary group-hover/service:dark:bg-transparent',
            'before:hidden after:hidden',
          ])}
        >
          <CustomLink href={slug}>
            <span>Read More</span>
            <span className="relative top-[-2px] text-sm/[1] text-primary">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 12 12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z" />
              </svg>
            </span>
          </CustomLink>
        </Button>
      </div>

      <span className="invisible absolute bottom-0 left-0 h-[2px] w-full scale-x-[30%] bg-primary opacity-0 transition-all duration-400 group-hover/service:visible group-hover/service:scale-x-100 group-hover/service:opacity-100"></span>
    </article>
  );
}
