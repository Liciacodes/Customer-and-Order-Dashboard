import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { RxDashboard, RxPerson } from "react-icons/rx";

export const navData = [
  { id: 1, icon: <RxDashboard size={24} />, href: "/", label: "Dashboard" },
  {
    id: 2,
    icon: <RxPerson size={24} />,
    href: "/customers",
    label: "Customers",
    disabled: false,
  },
  {
    id: 3,
    icon: <HiOutlineShoppingBag size={24} />,
    href: "/orders",
    label: "Orders",
    disabled: false,
  },
  {
    id: 4,
    icon: <FiSettings size={24} />,
    href: "",
    label: "Settings",
    disabled: true,
  },
];
