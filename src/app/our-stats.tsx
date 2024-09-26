"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";
import { AlertCircle } from "lucide-react";

const STATS = [
  {
    count: "1,500+",
    title: "Participants",
  },
  {
    count: "200+",
    title: "Teams",
  },
  {
    count: "36",
    title: "Hours",
  },
  {
    count: "1.5 Lakh",
    title: "Worth of prizes",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography variant="h6" color="orange" className="mb-6 font-medium">
          Our Stats
        </Typography>
        <Typography
          className="text-5xl font-bold leading-tight lg:w-3/4"
          color="white"
        >
          Event Highlights
        </Typography>
        <Typography
          variant="lead"
          className="mt-3 w-full !text-gray-500 lg:w-9/12"
        >
          NASA Space Apps Challenge 2024, the world's biggest hackathon!
          Experience innovation at its peak as teams from around the globe come
          together to solve real-world problems using NASA's open data.
        </Typography>
        <div className="mt-6 bg-white/10 backdrop-blur-sm text-white p-4 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Special Gift!</h3>
            <p>
              Every participant will receive a ₹1000 gift voucher from Oxygen, our digital partner!
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;