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

export const wireAndCableProducts = [
    {
        id: "1",
        title: "THHN/THWN-2 Copper Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg",
        price: 0.85,
        discount: 10,
        isSpecial: true,
        description: "10 AWG, 600V, 90°C dry/75°C wet, for conduit and raceways"
    },
    {
        id: "2",
        title: "SOOW Portable Cord",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg",
        price: 2.15,
        discount: 0,
        description: "600V, 2/0 AWG, oil-resistant rubber jacket, flexible"
    },
    {
        id: "3",
        title: "Belden Instrumentation Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/33012_3.jpg",
        price: 1.45,
        discount: 15,
        description: "Shielded pair, 18 AWG, for industrial control systems"
    },
    {
        id: "4",
        title: "Aluminum URD Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg",
        price: 0.65,
        discount: 5,
        description: "Direct burial, 1/0-4/0 AWG, XLPE insulation"
    },
    {
        id: "5",
        title: "TC Tray Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/673_3.jpg",
        price: 3.20,
        discount: 0,
        isSpecial: true,
        description: "600V, 4 conductor, sunlight resistant, for power trays"
    },
    {
        id: "6",
        title: "Hook-Up Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/HOOK_3.JPG",
        price: 0.35,
        discount: 20,
        description: "20 AWG, PVC insulation, for internal wiring"
    },
    {
        id: "7",
        title: "SER Service Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/SER.jpg",
        price: 1.80,
        discount: 0,
        description: "2-2-2-4 AWG, aluminum, for residential service entrance"
    },
    {
        id: "8",
        title: "Welding Cable",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/15591_2.jpg",
        price: 2.75,
        discount: 12,
        description: "2/0 AWG, EPDM insulation, extreme flexibility"
    },
    {
        id: "9",
        title: "UF-B Underground Feeder",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/5629_3.jpg",
        price: 0.95,
        discount: 8,
        description: "12/2 AWG, direct burial, sunlight resistant"
    },
    {
        id: "10",
        title: "Bare Copper Grounding Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/14230_1.png",
        price: 1.10,
        discount: 0,
        description: "4 AWG solid, for grounding electrodes and bonding"
    },
    {
        id: "11",
        title: "MTW Machine Tool Wire",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/MTW_-_MASTER.jpg",
        price: 0.60,
        discount: 25,
        description: "16 AWG, 600V, oil-resistant, for control panels"
    },
    {
        id: "12",
        title: "Flexible Liquidtight Conduit",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/2020-06-09_3.png",
        price: 1.25,
        discount: 0,
        description: '"3/4", PVC coated, for outdoor and wet locations'
    },
    {
        id: "13",
        title: "Romex NM-B Cable",
        imageUrl: "https://example.com/romex.jpg",
        price: 0.75,
        discount: 10,
        description: "12/2 AWG with ground, for residential branch circuits"
    },
    {
        id: "14",
        title: "Coaxial RG6 Cable",
        imageUrl: "https://example.com/rg6.jpg",
        price: 0.45,
        discount: 0,
        description: "Tri-shield, 18 AWG, for CATV and satellite"
    },
    {
        id: "15",
        title: "Fire Alarm Cable",
        imageUrl: "https://example.com/fire-alarm.jpg",
        price: 1.65,
        discount: 5,
        description: "FPLR, 18 AWG, riser rated for alarm systems"
    }
];