import React from "react";
import TopBar from "./components/navbar/TopBar.jsx";
import SideBar from "./components/navbar/SideBar.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex gap-4 ">
        <div className="w-[23vw]">
          <SideBar />
        </div>
        <div className="w-[77vw] pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
