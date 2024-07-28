"use client";

import { Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import React from "react";
import CustomTab from "@/app/internal/e2dc6cbc80e73397/_components/customTab";

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="container mx-auto px-3 lg:px-0 text-blue-gray-900">
      <Typography variant="h4" color="gray" className="">
        Welcome, {session?.user?.name}
      </Typography>
      <div className="mt-5">
        <CustomTab />
      </div>
      {/* <p>Welcome {session?.user?.name}</p> */}
    </div>
  );
};

export default Dashboard;
