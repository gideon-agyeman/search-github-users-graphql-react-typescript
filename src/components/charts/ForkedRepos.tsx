import { Repository } from '@/types';
import { calculateMostForkedRepos } from '@/utils';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  const chartConfig = {
    repo: {
      label: 'repositories',
      color: '#0a1',
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Forked Repositories
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={mostForkedRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repos"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
            axisLine={false}
          />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-repo" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ForkedRepos;
