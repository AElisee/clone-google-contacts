import React from "react";
import TopBar from "./components/navbar/TopBar.jsx";
import SideBar from "./components/navbar/SideBar.jsx";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="flex gap-5 m-0 ">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
