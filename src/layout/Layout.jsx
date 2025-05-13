import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";

const Layout = () => (
  <>
    <Navbar />
    <main className="min-h-[80vh]">
      <Outlet />
    </main>
    <Contact />
  </>
);

export default Layout;
