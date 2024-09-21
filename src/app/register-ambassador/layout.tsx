import type { Metadata } from "next";
import Header from "../register/Header";

export const metadata: Metadata = {
  title: "Register | NASA Space Apps Challenge",
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
    </div>
  );
}
