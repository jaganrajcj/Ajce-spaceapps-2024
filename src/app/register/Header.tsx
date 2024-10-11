"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href || "#"} className="flex items-center gap-2 font-medium">
        {children}
      </Link>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "About Event",
    icon: RectangleStackIcon,
  },
  {
    name: "Highlights",
    icon: UserCircleIcon,
  },
  {
    name: "Contact Us",
    icon: CommandLineIcon,
    href: "#contact",
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={true}
      //   color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 ${isScrolling ? "bg-white/10 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2 justify-center items-center">
          <Image src="/image/ajce.png" alt="Logo" width={45} height={45} />
          <Typography
            color={isScrolling ? "white" : "white"}
            className="text-lg font-bold"
          >
            {" "}
            SpaceApps AJCE
          </Typography>
        </div>
      </div>
    </MTNavbar>
  );
}

export default Header;
