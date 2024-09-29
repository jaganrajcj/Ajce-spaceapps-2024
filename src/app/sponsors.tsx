"use client";

import { Button, Typography } from "@material-tailwind/react";
import CountDown from "@/components/countdown";
import Link from "next/link";
import { BackgroundBeams } from "@/components/background-beams";
import Image from "next/image";

function Sponsers() {
  return (
    <div className="text-center mt-10">
      <Typography variant="h5" color="white">
        Sparkle Sponsor
      </Typography>

      <Image
        src={"/image/logo-edimannikal.png"}
        width={300}
        height={50}
        alt="edimannikal logo"
        className="mx-auto"
      />
    </div>
  );
}

export default Sponsers;
