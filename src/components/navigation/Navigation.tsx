"use client";
import { useState } from "react";

import NavigationBar from "@/components/navigation/NavigationBar";
import SideBar from "@/components/navigation/SideBar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavigationBar isSidebarOpen={isOpen} toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navigation;
