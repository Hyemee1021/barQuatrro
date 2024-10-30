import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BackToTop } from "./BackToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <Header />
        <BackToTop />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
