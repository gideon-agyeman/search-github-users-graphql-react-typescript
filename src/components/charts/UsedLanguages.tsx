import { Repository } from '@/types';
import { calculateMostPopularLanguages } from '@/utils';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculateMostPopularLanguages(repositories);

  const chartConfig = {
    language: {
      label: 'language',
      color: '#2563eb',
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Languages</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularLanguages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-language" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UsedLanguages;
