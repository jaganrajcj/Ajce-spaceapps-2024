"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { Users } from "lucide-react";
import Registrations from "./registrations";
import AccessList from "./AccessList";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState("registrations");

  return (
    <Tabs value={activeTab} >
      <TabsHeader className="max-w-[400px]">
        <Tab value="registrations" onClick={() => setActiveTab('registrations')}>
          <div className="flex items-center gap-2">
            <Square3Stack3DIcon className="w-5 h-5" />
            Registrations
          </div>
        </Tab>
        <Tab value="users" onClick={() => setActiveTab('users')}>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Access List
          </div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        {activeTab == "registrations" && (
          <TabPanel value="registrations" className="p-0 m-0">
            <Registrations />
          </TabPanel>
        )}
        {activeTab == "users" && (
          <TabPanel className="p-0 m-0" value="users">
            <AccessList />
          </TabPanel>
        )}
      </TabsBody>
    </Tabs>
  );
};

export default CustomTab;
