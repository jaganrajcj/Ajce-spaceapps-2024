
import { Typography, Card } from "@material-tailwind/react";
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="font-bold" color="white">
        {count}
      </Typography>
      <Typography variant="h6" color="white" className="mt-1 font-medium text-gray-400">
        {title}
      </Typography>
    </Card>
  );
}


export default StatsCard;
