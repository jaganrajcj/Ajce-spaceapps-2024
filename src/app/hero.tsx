"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import CountDown from "@/components/countdown";
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { BackgroundBeams } from "@/components/background-beams";

function Hero() {
  return (
    
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* <div className="absolute inset-0 h-full w-full bg-gray-900/60" /> */}
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center text-center lg:text-left">
            <div className="order-1 lg:order-1">
              {/* <Typography variant="h3" color="white" className="mb-2">
              29-31 August @ New York
            </Typography> */}
              <Typography variant="h1" color="white" className="lg:max-w-3xl">
                NASA Space Apps Challenge 2024
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
              >
                Join us for the 2024 NASA Space Apps Challenge on October 5-6 as
                we celebrate this year&apos;s theme of “The Sun Touches
                Everything" with NASA Heliophysics
              </Typography>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                {/* <Button variant="gradient" color="white">
                Get started
              </Button> */}
                {/* <IconButton className="rounded-full bg-white p-6">
                <PlayIcon className="h-4 w-4 text-gray-900" />
              </IconButton> */}
              </div>
            </div>
            <div className="order-2 lg:order-2 mt-8 lg:mt-0">
              {/* Additional content goes here */}
              {/* <Typography variant="h3" color="white" className="mb-2">
              Additional Information
            </Typography> */}
              <Typography
                variant="paragraph"
                color="white"
                className="text-center mb-2 font-semibold"
              >
                LIFT OFF IN:
              </Typography>
              <CountDown />
              <Link href="/register">
                <Button className="mt-5 w-full text-black bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
   
  );
}

export default Hero;
