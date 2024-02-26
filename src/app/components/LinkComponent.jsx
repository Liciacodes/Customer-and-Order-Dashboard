"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkComponent = ({ href, icon, label, disabled }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        className={`${
          pathname === href
            ? "text-black"
            : pathname === "/settings"
            ? "text-gray-100"
            : ""
        }  hover:bg-gray-100 hover:w-52 hover:rounded-lg  cursor-pointer my-2 py-3  inline-flex gap-x-2 px-2 items-center text-gray-600`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default LinkComponent;
