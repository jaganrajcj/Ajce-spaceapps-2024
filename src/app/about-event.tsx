"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Meet like minded individuals",
    description:
      "When you participate in the NASA International Space Apps Challenge, you join a global community that embraces collaboration across borders, sectors, and cultures. The NASA Space Apps community shares a desire to learn and an interest in exploring our planet and universe through the creative use of science and technology. ",
    subTitle: "Presentation",
    image: "/image/nasa1.png",
  },
  {
    title: "Challenge yourself",
    description:
      "This is your opportunity to stretch your skills! Connect with fellow participants, teammates, and Subject Matter Experts to learn new programs, gain knowledge, and explore innovative approaches to new and existing problems.",
    subTitle: "Workshops",
    image: "/image/nasa2.png",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        NASA Space Apps?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        NASA Space Apps is an annual international hackathon that brings
        together global participants to tackle challenges in space exploration
        and Earth science. Organized by NASA, it encourages teamwork,
        creativity, and innovation using NASA&apos;s open data. This event
        unites experts and enthusiasts from diverse backgrounds, making it a hub
        for advancing science and technology.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Use open data to solve variety of challenges!"
            subTitle="Community"
            description="NASA Space Apps provides a platform for problem solvers worldwide to use free and open data from NASA and its Space Agency Partners. NASA Space Apps Challenge teams use these resources to solve challenges written by NASA experts, featuring topics ranging from storytelling to software development, astrophysics, space exploration, and more."
            image="/image/nasa3.png"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
