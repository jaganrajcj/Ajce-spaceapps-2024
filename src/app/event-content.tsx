"use client";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import Day from "@/components/day";


export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader className="h-12 w-72 md:w-96">
            <Tab value="Day1" className="font-medium">
              Day 1
            </Tab>
            <Tab value="Day2" className="font-medium">
              Day 2
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody>
          
          <TabPanel value={"Day1"}><Day title="Day one Schedule" day={'01'}/></TabPanel>
          <TabPanel value={"Day2"}><Day title="Day Two Schedule" day={'02'}/></TabPanel>
        </TabsBody>
      </Tabs>
      <div className="mx-auto container">
       
      </div>
    </section>
  );
}

export default EventContent;
