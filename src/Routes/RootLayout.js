import React from "react";
import { Outlet } from "react-router-dom";
import SideBarMenu from "../components/SideBarMenu";

function RootLayout() {
  return (
    <>
      <SideBarMenu />
      <Outlet />
    </>
  );
}

export default RootLayout;
