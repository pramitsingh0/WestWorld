import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Layout.scss";

export default function Layout() {
  return (
    <div className="base">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
