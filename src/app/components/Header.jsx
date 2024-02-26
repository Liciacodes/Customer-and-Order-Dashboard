"use client";
import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { MobileNav } from "./MobileNav";

const Header = () => {
  const [showSidebar, setShowSideBar] = useState(true);
  const toggleSideBar = () => {
    setShowSideBar(!showSidebar);
  };

  return (
    <div className="flex justify-between px-4 pt-4 items-center ">
      <div
        onClick={toggleSideBar}
        className="lg:hidden block text-purple-800 bg-gray-200"
      >
        {showSidebar ? <AiOutlineClose size={50} /> : <LuMenu size={50} />}
        {showSidebar && <MobileNav />}
      </div>

      <h2 className="hidden lg:block">Dashboard</h2>
      <h2>Welcome Back, Felz</h2>
    </div>
  );
};

export default Header;
