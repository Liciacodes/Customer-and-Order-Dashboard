"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkComponent = ({ href, icon, label, disabled }) => {
  const pathname = usePathname();

  if (disabled) {
    return (
      <span className="text-gray-300 cursor-not-allowed inline-flex items-center gap-x-2 px-2 py-3">
        <span>{icon}</span>
        <span>{label}</span>
      </span>
    );
  }
  return (
    <Link href={href}>
      <div
        className={`${pathname === href ? "text-purple-500" : ""} ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }  hover:bg-gray-100 hover:w-52 hover:rounded-lg  cursor-pointer my-2 py-3  inline-flex gap-x-2 px-2 items-center text-gray-600`}
      >
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default LinkComponent;
