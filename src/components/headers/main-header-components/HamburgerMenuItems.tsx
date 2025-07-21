import { BiHome } from "react-icons/bi"
import { BsInstagram, BsTelegram } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { HiOutlineViewGrid } from "react-icons/hi"
import { MdDiscount } from "react-icons/md"

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