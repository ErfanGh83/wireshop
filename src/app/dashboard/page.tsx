"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAuthUser } from "@/components/auth/useAuthUser";
import UserShipmentContainer from "@/components/dashboard/UserShipmentsContainer";
import { MdDoneAll } from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { BiEdit, BiUser, BiWallet } from "react-icons/bi";
import UserInfoContainer from "@/components/dashboard/UserInfoContainer";
import { BsStars } from "react-icons/bs";
import { GiGoldBar } from "react-icons/gi";

export default function DashboardPage() {
    const { userInfo, isLoggedIn, loading } = useAuthUser();

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
            <div className="size-full flex flex-col min-h-screen pt-12 bg-white dark:bg-slate-700 text-black dark:text-white">
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
                        "
                    >
                        لطفا ابتدا وارد حساب کاربری خود شوید
                    </Link>
                ) : (
                    <div className="size-full max-w-[2000px] mx-auto px-36 h-fit flex flex-col items-center justify-center gap-4">
                        <div
                            className="w-4/5 h-[200px] flex flex-col px-8"
                        >
                            <div
                                className="size-full flex flex-col p-4 border-[1px] gap-2 border-gray-300 rounded-md"
                            >
                                <div
                                    className="w-full h-fit flex flex-row-reverse justify-end"
                                >
                                    <Link href={'/edit-user'} className="mx-2 mt-1">
                                        <BiEdit className="text-3xl text-blue-500" />
                                    </Link>

                                    <div
                                        className="size-fit flex flex-row-reverse gap-2 justify-center"
                                    >
                                        <div
                                            className="flex flex-col justify-center"
                                        >
                                            <div
                                                className="w-fit h-fit flex flex-row"
                                            >
                                                <p className="text-xl font-medium ml-2">نام کاربری:</p>
                                                <p className="text-xl font-semibold">{userInfo ? 'user_' + userInfo.user.id.split('-')[0] : ''}</p>
                                            </div>

                                            <div
                                                className="w-fit h-fit flex flex-row"
                                            >
                                                <p className="text-lg font-light text-gray-700 ml-2">شماره تلفن:</p>
                                                <p className="text-lg text-gray-700">{userInfo ? '0' + userInfo.user.phone.slice(3) : ''}</p>
                                            </div>
                                        </div>

                                        <div
                                            className="size-fit rounded-full border-5 p-1 text-5xl border-gray-700 text-gray-700"
                                        >
                                            <BiUser />
                                        </div>
                                    </div>
                                </div>



                                <div className="size-full flex flex-row gap-2">
                                    <UserInfoContainer
                                        title={'کیف پول'}
                                        link="/refunded-orders"
                                        description={"موجودی: 50،000 ریال"}
                                        icon={<BiWallet />}
                                        className={"text-black"}
                                    />
                                    <UserInfoContainer
                                        title={'امتیازات'}
                                        link="/points"
                                        description={"مقدار: 1000 امتیاز"}
                                        icon={<BsStars />}
                                        className={"text-black"}
                                    />
                                    <UserInfoContainer
                                        title={'اشتراک وایرپلاس'}
                                        link="/refunded-orders"
                                        description={"در حال حاضر اشتراکی ندارید"}
                                        icon={<GiGoldBar />}
                                        className={"text-yellow-500"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="w-4/5 h-[200px] flex flex-row-reverse gap-8 p-4 px-8"
                        >
                            <UserShipmentContainer title={'سفارشات مرجوع شده'} link="/refunded-orders" icon={<RiRefund2Line />} className={"text-red-600"} />
                            <UserShipmentContainer title={'سفارشات جاری'} link="/current-orders" icon={<FaShippingFast />} className={"text-blue-500"} />
                            <UserShipmentContainer title={'سفارشات انجام شده'} link="/completed-orders" icon={<MdDoneAll />} className={"text-green-500"} />
                        </div>
                    </div>
                )}
            </div>
        </MainLayout >
    );
}
