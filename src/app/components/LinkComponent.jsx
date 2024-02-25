import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const LinkComponent = ({ href, icon }) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        className={`${
          pathname === href ? "bg-gray-500" : ""
        } bg-gray-100 hover:bg-purple-300 cursor-pointer my-4 p-3 rounded-lg inline-block`}
      >
        {icon}
      </div>
    </Link>
  );
};

export default LinkComponent;
