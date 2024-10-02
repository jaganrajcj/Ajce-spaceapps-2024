import React from 'react';
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SpecialAwardCardProps {
  title: string;
}

const SpecialAwardCard: React.FC<SpecialAwardCardProps> = ({ title }) => {
  return (
    <Card className="bg-gray-900 text-white">
      <CardBody className="text-center">
        <Typography variant="h6" color="white">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default SpecialAwardCard;
