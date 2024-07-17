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

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link
        href={href || "#"}
        className="flex items-center gap-2 font-medium"
      >
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

export function Navbar() {
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
      shadow={true}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 border-0 ${isScrolling ? 'bg-white/10 backdrop-blur-sm': 'bg-transparent'}`}
    >

      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "white" : "white"}
          className="text-lg font-bold"
        >
          SpaceApps AJCE
        </Typography>
        {/* <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul> */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* <Button color={isScrolling ? "gray" : "white"} variant="text">
            Log in
          </Button> */}
          <Link href="/register">
            <Button color={isScrolling ? "white" : "white"}>Register</Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                {/* <Icon className="h-5 w-5" /> */}
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            {/* <Button variant="text">Log in</Button> */}
            <Link href="/register">
              <Button color="gray">Register</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
