// StatisticsSection.tsx

import { Container } from '@/src/components/container';
import { StatCard, StatCardProps } from 'src/components/cards/stat/v2';
import { statisticsSectionData } from '@/data/statistics-section/v2';
import { cn } from '@/src/utils/shadcn';
import { SectionProps } from '@/src/common-types';

export interface StatisticsSectionProps {
  statistics: StatCardProps[];
}

export function StatisticsSection({ className }: SectionProps) {
  const { statistics } = statisticsSectionData;

  return (
    <section className={cn(className)}>
      <Container>
        {statistics && statistics.length > 0 && (
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-accent-700">
            <div className="flex flex-wrap justify-between gap-y-6">
              {statistics.map((stat, index) => (
                <div key={index} className="min-w-[200px] flex-1">
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
