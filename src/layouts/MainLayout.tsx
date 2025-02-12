import React from "react";
import Header from "../(components)/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../(components)/Footer";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
