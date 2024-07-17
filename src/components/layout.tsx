import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;