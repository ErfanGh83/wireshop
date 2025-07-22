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
        title: "سیم مسی THHN/THWN-2",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg",
        price: 0.85,
        discount: 10,
        isSpecial: true,
        description: "سایز 10 AWG، ولتاژ 600V، مقاوم تا 90°C خشک و 75°C مرطوب، مناسب برای داکت و رایسوی"
    },
    {
        id: "2",
        title: "کابل قابل حمل SOOW",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg",
        price: 2.15,
        discount: 0,
        description: "ولتاژ 600V، سایز 2/0 AWG، روکش لاستیکی مقاوم به روغن، انعطاف پذیر"
    },
    {
        id: "3",
        title: "کابل ابزار دقیق بلدن",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/33012_3.jpg",
        price: 1.45,
        discount: 15,
        description: "زوج شیلددار، سایز 18 AWG، مناسب سیستم های کنترل صنعتی"
    },
    {
        id: "4",
        title: "کابل آلومینیومی URD",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg",
        price: 0.65,
        discount: 5,
        description: "قابل دفن مستقیم، سایز 1/0-4/0 AWG، عایق XLPE"
    },
    {
        id: "5",
        title: "کابل ترانکینگ TC",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/673_3.jpg",
        price: 3.20,
        discount: 0,
        isSpecial: true,
        description: "ولتاژ 600V، 4 رشته، مقاوم در برابر نور خورشید، مناسب ترانک های برق"
    },
    {
        id: "6",
        title: "سیم هوک آپ",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/HOOK_3.JPG",
        price: 0.35,
        discount: 20,
        description: "سایز 20 AWG، عایق PVC، مناسب سیم کشی داخلی"
    },
    {
        id: "7",
        title: "کابل سرویس SER",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/SER.jpg",
        price: 1.80,
        discount: 0,
        description: "سایز 2-2-2-4 AWG، آلومینیومی، مناسب ورودی سرویس مسکونی"
    },
    {
        id: "8",
        title: "کابل جوشکاری",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/15591_2.jpg",
        price: 2.75,
        discount: 12,
        description: "سایز 2/0 AWG، عایق EPDM، انعطاف پذیری فوق العاده"
    },
    {
        id: "9",
        title: "کابل زیرزمینی UF-B",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/5629_3.jpg",
        price: 0.95,
        discount: 8,
        description: "سایز 12/2 AWG، قابل دفن مستقیم، مقاوم در برابر نور خورشید"
    },
    {
        id: "10",
        title: "سیم اتصال زمین مسی",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/14230_1.png",
        price: 1.10,
        discount: 0,
        description: "سایز 4 AWG یکپارچه، مناسب برای الکترودهای اتصال زمین"
    },
    {
        id: "11",
        title: "سیم ماشین ابزار MTW",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/MTW_-_MASTER.jpg",
        price: 0.60,
        discount: 25,
        description: "سایز 16 AWG، ولتاژ 600V، مقاوم به روغن، مناسب تابلوهای کنترل"
    },
    {
        id: "12",
        title: "کانال انعطاف پذیر Liquidtight",
        imageUrl: "https://www.wireandcableyourway.com/media/wysiwyg/2020-06-09_3.png",
        price: 1.25,
        discount: 0,
        description: 'سایز 3/4 اینچ، پوشش PVC، مناسب فضاهای بیرونی و مرطوب'
    },
    {
        id: "13",
        title: "کابل رومکس NM-B",
        imageUrl: "https://example.com/romex.jpg",
        price: 0.75,
        discount: 10,
        description: "سایز 12/2 AWG با سیم زمین، مناسب مدارهای انشعابی مسکونی"
    },
    {
        id: "14",
        title: "کابل کواکسیال RG6",
        imageUrl: "https://example.com/rg6.jpg",
        price: 0.45,
        discount: 0,
        description: "سه لایه شیلد، سایز 18 AWG، مناسب تلویزیون کابلی و ماهواره"
    },
    {
        id: "15",
        title: "کابل اعلام حریق",
        imageUrl: "https://example.com/fire-alarm.jpg",
        price: 1.65,
        discount: 5,
        description: "FPLR، سایز 18 AWG، مناسب سیستم های اعلام حریق"
    }
];