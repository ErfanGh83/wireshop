import { FiCpu, FiDatabase, FiGrid, FiHome, FiShield, FiTruck, FiWifi, FiZap } from "react-icons/fi";

export const subHeaderItems = [
    {
        title: "سیم برق",
        icon: <FiZap className="text-lg" />,
        children: <div></div>
    },
    {
        title: "کابل شبکه",
        icon: <FiWifi className="text-lg" />,
        children: <div></div>
    },
    {
        title: "سیم مفتولی",
        icon: <FiGrid className="text-lg" />,
        children: <div></div>
    },
    {
        title: "کابل کواکسیال",
        icon: <FiCpu className="text-lg" />,
        children: <div></div>
    },
    {
        title: "سیم ساختمانی",
        icon: <FiHome className="text-lg" />,
        children: <div></div>
    },
    {
        title: "کابل خودرو",
        icon: <FiTruck className="text-lg" />,
        children: <div></div>
    },
    {
        title: "کابل فیبر نوری",
        icon: <FiDatabase className="text-lg" />,
        children: <div></div>
    },
    {
        title: "سیم ارت",
        icon: <FiShield className="text-lg" />,
        children: <div></div>
    },
];