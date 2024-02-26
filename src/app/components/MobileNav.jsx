import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";
import { navData } from "../data/NavData";
import LinkComponent from "./LinkComponent";

export const MobileNav = () => {
  return (
    <div className="fixed w-20 lg:h-full p-4 bg-black border-r-[1px] lg:flex lg:flex-col justify-between z-20">
      <div className="flex flex-col items-center">
        <Link href={""}>
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2"> </span>
        {navData.map(({ href, icon, id }) => (
          <LinkComponent href={href} icon={icon} key={id} />
        ))}
      </div>
    </div>
  );
};
