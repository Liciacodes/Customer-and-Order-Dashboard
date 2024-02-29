"use client";
import React, { useState } from "react";
import { RxSketchLogo } from "react-icons/rx";
import { navData } from "../data/NavData";
import Link from "next/link";
import LinkComponent from "./LinkComponent";
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNav } from "./MobileNav";

const Sidebar = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="lg:flex lg:flex-row">
      {/* Menu Icon for Smaller Screens  */}
      <div className="lg:hidden text-3xl bg-gray-100" onClick={toggleMenu}>
        {!showMenu && (
          <GiHamburgerMenu
            size={50}
            className="text-black pt-2 cursor-pointer"
          />
        )}
      </div>

      {/* Sidebar Navigation */}
      <div className="lg:fixed w-60 lg:h-screen bg-white lg:flex lg:flex-col justify-between">
        <div className="hidden lg:flex lg:flex-col p-4">
          <Link href="">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full"> </span>
          {navData.map(({ href, icon, id, label, disabled }) => (
            <LinkComponent
              href={href}
              icon={icon}
              key={id}
              label={label}
              disabled={disabled}
            />
          ))}
        </div>
        {showMenu && <MobileNav toggleMenu={toggleMenu} showMenu={showMenu} />}
      </div>
      {/* Main Content */}
      <main className="lg:ml-60 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
