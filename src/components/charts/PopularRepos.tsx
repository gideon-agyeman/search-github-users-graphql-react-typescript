import { Repository } from '@/types';
import { calculateMostStarredRepose } from '@/utils';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepose(repositories);

  const chartConfig = {
    repo: {
      label: 'repositories',
      color: '#e11c47',
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Popular Repositories
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repos"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="var(--color-repo" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos;
