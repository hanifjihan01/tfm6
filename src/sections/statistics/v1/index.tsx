// import { StatCard, StatCardProps } from 'src/components/cards/stat/v1';
// import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
// import { statisticsSectionData } from '@/data/statistics-section/v1';
import { SectionProps } from '@/src/common-types';
import { cn } from '@/src/utils/shadcn';

export function StatisticsSection({ className }: SectionProps) {
  // Tidak ada data statistik
  return <section className={cn(className)}></section>;
}
