import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { RxDashboard, RxPerson } from "react-icons/rx";

export const navData = [
  { id: 1, icon: <RxDashboard size={20} />, href: "/" },
  { id: 2, icon: <RxPerson size={20} />, href: "/customers" },
  { id: 3, icon: <HiOutlineShoppingBag size={20} />, href: "/orders" },
  { id: 4, icon: <FiSettings size={20} />, href: "" },
];
