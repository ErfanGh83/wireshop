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
        backgroundImageUrl: 'https://image.api.playstation.com/pr/bam-art/172/399/ec126154-9deb-4e47-86d6-a91e4c3bc9df.jpg?w=5000&thumb=false',
        childrenImages:
            [
                'https://image.api.playstation.com/pr/bam-art/201/480/34f23074-5b9f-43c4-8307-dd1c83d120ff.png?w=620&thumb=false',
                'https://image.api.playstation.com/pr/bam-art/199/969/28570d9a-aa71-439f-8d89-dd0c25736c87.png?w=780&thumb=false'
            ],
        link: "/"
    },
    {
        backgroundImageUrl: 'https://image.api.playstation.com/pr/bam-art/172/156/d827e0cf-4194-4630-973a-d51513d17644.jpg?w=5000&thumb=false',
        childrenImages:
            [
                'https://image.api.playstation.com/pr/bam-art/172/156/ee229064-5f00-49c6-99ff-cac057cc9f30.png?w=620&thumb=false',
                'https://image.api.playstation.com/pr/bam-art/172/156/d50823e4-c24b-4c2b-ba7a-14b24c7b3d84.png?w=780&thumb=false'
            ],
        link: "/"
    },
    {
        backgroundImageUrl: 'https://image.api.playstation.com/pr/bam-art/180/147/bdeccf3a-b312-4b4c-9f69-4695c672427a.jpg?w=5000&thumb=false',
        childrenImages:
            [
                'https://image.api.playstation.com/pr/bam-art/180/247/6132614d-7ce1-4a70-8975-563263efbfd0.png?w=620&thumb=false'
            ],
        link: "/"
    }
]