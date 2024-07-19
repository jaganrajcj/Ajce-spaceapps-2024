"use client";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import Day from "@/components/day";

const eventSchedule = [
  // Day One
  [
    {
      time: "08:30 AM",
      title: "REGISTRATION",
      desc: "Attendees check in and receive their welcome kits",
    },
    {
      time: "10:00 AM",
      title: "OPENING CEREMONY",
      desc: "Official start of the event with keynote speeches and introductions",
    },
    {
      time: "11:00 AM",
      title: "HACKATHON COMMENCES",
      desc: "Participants begin their projects, diving into coding and collaboration",
    },
  ],
  // Day two
  [
    {
      time: "09:00 AM",
      title: "HACKATHON RESUMES",
      desc: "Teams continue their work, refining and developing their projects",
    },
    {
      time: "12:00 PM",
      title: "PRESENTATION",
      desc: "Teams present their projects to the judges",
    },
    {
      time: "04:00 PM",
      title: "CLOSING CEREMONY",
      desc: "Winners are announced and awards are distributed, concluding the event",
    },
  ],
];

export function EventContent() {
  return (
    <section className="py-8 px-2 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96 bg-gray-900/60">
            <Tab value="Day1" className="font-medium">
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium">
              Day 2
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody>
          {/* {console.log("eventSchedule:", eventSchedule);} */}
          <TabPanel value={"Day1"}>
            <Day
              day={"01"}
              date="SATURDAY, OCTOBER 5"
              details={eventSchedule[0]}
            />
          </TabPanel>
          <TabPanel value={"Day2"}>
            <Day
              day={"02"}
              date="SATURDAY, OCTOBER 6"
              details={eventSchedule[1]}
            />
          </TabPanel>
        </TabsBody>
      </Tabs>
      <div className="mx-auto container"></div>
    </section>
  );
}

export default EventContent;
