"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface WinnerData {
  institutionName: string;
  teamName: string;
  teamMembers: string[];
}

interface Winner {
  category: string;
  school: WinnerData;
  college: WinnerData;
}

interface TopWinnersProps {
  top10: Winner[];
}

const TopWinners: React.FC<TopWinnersProps> = ({ top10 }) => {
  return (
    <div className="mb-16">
      <Typography variant="h3" color="white" className="mb-12 text-center">
        Top 10 Teams
      </Typography>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-16">
        {top10.slice(0, 3).map((winner, index) => (
          <SpotlightWinnerCard key={index} winner={winner} place={index + 1} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {top10.slice(3).map((winner, index) => (
          <Card key={index + 3} className="bg-gray-700 text-white">
            <CardBody>
              <Typography variant="h5" color="orange" className="mb-4">
                {winner.category}
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WinnerSection title="School" data={winner.school} />
                <WinnerSection title="College" data={winner.college} />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface SpotlightWinnerCardProps {
  winner: Winner;
  place: number;
}

const SpotlightWinnerCard: React.FC<SpotlightWinnerCardProps> = ({ winner, place }) => {
  const gradients = [
    "from-yellow-300 to-yellow-500",
    "from-gray-300 to-gray-500",
    "from-orange-300 to-orange-500",
  ];

  return (
    <CardSpotlight className="w-full h-auto border-gray-800">
      <div className="relative z-20">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${gradients[place - 1]} flex items-center justify-center`}>
          <Typography variant="h2" color="white">
            {place}
          </Typography>
        </div>
        <Typography variant="h5" color="orange" className="mb-4 text-center">
          {winner.category}
        </Typography>
        <div className="space-y-4">
          <WinnerSection title="College" data={winner.college} />
          <WinnerSection title="School" data={winner.school} />
        </div>
      </div>
    </CardSpotlight>
  );
};

const getOrdinal = (n: number): string => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

interface WinnerSectionProps {
  title: string;
  data: WinnerData;
}

const WinnerSection: React.FC<WinnerSectionProps> = ({ title, data }) => (
  <div>
    <Typography variant="h6" color="amber" className="mb-2">
      {title}
    </Typography>
    <Typography variant="small" className="font-semibold text-gray-200">
      {data.institutionName}
    </Typography>
    <Typography variant="small" className="mb-2 text-gray-300">
      Team: {data.teamName}
    </Typography>
    <Typography variant="small" className="font-light text-gray-400">
      Members: {data.teamMembers.join(", ")}
    </Typography>
  </div>
);

export default TopWinners;