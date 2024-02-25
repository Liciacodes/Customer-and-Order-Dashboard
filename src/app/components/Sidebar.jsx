"use client";
import React from "react";
import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";
import { navData } from "../data/NavData";
import LinkComponent from "./LinkComponent";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href={""}>
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"> </span>
          {navData.map((data) => (
            <LinkComponent href={data.href} icon={data.icon} key={data.id} />
          ))}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
