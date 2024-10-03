"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

type Sponsor = {
  name: string;
  image: string;
  special?: string;
};

const sponsorData = [
  // {
  //   type: "Sparkle Sponsors",
  //   sponsors: [
  //     { name: "Sparkle Sponsor", image: "/image/sparkle-sponsors/4.png", special: "sparkle" },
  //   ]
  // },
  {
    type: "",
    sponsors: [
      {
        name: "Sparkle Sponsor",
        image: "/image/sparkle-sponsors/4.png",
        special: "sparkle",
      },
      { name: "Other Sponsor 1", image: "/image/other-sponsors/2.png" },
      { name: "Other Sponsor 2", image: "/image/other-sponsors/3.png" },
      { name: "Other Sponsor 3", image: "/image/other-sponsors/etomelogo.png" },

    ],
  },
  {
    type: "Organizing Partners & Collaborators",
    sponsors: [
      { name: "Collaborator 1", image: "/image/collaborators/1.png" },
      { name: "Collaborator 3", image: "/image/collaborators/7.png" },
      { name: "Collaborator 4", image: "/image/collaborators/3.png" },
      { name: "Collaborator 5", image: "/image/collaborators/9.png" },
      { name: "Collaborator 6", image: "/image/collaborators/10.png" },
      { name: "Collaborator 6", image: "/image/collaborators/8.png" },

    ],
  },
];

function Sponsors() {
  const getSponsorStyle = (special?: string) => {
    switch (special) {
      case "sparkle":
        return "border-4 border-yellow-400 shadow-lg shadow-yellow-500/50";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 pt-12">
      <Typography variant="h2" color="white" className="text-center mb-12">
        Our Sponsors
      </Typography>

      {sponsorData.map((category, index) => (
        <div key={index} className="mb-16">
          {category.type && (
            <Typography variant="h4" color="white" className="text-center mb-8">
              {category.type}
            </Typography>
          )}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {category.sponsors.map((sponsor: Sponsor, sponsorIndex) => (
              <div
                key={sponsorIndex}
                className={`p-0 mx-2 rounded-lg ${getSponsorStyle(
                  sponsor?.special
                )}`}
              >
                {sponsor?.special && (
                  <div className=" bg-yellow-400 text-gray-800 font-bold text-xs px-2 py-1 ">
                    Sparkle Sponsor
                  </div>
                )}
                <Image
                  src={sponsor.image}
                  width={130}
                  height={65}
                  alt={sponsor.name}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
