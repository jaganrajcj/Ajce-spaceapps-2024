
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Layout } from "@/components";
import Header from "./Header";
import { BackgroundBeams } from "@/components/background-beams";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Register | NASA Space Apps Challenge",
//   description:
//     "Introducing Tailwind Event Landing Page, a dynamic and visually appealing landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
        <Header />
        {children}
        {/* <BackgroundBeams /> */}
        {/* <Footer /> */}
    </div>
  );
}
