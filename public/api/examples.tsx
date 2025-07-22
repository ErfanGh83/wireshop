import { BiHome } from "react-icons/bi"
import { BsInstagram, BsTelegram } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { HiOutlineViewGrid } from "react-icons/hi"
import { MdDiscount } from "react-icons/md"
import { BsThreeDots } from "react-icons/bs";
import { FiCpu, FiDatabase, FiGrid, FiHome, FiShield, FiTruck, FiWifi, FiZap } from "react-icons/fi";

export const HamburgerItems = [
    {
        name: 'خانه',
        link: '/',
        icon: <BiHome />
    },
    {
        name: 'داشبورد',
        link: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        name: 'تخفیفات شگفت انگیز',
        link: '/products?discount_gt=30',
        icon: <MdDiscount />
    },
    {
        name: 'اینستاگرام',
        link: '/instagram.com',
        icon: <BsInstagram />
    },
    {
        name: 'تلگرام',
        link: '/telegram.com',
        icon: <BsTelegram />
    },
    {
        name: 'تنظیمات',
        link: '/settings',
        icon: <CiSettings />
    }
]

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
    {
        title: "موارد دیگر",
        icon: <BsThreeDots />,
        children: <div></div>
    },
];

export const banners = [
    {
        backgroundImageUrl: '/images/wifi-bg.jpg',
        childrenImages:
            [
                '/images/ethernet-blue.png',
            ],
        link: "/"
    },
    {
        backgroundImageUrl: '/images/power-bg.avif',
        childrenImages:
            [
                '/images/power-cable.png',
                '/images/power-cable2.webp'
            ],
        link: "/"
    },
    {
        backgroundImageUrl: '/images/rainbow-bg.avif',
        childrenImages:
            [
                '/images/rainbow-usbs.png',
                '/images/rainbow-cable2.webp'
            ],
        link: "/"
    }
]

export const circularProducts = [
    {
        id: "1",
        title: "THHN/THWN-2",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg"
    },
    {
        id: "2",
        title: "SO Cord (SOOW)",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg"
    },
    {
        id: "3",
        title: "Belden Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/33012_3.jpg"
    },
    {
        id: "4",
        title: "Alum URD",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg"
    },
    {
        id: "5",
        title: "Tray Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/673_3.jpg"
    },
    {
        id: "6",
        title: "Hook-up Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/HOOK_3.JPG"
    },
    {
        id: "7",
        title: "SER Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/SER.jpg"
    },
    {
        id: "8",
        title: "Welding Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/15591_2.jpg"
    },
    {
        id: "9",
        title: "UF-B Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/5629_3.jpg"
    },
    {
        id: "10",
        title: "Bare Copper",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/14230_1.png"
    },
    {
        id: "11",
        title: "MTW Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/MTW_-_MASTER.jpg"
    },
    {
        id: "12",
        title: "Flexible Conduit",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/2020-06-09_3.png"
    },
]