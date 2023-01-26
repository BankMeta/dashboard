import { MdSpaceDashboard } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { IoWallet } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const SidebarData = [
    {
    title: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard />,
    },
    {
    title: "Wallet",
    path: "/wallet",
    icon: <IoWallet />,
    },
    {
    title: "Transactions",
    path: "/transactions",
    icon: <TbArrowsRightLeft />,
    },
    {
    title: "Account",
    path: "/account",
    icon: <FaUserCircle />,
    },
]