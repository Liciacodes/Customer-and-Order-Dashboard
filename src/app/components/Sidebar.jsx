import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";
import { navData } from "../data/NavData";
import LinkComponent from "./LinkComponent";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="hidden lg:fixed w-60 lg:h-screen bg-white lg:flex lg:flex-col justify-between">
        <div className="flex flex-col p-4">
          <Link href={""}>
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full "> </span>
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
      </div>
      <main className="ml-0 lg:ml-60 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
