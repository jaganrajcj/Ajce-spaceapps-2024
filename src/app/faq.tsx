"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQS = [
  {
    title: "What is the NASA Space Apps Challenge?",
    desc: "The NASA Space Apps Challenge is the world's largest hackathon, bringing together people from around the globe to solve real-world problems using NASA's open data.",
  },
  {
    title: "Who can participate in the NASA Space Apps Challenge?",
    desc: "Anyone with a passion for problem-solving and innovation can participate. This includes students, professionals, engineers, artists, scientists, and technologists.",
  },
  {
    title: "Do I need to have a background in space or programming to join?",
    desc: "No, participants from all backgrounds are welcome. The challenge encourages diverse teams to collaborate and bring unique perspectives to the problems.",
  },
  {
    title: "How do I register for the event?",
    desc: "You can register for the event on our official website. Follow the registration link, fill in your details, and you'll receive a confirmation email with further instructions.",
  },
  {
    title: "Is there a registration fee?",
    desc: "No, the NASA Space Apps Challenge is free to participate in.",
  },
  {
    title:
      "Can I participate if I'm not in the same city as the event location?",
    desc: "Yes, the event is held both locally and virtually, allowing participants from anywhere in the world to join.",
  },
  {
    title: "What are the dates for the NASA Space Apps Challenge 2024?",
    desc: "The event will take place from October 5th to October 6th, 2024.",
  },
  {
    title: "What should I bring to the event?",
    desc: "Bring your laptop, chargers, and any other tools you might need for your project. It's also a good idea to bring snacks and personal items to stay comfortable during the hackathon.",
  },
  {
    title: "Will there be food and drinks provided?",
    desc: "Yes, meals and refreshments will be provided throughout the event.",
  },
  {
    title: "How are the challenges structured?",
    desc: "The challenges are divided into various themes based on real-world problems. Teams choose a challenge that interests them and work on developing a solution over the course of the hackathon.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Welcome to the our FAQ section. We&apos;re here to address your most
            common queries and provide you with the information you need to make
            the most of your hackathon experience.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
