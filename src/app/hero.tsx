"use client";

import { Button, Typography } from "@material-tailwind/react";
import CountDown from "@/components/countdown";
import Link from "next/link";
import { BackgroundBeams } from "@/components/background-beams";
import Image from "next/image";

function Hero() {
  return (
    <div className="z-40 relative min-h-screen w-full pt-6 lg:pt-0 overflow-x-hidden bg-[url('/image/astronaut.png')] lg:bg-none bg-cover bg-no-repeat ">
      <div className="block lg:hidden absolute inset-0 h-full w-full bg-gray-900/65" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center text-center lg:text-left">
          <div className="order-1 lg:order-1">
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
            <div className="md:max-w-[630px] ">
              <CountDown />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link
                  href="https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/kanjirappally/"
                  target="_blank"
                >
                  <Button className="mt-5 w-full text-black bg-gradient-to-r bg-[#e7f434] hover:bg-[#007aff] focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg font-semibold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                    Explore Global Challenge
                  </Button>
                </Link>
                <Link href="/register" className="col-span-1">
                  <Button className="mt-5 w-full text-black bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg font-semibold rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">
                    Register for Local Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 mt-8 lg:mt-0 md:overflow-hidden">
            <Image
              src={"/image/astronaut.png"}
              height={800}
              width={600}
              alt="astronaut"
              className="hidden lg:block hover:scale-x-105 hover:-rotate-3 duration-300"
            />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Hero;
