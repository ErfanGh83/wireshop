"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAuthUser } from "@/components/auth/useAuthUser";
import UserShipmentContainer from "@/components/dashboard/UserShipmentsContainer";
import { FaMap } from "react-icons/fa";
import { BiBell, BiEdit, BiHeart, BiUser, BiWallet } from "react-icons/bi";
import UserInfoContainer from "@/components/dashboard/UserInfoContainer";
import { BsStars } from "react-icons/bs";
import UserRelatedLists from "@/components/dashboard/UserRelatedLIsts";
import { CgShoppingBag, CgShoppingCart } from "react-icons/cg";
import { logout } from "@/lib/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import AddressModule from "@/components/dashboard/AddressModule";
import { AnimatePresence, motion } from "framer-motion";
import OrdersModule from "@/components/dashboard/OrdersModule";
import BigShoppingCartModule from "@/components/headers/main-header-components/BigShoppingCartModule";
import ProfileFormModule from "@/components/dashboard/ProfileFormModule";

export default function DashboardPage() {
    const { userInfo, isLoggedIn, loading, fullUserInfo, refetch } = useAuthUser();
    const router = useRouter()
    const [addressesModuleIsOpen, setAddressesModuleIsOpen] = useState(false)
    const [ordersModuleIsOpen, setOrdersModuleIsOpen] = useState(false)
    const [cartModuleIsOpen, setCartModuleIsOpen] = useState(false)
    const [profileFormIsOpen, setProfileFormIsOpen] = useState(false)

    const handleLogout = () => {
        logout()
        toast.warn('از حساب خارج شدید')
        router.push('/')
    }

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-lg bg-white dark:bg-slate-900">
                    در حال بارگذاری...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <>
                {
                    addressesModuleIsOpen && (
                        <AnimatePresence>
                            <motion.div
                                key="address-modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/20 flex items-center justify-center"
                            >
                                <motion.div
                                    key="address-modal-content"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                >
                                    <AddressModule fetchedAddresses={fullUserInfo?.addresses} setModuleIsOpen={setAddressesModuleIsOpen} />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }

                {
                    profileFormIsOpen && (
                        <AnimatePresence>
                            <motion.div
                                key="address-modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/20 flex items-center justify-center"
                            >
                                <motion.div
                                    key="address-modal-content"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                >
                                    <ProfileFormModule refetch={refetch} setModuleIsOpen={setProfileFormIsOpen} />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }

                {
                    ordersModuleIsOpen && (
                        <AnimatePresence>
                            <motion.div
                                key="address-modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-screen h-screen fixed top-0 left-0 z-50 bg-black/20 flex items-center justify-center"
                            >
                                <motion.div
                                    key="address-modal-content"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                >
                                    <OrdersModule setModuleIsOpen={setOrdersModuleIsOpen} tab="in_progress" />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }

                {
                    cartModuleIsOpen && (
                        <AnimatePresence>
                            <motion.div
                                key="address-modal-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-screen h-screen fixed sm:absolute top-0 left-0 z-50 bg-black/20 flex items-center justify-center"
                            >
                                <motion.div
                                    key="address-modal-content"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                >
                                    <BigShoppingCartModule setModuleIsOpen={setCartModuleIsOpen} />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }

                <div className="w-screen flex flex-col h-full py-6 items-center justify-start sm:pt-12 bg-white dark:bg-slate-900 text-black dark:text-white overflow-y-scroll">
                    {!isLoggedIn ? (
                        <Link
                            href={"/auth"}
                            className="
                        w-fit px-4 py-2 text-base
                        sm:px-6 sm:py-3 sm:text-lg
                        md:px-8 md:py-4 md:text-2xl
                        lg:text-3xl xl:text-4xl
                        font-semibold border-2
                        text-black dark:text-white
                        border-gray-300 shadow-md
                        hover:text-blue-400
                        dark:hover:text-blue-400 
                        hover:shadow-blue-500 
                        hover:border-blue-300
                        transition-all rounded-lg
                        text-center
                        m-auto
                        mt-48
                        "
                        >
                            لطفا ابتدا وارد حساب کاربری خود شوید
                        </Link>
                    ) : (
                        <div className="min-h-[600px] md:min-h-0 h-fit max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 sm:pb-0 flex flex-col-reverse lg:flex-row-reverse items-center justify-end sm:justify-center gap-4">
                            {/* Main User Card - Now comes first in mobile view */}
                            <div className="w-full lg:w-11/12 h-auto flex flex-col px-2 sm:px-4 md:px-8 order-2 lg:order-1">
                                <div className="size-full flex flex-col p-2 sm:p-4 border-[1px] gap-2 border-gray-300 dark:border-none bg-blue-100/60 dark:bg-slate-700 rounded-md">
                                    {/* User Header Section */}
                                    <div className="w-full h-fit flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <div className="w-full h-fit flex flex-col-reverse sm:flex-row-reverse items-center sm:items-start sm:justify-end gap-2 sm:gap-4">
                                            <button onClick={() => setProfileFormIsOpen(true)} className="cursor-pointer">
                                                <BiEdit className="text-2xl sm:text-3xl text-blue-500 hover:text-blue-400 transition-colors" />
                                            </button>

                                            <div className="size-fit flex flex-col-reverse sm:flex-row-reverse items-center gap-2 sm:gap-4">
                                                <div className="flex flex-col items-center sm:items-start">
                                                    <div className="w-fit h-fit flex flex-row">
                                                        <p className="text-base sm:text-xl font-medium">نام کاربری:</p>
                                                        <p className="text-base sm:text-xl font-semibold">{userInfo ? 'user_' + userInfo.user.id.split('-')[0] : ''}</p>
                                                    </div>

                                                    <div className="w-fit h-fit flex flex-row gap-1 text-gray-600 font-light">
                                                        <p>{fullUserInfo?.firstname}</p>
                                                        <p>{fullUserInfo?.lastname}</p>
                                                    </div>

                                                    <div className="w-fit h-fit flex flex-row items-center">
                                                        <p className="text-sm sm:text-lg font-light text-gray-700 dark:text-white">شماره تلفن:</p>
                                                        <p className="text-sm sm:text-lg text-gray-700 dark:text-white">{userInfo ? '0' + userInfo.user.phone.slice(3) : ''}</p>
                                                    </div>
                                                </div>

                                                <div className="size-fit rounded-full border-5 p-1 text-4xl sm:text-5xl border-gray-700 dark:border-gray-500 bg-white dark:bg-slate-300 text-gray-700 dark:text-gray-600">
                                                    <BiUser />
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleLogout}
                                            className="w-48 py-1 px-2 mx-auto sm:mx-0 rounded-md border-[1px] border-gray-800 hover:border-transparent bg-white text-gray-900 dark:text-white dark:bg-slate-600 hover:bg-red-500 cursor-pointer hover:text-white transition-colors text-sm sm:text-base"
                                        >
                                            خروج از حساب کاربری
                                        </button>
                                    </div>

                                    {/* User Info Cards */}
                                    <div className="size-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                                        <UserInfoContainer
                                            title={'کیف پول'}
                                            link="/refunded-orders"
                                            description={"موجودی: 50،000 ریال"}
                                            icon={<BiWallet />}
                                            className={"text-amber-800 bg-gray-50 dark:bg-slate-600 dark:text-white"}
                                        />
                                        <UserInfoContainer
                                            title={'امتیازات'}
                                            link="/points"
                                            description={"مقدار: 1000 امتیاز"}
                                            icon={<BsStars />}
                                            className={"text-yellow-500 bg-gray-50 dark:bg-slate-600 dark:text-white"}
                                        />
                                        <UserInfoContainer
                                            title={'آدرس ها'}
                                            link="/addresses"
                                            description={"آدرس فعلی: تهران، میدان رسالت ..."}
                                            icon={<FaMap />}
                                            className={"text-blue-500 bg-gray-50 dark:bg-slate-600 dark:text-white"}
                                            setModuleIsOpen={setAddressesModuleIsOpen}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* User Lists - Now comes after user card in mobile view */}
                            <div className="w-screen h-fit sm:h-full sm:w-11/12 lg:w-[250px] bg-white dark:bg-slate-600 border border-gray-300 dark:border-transparent rounded-md flex flex-row sm:flex-col fixed z-10 sm:static bottom-0 left-0 order-1 lg:order-2 overflow-hidden">
                                <UserShipmentContainer
                                    title={'سبد خرید'}
                                    icon={<CgShoppingCart />}
                                    onClick={() => { setCartModuleIsOpen(true) }}
                                    className={"text-black bg-white dark:bg-slate-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"}
                                />
                                <UserShipmentContainer
                                    title={'لیست سفارشات'}
                                    icon={<CgShoppingBag />}
                                    onClick={() => { setOrdersModuleIsOpen(true) }}
                                    className={"text-black bg-white dark:bg-slate-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"}
                                />
                                <UserRelatedLists
                                    title={'لیست علاقه مندی ها'}
                                    link="/dashboard/favorites"
                                    icon={<BiHeart />}
                                    className={"text-black bg-white dark:bg-slate-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"}
                                />
                                <UserRelatedLists
                                    title={'اعلان ها'}
                                    link="/addresses"
                                    icon={<BiBell />}
                                    className={"text-black bg-white dark:bg-slate-600 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </>
        </MainLayout>
    );
}