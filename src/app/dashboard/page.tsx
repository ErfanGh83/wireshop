"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAuthUser } from "@/components/auth/useAuthUser";
import UserShipmentContainer from "@/components/dashboard/UserShipmentsContainer";
import { BiEdit, BiSupport, BiUser } from "react-icons/bi";
import { CgShoppingBag, CgShoppingCart } from "react-icons/cg";
import { logout } from "@/lib/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import AddressModal from "@/components/dashboard/AddressModal"
import OrdersModal from "@/components/dashboard/OrdersModal"
import ProfileFormModal from "@/components/dashboard/ProfileFormModal"
import ConfirmModal from "@/components/dashboard/ConfirmModal"
import UserInfoContainer from "@/components/dashboard/UserInfoContainer";
import { FaMap } from "react-icons/fa";
import ModalWrapper from "@/components/ModalWrapper";
import { RiAdminLine } from "react-icons/ri";

export default function DashboardPage() {
    const { userInfo, isLoggedIn, loading, fullUserInfo, refetch } = useAuthUser();
    const router = useRouter();

    const [addressesModalIsOpen, setAddressesModalIsOpen] = useState(false);
    const [ordersModalIsOpen, setOrdersModalIsOpen] = useState(false);
    const [profileFormIsOpen, setProfileFormIsOpen] = useState(false);
    const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

    const handleLogout = () => {
        logout();
        toast.warn("از حساب خارج شدید");
        router.push("/");
    };

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-screen text-lg bg-white dark:bg-slate-900 text-black dark:text-white">
                    در حال بارگذاری...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <>
                {/* Modals */}
                <ModalWrapper isOpen={addressesModalIsOpen} onClose={() => setAddressesModalIsOpen(false)}>
                    <AddressModal fetchedAddresses={fullUserInfo?.addresses} setModalIsOpen={setAddressesModalIsOpen} />
                </ModalWrapper>

                <ModalWrapper isOpen={profileFormIsOpen} onClose={() => setProfileFormIsOpen(false)}>
                    <ProfileFormModal refetch={refetch} setModalIsOpen={setProfileFormIsOpen} />
                </ModalWrapper>

                <ModalWrapper isOpen={ordersModalIsOpen} onClose={() => setOrdersModalIsOpen(false)}>
                    <OrdersModal setModalIsOpen={setOrdersModalIsOpen} tab="sending" />
                </ModalWrapper>

                <ModalWrapper isOpen={confirmModalIsOpen} onClose={() => setConfirmModalIsOpen(false)}>
                    <ConfirmModal
                        onConfirm={handleLogout}
                        onCancel={() => setConfirmModalIsOpen(false)}
                        title="خروج از حساب کاربری"
                        description="آیا مطمئن هستید که می‌خواهید از حساب خود خارج شوید؟"
                    />
                </ModalWrapper>

                {/* Main Content */}
                <div
                    dir="ltr"
                    className="w-full min-h-screen py-6 sm:pt-12 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white overflow-y-auto"
                >
                    {!isLoggedIn? (
                        <div className="flex justify-center items-center h-full">
                            <Link
                                href="/auth"
                                className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-semibold border-2 border-gray-300 shadow-md rounded-lg hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-300 transition-all"
                            >
                                لطفا ابتدا وارد حساب کاربری خود شوید
                            </Link>
                        </div>
                    ) : (
                        <div
                            dir="rtl"
                            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 flex flex-col-reverse lg:flex-row gap-6"
                        >
                            {/* Main User Info */}
                            <div className="flex-1 order-2 lg:order-1">
                                <div className="p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                                    {/* User Header */}
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <div className="flex flex-row-reverse items-center gap-4">
                                            <div className="flex flex-col items-center sm:items-start">
                                                <p className="text-lg font-medium">
                                                    نام کاربری:{" "}
                                                    <span className="font-semibold">
                                                        {userInfo ? "user_" + userInfo.user.id.split("-")[0] : ""}
                                                    </span>
                                                </p>
                                                <p className="text-gray-600 dark:text-gray-300">
                                                    {fullUserInfo?.firstname} {fullUserInfo?.lastname}
                                                </p>
                                                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                                                    شماره تلفن: {userInfo ? "0" + userInfo.user.phone.slice(3) : ""}
                                                </p>
                                            </div>
                                            <div className="rounded-full bg-gray-100 dark:bg-slate-600 p-3 text-4xl text-gray-700 dark:text-gray-300">
                                                <BiUser />
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={() => setProfileFormIsOpen(true)}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                                            >
                                                <BiEdit /> ویرایش
                                            </button>
                                            <button
                                                onClick={() => setConfirmModalIsOpen(true)}
                                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-red-500 hover:text-white transition"
                                            >
                                                خروج
                                            </button>
                                        </div>
                                    </div>

                                    {/* User Info Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                        <UserInfoContainer
                                            title="آدرس ها"
                                            description="انتخاب یا افزودن آدرس..."
                                            icon={<FaMap />}
                                            className="cursor-pointer bg-gray-50 dark:bg-slate-700 hover:shadow-xl dark:hover:bg-slate-800 transition"
                                            setModalIsOpen={setAddressesModalIsOpen}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Actions */}
                            <div className="w-full sm:w-64 flex flex-row sm:flex-col gap-4 order-1 lg:order-2">
                                <UserShipmentContainer
                                    title="سبد خرید"
                                    icon={<CgShoppingCart />}
                                    onClick={() => router.push('/cart')}
                                    className="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition p-4"
                                />
                                <UserShipmentContainer
                                    title="لیست سفارشات"
                                    icon={<CgShoppingBag />}
                                    onClick={() => setOrdersModalIsOpen(true)}
                                    className="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition p-4"
                                />
                                {
                                    userInfo?.user.role === 'admin' &&
                                    <UserShipmentContainer
                                        title="ورود به داشبورد ادمین"
                                        icon={<RiAdminLine />}
                                        onClick={() => router.push('/admin')}
                                        className="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition p-4"
                                    />
                                }

                                {
                                    (userInfo?.user.role === 'support' || userInfo?.user.role === 'admin')  &&
                                    <UserShipmentContainer
                                        title="ورود به داشبورد ساپورت"
                                        icon={<BiSupport />}
                                        onClick={() => router.push('/support')}
                                        className="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition p-4"
                                    />
                                }
                            </div>
                        </div>
                    )}
                </div>
            </>
        </MainLayout>
    );
}
