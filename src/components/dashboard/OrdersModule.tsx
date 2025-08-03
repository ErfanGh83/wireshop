import { Order } from "@/types/order";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoReceipt } from "react-icons/io5";
// import { cancelledOrders, completedOrders, inProgressOrders } from "./exampleOrders";
import Image from "next/image";
import Link from "next/link";


type Props = {
    tab: "in_progress" | "completed" | "cancelled";
    setModuleIsOpen: Dispatch<SetStateAction<boolean>>;
};

const statusLabels: Record<"in_progress" | "completed" | "cancelled", string> = {
    in_progress: "جاری",
    completed: "تکمیل شده",
    cancelled: "مرجوع شده",
};

const OrdersModule = ({ tab, setModuleIsOpen }: Props) => {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [currentTab, setCurrentTab] = useState<
        "in_progress" | "completed" | "cancelled"
    >(tab);

    const handleCloseModule = () => {
        setModuleIsOpen(false);
    };

    // Sync tab from parent
    useEffect(() => {
        setCurrentTab(tab);
    }, [tab]);

    // Load mock orders instead of API
    useEffect(() => {
        // if (currentTab === "in_progress") {
        //     setOrders(inProgressOrders);
        // } else if (currentTab === "completed") {
        //     setOrders(completedOrders);
        // } else if (currentTab === "cancelled") {
        //     setOrders(cancelledOrders);
        // }
        //api call
        setOrders([])
    }, [currentTab]);

    return (
        <div
            dir="rtl"
            className="w-screen h-screen sm:h-[500px] sm:w-[500px] md:w-[600px] xl:w-[700px] xl:h-[600px] relative p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col"
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 shrink-0">
                <h2 className="text-xl font-semibold mx-auto">سفارش‌های من</h2>
                <button
                    onClick={handleCloseModule}
                    className="absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500"
                >
                    <FaXmark size={20} />
                </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 shrink-0">
                {(["in_progress", "completed", "cancelled"] as const).map((status) => (
                    <button
                        key={status}
                        className={`px-3 py-1 cursor-pointer rounded text-sm ${currentTab === status
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                        onClick={() => setCurrentTab(status)}
                    >
                        {statusLabels[status]}
                    </button>
                ))}
            </div>

            {/* Orders List (Scrollable) */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                {orders === null ? (
                    <p className="text-gray-500">در حال بارگذاری سفارش‌ها...</p>
                ) : orders.length === 0 ? (
                    <div className="h-full py-16 flex flex-col items-center justify-center text-8xl text-gray-600">
                        <IoReceipt />
                        <p className="text-xl">سفارشی یافت نشد</p>
                    </div>
                ) : (
                    orders.map((order) => (
                        <div
                            key={order.id}
                            className="p-3 rounded-lg shadow-md border-[1px] border-gray-300 dark:border-gray-700"
                        >
                            <div className="flex justify-between">
                                <span className="font-medium">سفارش شماره {order.id}</span>
                                <span className="text-sm text-gray-500">
                                    {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                                </span>
                            </div>
                            <div className="mt-2 space-y-1">
                                {order.products.map((product, i) => (
                                    <Link
                                        href={`/product?id=${product.id}`}
                                        key={i}
                                        className="flex justify-between items-center text-sm hover:bg-blue-50 dark:hover:bg-gray-800 py-2 px-1 rounded transition-colors"
                                    >
                                        {/* Product Image + Title */}
                                        <div className="w-fit flex flex-row items-center gap-2">
                                            <Image
                                                src={product.thumbnail || "/images/placeholder.png"}
                                                alt={product.id}
                                                width={20}
                                                height={20}
                                                className="rounded object-cover border border-gray-300 dark:border-gray-700"
                                            />
                                            <span className="truncate max-w-[180px]">
                                                {product.title} × {product.quantity}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <span>
                                            {(product.unitPrice * product.quantity).toLocaleString("fa-IR")}{" "}
                                            تومان
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            <hr className="w-5/6 text-gray-300 mx-auto my-2" />
                            <div className="mt-2 font-semibold">
                                جمع کل: {order.totalPrice.toLocaleString("fa-IR")} تومان
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );

};

export default OrdersModule;