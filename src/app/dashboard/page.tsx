"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAuthUser } from "@/components/auth/useAuthUser";
import UserShipmentContainer from "@/components/dashboard/UserShipmentsContainer";
import { MdDoneAll } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { FaMap, FaShippingFast } from "react-icons/fa";
import { BiBell, BiEdit, BiHeart, BiUser, BiWallet } from "react-icons/bi";
import UserInfoContainer from "@/components/dashboard/UserInfoContainer";
import { BsStars } from "react-icons/bs";
import UserRelatedLists from "@/components/dashboard/UserRelatedLIsts";
import { CgShoppingCart } from "react-icons/cg";
import { logout } from "@/lib/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DashboardPage() {
    const { userInfo, isLoggedIn, loading } = useAuthUser();
    const router = useRouter()

    const handleLogout = () => {
        logout()
        toast.warn('از حساب خارج شدید')
        router.push('/')
    }

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-lg">
                    Loading...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="w-screen flex flex-col h-full py-6 sm:pt-12 items-center justify-start sm:pt-0 bg-white dark:bg-slate-800 text-black dark:text-white overflow-y-scroll">
                {!isLoggedIn ? (
                    <Link
                        href={"/auth"}
                        className="
                        w-fit px-4 py-2 text-base
                        sm:px-6 sm:py-3 sm:text-lg
                        md:px-8 md:py-4 md:text-2xl
                        lg:text-3xl xl:text-4xl
                        font-semibold border-2
                        bg-blue-100 dark:bg-slate-600
                        hover:border-blue-400 hover:text-blue-400
                        dark:hover:text-purple-400 dark:hover:border-purple-400
                        transition-colors rounded-lg
                        text-center
                        m-auto
                        pb-24
                        "
                    >
                        لطفا ابتدا وارد حساب کاربری خود شوید
                    </Link>
                ) : (
                    <div className="h-fit max-w-[2000px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col items-center justify-center gap-4">
                        {/* Main User Card */}
                        <div className="w-full lg:w-4/5 h-auto flex flex-col px-2 sm:px-4 md:px-8">
                            <div className="size-full flex flex-col p-2 sm:p-4 border-[1px] gap-2 border-gray-300 dark:border-none bg-white dark:bg-slate-700 rounded-md">
                                {/* User Header Section */}
                                <div className="w-full h-fit flex flex-col sm:flex-rowitems-center justify-between gap-4">
                                    <div className="w-full h-fit flex flex-col-reverse sm:flex-row-reverse items-center sm:items-start sm:justify-end gap-2 sm:gap-4">
                                        <Link href={'/edit-user'} className="sm:mx-2 mt-1">
                                            <BiEdit className="text-2xl sm:text-3xl text-blue-500" />
                                        </Link>

                                        <div className="size-fit flex flex-col-reverse sm:flex-row-reverse items-center gap-2 sm:gap-4">
                                            <div className="flex flex-col items-center sm:items-start">
                                                <div className="w-fit h-fit flex flex-row">
                                                    <p className="text-base sm:text-xl font-medium">نام کاربری:</p>
                                                    <p className="text-base sm:text-xl font-semibold">{userInfo ? 'user_' + userInfo.user.id.split('-')[0] : ''}</p>
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
                                        className="w-full sm:w-48 py-1 px-2 rounded-md border-[1px] border-gray-600 hover:border-transparent dark:bg-slate-600 hover:bg-red-500 cursor-pointer hover:text-white transition-colors text-sm sm:text-base"
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
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                    <UserInfoContainer
                                        title={'امتیازات'}
                                        link="/points"
                                        description={"مقدار: 1000 امتیاز"}
                                        icon={<BsStars />}
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                    <UserInfoContainer
                                        title={'آدرس ها'}
                                        link="/addresses"
                                        description={"آدرس فعلی: تهران، میدان رسالت ..."}
                                        icon={<FaMap />}
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                </div>

                                <hr className="text-gray-700 dark:text-slate-400 my-2" />

                                {/* User Lists */}
                                <div className="w-full flex flex-col sm:flex-row gap-2">
                                    <UserRelatedLists
                                        title={'لیست علاقه مندی ها'}
                                        link="/dashboard/favorites"
                                        icon={<BiHeart />}
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                    <UserRelatedLists
                                        title={'سبد خرید'}
                                        link="/dashboard/cart"
                                        icon={<CgShoppingCart />}
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                    <UserRelatedLists
                                        title={'اعلان ها'}
                                        link="/addresses"
                                        icon={<BiBell />}
                                        className={"text-black bg-white dark:bg-slate-600 dark:text-white"}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Orders Section */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-8">سفارشات من</h2>
                        <div className="w-full lg:w-4/5 h-fit flex flex-col sm:flex-row-reverse gap-4 sm:gap-8 pt-2 px-2 sm:px-8">
                            <UserShipmentContainer 
                                title={'سفارشات مرجوع شده'} 
                                link="/refunded-orders" 
                                icon={<RiRefund2Line />} 
                                className={"text-red-600 dark:text-red-500 bg-white dark:bg-slate-600 dark:hover:border-red-500"} 
                            />
                            <UserShipmentContainer 
                                title={'سفارشات جاری'} 
                                link="/current-orders" 
                                icon={<FaShippingFast />} 
                                className={"text-blue-500 bg-white dark:bg-slate-600 dark:hover:border-blue-500"} 
                            />
                            <UserShipmentContainer 
                                title={'سفارشات انجام شده'} 
                                link="/completed-orders" 
                                icon={<MdDoneAll />} 
                                className={"text-green-500 bg-white dark:bg-slate-600 dark:hover:border-green-500"} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}