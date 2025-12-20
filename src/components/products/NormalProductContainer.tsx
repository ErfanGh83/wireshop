"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/lib/api/constants";
import { ImPowerCord } from "react-icons/im";
import { LuCable } from "react-icons/lu";
import { MdElectricalServices } from "react-icons/md";


type Props = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  available: boolean;
  description?: string;
  className?: string;
  discount: number | null;
  discountEndsAt?: string | Date | null;
  maxDescriptionLength?: number;
};


const NormalProductContainer = ({
  id,
  title,
  imageUrl,
  available = false,
  description = "",
  className = "",
  maxDescriptionLength = 50,
  discount,
  discountEndsAt,
}: Props) => {

  const placeholderIcons = [
    ImPowerCord,
    LuCable,
    MdElectricalServices,
  ];

  const [PlaceholderIcon] = useState(() => {
    const index = Math.floor(Math.random() * placeholderIcons.length);
    return placeholderIcons[index];
  });

  const trimDescription = (desc: string) => {
    if (desc.length <= maxDescriptionLength) return desc;
    return desc.substring(0, maxDescriptionLength) + "...";
  };

  const hasDiscount = discount !== null && discount > 0;

  const hasImage =
    typeof imageUrl === "string" && imageUrl.trim().length > 0;

  const hasActiveDiscount =
    hasDiscount && discountEndsAt && new Date(discountEndsAt) > new Date();

  const formatDiscountEnd = (date: string | Date) => {
    const d = new Date(date);
    return d.toLocaleDateString("fa-IR", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link
      href={`/product?id=${id}`}
      className={`group relative flex flex-row sm:flex-col bg-white dark:bg-gray-700 shadow-md overflow-hidden transition-all duration-300 border-[2px] border-gray-200 dark:border-slate-800 hover:shadow-xl dark:hover:border-blue-500 ${className}`}
      dir="rtl"
    >
      {/* Availability indicator */}
      {available ? (
        <div className="absolute border-[1px] rounded-br-xl bg-white dark:bg-slate-700 border-green-500 text-green-500 text-xs sm:text-sm font-thin px-2 py-1 z-[2] left-0 top-0">
          موجود
        </div>
      ) : (
        <div className="absolute border-[1px] bg-white border-red-500 text-red-500 text-xs sm:text-sm font-thin px-2 py-1 z-[2] left-0 top-0">
          ناموجود
        </div>
      )}

      {hasDiscount && (
        <div className="absolute right-0 top-0 z-[2] flex flex-col items-end">
          {/* Discount percent */}
          <div className="bg-red-600 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-bl-xl">
            {discount}% تخفیف
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-32 h-32 sm:w-full sm:h-48 md:h-56 lg:h-64 bg-gray-100 dark:bg-gray-600 overflow-hidden flex-shrink-0 flex items-center justify-center">
        {hasImage ? (
          <Image
            crossOrigin={
              imageUrl.startsWith("/uploads") ? "anonymous" : undefined
            }
            src={
              imageUrl.startsWith("/uploads")
                ? BASE_URL + imageUrl
                : imageUrl
            }
            alt={title || "image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-300">
            <PlaceholderIcon size={48} />
          </div>
        )}

        {hasActiveDiscount && (
          <div className="absolute w-full bottom-0 z-[2]">
            <div className="bg-red-100 text-red-700 text-[10px] sm:text-xs px-2 py-0.5 text-center border border-red-300">
              مهلت تخفیف تا {formatDiscountEnd(discountEndsAt)}
            </div>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-3 sm:p-4 bg-white dark:bg-slate-800 pl-5 sm:pl-4 flex-grow">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2 min-h-[2.8em]">
            {title}
          </h3>

          {description && (
            <p className="block text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
              {trimDescription(description)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NormalProductContainer;
