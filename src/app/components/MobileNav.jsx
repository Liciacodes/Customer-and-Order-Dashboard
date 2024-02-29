import Link from "next/link";
import { RxSketchLogo } from "react-icons/rx";
import { navData } from "../data/NavData";
import LinkComponent from "./LinkComponent";
import { MdOutlineClose } from "react-icons/md";

export const MobileNav = ({ showMenu, toggleMenu }) => {
  return (
    <>
      {showMenu && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 p-4 w-full bg-white border-r-[1px] justify-between z-20 h-[50%] ${
          showMenu ? "" : "hidden"
        }`}
      >
        <div className="block top-0 right-0">
          {showMenu && (
            <MdOutlineClose
              size={40}
              className="text-black cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div
          className={`flex flex-col items-center justify-center ${
            showMenu ? "" : "hidden"
          }`}
        >
          <Link href={""}>
            <div className="bg-purple-400 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>

          {navData.map(({ href, icon, id, label }) => (
            <LinkComponent href={href} icon={icon} key={id} label={label} />
          ))}
        </div>
      </div>
    </>
  );
};
