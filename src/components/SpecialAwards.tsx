"use client";

import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface AwardData {
  institutionName: string;
  teamName: string;
  teamMembers: string[];
}

interface SpecialAward {
  award_name: string;
  description: string;
  school: AwardData;
  college: AwardData;
}

interface SpecialAwardsProps {
  specialAwards: SpecialAward[];
}

const SpecialAwards: React.FC<SpecialAwardsProps> = ({ specialAwards }) => {
  return (
    <div>
      <Typography variant="h3" color="white" className="mb-8 text-center">
        Special Awards
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specialAwards.map((award, index) => (
          <Card key={index} className="bg-gray-800 text-white">
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-0">
                {award.award_name}
              </Typography>
              <Typography variant="small" className="mb-4 text-gray-400">
                {award.description}
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AwardSection title="College" data={award.college} />
                <AwardSection title="School" data={award.school} />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface AwardSectionProps {
  title: string;
  data: AwardData;
}

const AwardSection: React.FC<AwardSectionProps> = ({ title, data }) => (
  <div>
    <Typography variant="h6" color="amber" className="mb-2">
      {title}
    </Typography>
    <Typography variant="small" className="font-semibold">
      {data.institutionName}
    </Typography>
    <Typography variant="small" className="mb-2">
      Team: {data.teamName}
    </Typography>
    <Typography variant="small" className="font-light">
      Members: {data.teamMembers.join(", ")}
    </Typography>
  </div>
);

export default SpecialAwards;