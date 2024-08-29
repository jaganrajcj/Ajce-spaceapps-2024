import { Typography, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-between">
          <Link href={"https://www.ajce.in/"} className="flex gap-2 justify-center items-center">
            <Image src="/image/ajce.png" alt="Logo" width={50} height={50} />

            <div className="flex flex-col gap-0">
              <Typography className="text-gray-200 font-semibold text-lg">
                {" "}
                AMAL JYOTHI
              </Typography>
              <Typography className="text-gray-600 font-semibold text-md">
                {" "}
                College of Engineering (Autonomous)
              </Typography>
            </div>
          </Link>

          <div className="flex w-fit justify-center gap-2">
            <Link href={"https://x.com/ajcekply"}>
              <IconButton size="sm" color="white" variant="text">
                <i className="fa-brands fa-twitter text-lg" />
              </IconButton>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCHykw_xG7JItIfObqZJZJZA"}
            >
              <IconButton size="sm" color="white" variant="text">
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </Link>
            <Link href={"https://www.instagram.com/spaceapps_ajce/"}>
              <IconButton size="sm" color="white" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </Link>

            <Link href={"https://www.linkedin.com/school/ajce/"}>
              <IconButton size="sm" color="white" variant="text">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
            </Link>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-500"
        >
          &copy; {CURRENT_YEAR} Made by AJCE Web Team
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
