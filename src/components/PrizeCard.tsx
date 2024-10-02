import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface PrizeCardProps {
  place: string;
  amount: string;
  extras: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ place, amount, extras }) => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardBody className="text-center">
        <Typography variant="h3" color="white" className="mb-2">
          {place}
        </Typography>
        <Typography variant="h4" color="yellow" className="mb-4">
          {amount}
        </Typography>
        <Typography color="gray">
          {extras}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default PrizeCard;
