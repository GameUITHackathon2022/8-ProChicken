import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Header from "./Header";
import HeaderCopy from "./HeaderCopy";

function MainLayout() {
  const { pathname } = useLocation();

  if (pathname === "/signin" || pathname === "/signup") {
    return <Outlet />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
