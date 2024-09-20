"use client";

import { Button, Typography } from "@material-tailwind/react";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

const LINKS = [
  {
    title: "Register as Campus Ambassador",
    subtitle: "Become a representative and lead the event at your campus",
    href: "/register-ambassador",
  },
  {
    title: "Register as Volunteer",
    subtitle: "Join our team and help make the event a grand success",
    href: "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdVOzhzkUNKWPxncgMjgBzXBAe7YUPOGSQ5Icd8KNrYtr4Qew/viewform",
    target: "_blank",
  },
  {
    title: "Register for Hackathon",
    subtitle: "Sign up to participate in the world's biggest hackathon",
    href: "/register",
  },
];

export function Register() {
  return (
    <>
      <div
        id="register"
        className="pt-[100px] -mt[100px] container mx-auto text-center"
      >
        <div className="text-center">
          <Typography variant="h2" color="white" className="mb-3">
            Register For Event
          </Typography>
        </div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
        {LINKS.map((link) => (
          <CardContainer
            key={link.href}
            className="inter-var cursor-pointer py-4 w-full"
          >
            <CardBody className="w-[90%] bg-gradient-to-r from-gray-800 to-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 text-white"
              >
                {link.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 text-gray-300"
              >
                {link.subtitle}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={10}
                rotateZ={-5}
                className="w-full mt-4"
              >
                <Link
                  href={link.href}
                  target={link?.target ? link?.target : "_self"}
                >
                  <Button color="white">Register</Button>
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </section>
    </>
  );
}

export default Register;
