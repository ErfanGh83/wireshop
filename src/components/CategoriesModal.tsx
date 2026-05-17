'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { equipmentCategories, modalCategories } from './products/filters/filters/filtersList';

type Props = {
    isOpen: boolean;
};

const CategoriesModal = ({ isOpen }: Props) => {
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
    const equipmentRef = useRef<HTMLLIElement | null>(null);
    const [hoveredCategory, setHoveredCategory] =
        useState<(typeof modalCategories)[number] | null>(null);

    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    if (!isOpen) return null;

    const rect = equipmentRef.current?.getBoundingClientRect();


    return (
        <>
            <div
                className="
                    absolute top-full right-0 mt-2
                    w-72 max-h-[420px]
                    overflow-y-auto
                    rounded-xl border
                    bg-white dark:bg-gray-900
                    shadow-xl z-50
                    text-black dark:text-white
                "
            >
                <ul className="space-y-1">
                    {modalCategories.map((category) => (
                        <li
                            key={category.id}
                            onMouseEnter={(e) => {
                                if (closeTimeoutRef.current) {
                                    clearTimeout(closeTimeoutRef.current);
                                }

                                if (category.attributes?.length) {
                                    setHoveredCategory(category);
                                    setAnchorRect(
                                        (e.currentTarget as HTMLLIElement).getBoundingClientRect()
                                    );
                                }
                            }}

                            onMouseLeave={() => {
                                closeTimeoutRef.current = setTimeout(() => {
                                    setHoveredCategory(null);
                                    setAnchorRect(null);
                                }, 120); // small delay = smooth UX
                            }}
                            className="relative"
                        >
                            <Link
                                href={`/products?c=${category.id}`}
                                className="
                                px-4 py-2 rounded-lg
                                text-sm font-medium
                                hover:bg-blue-50 dark:hover:bg-gray-800
                                transition-colors
                                flex justify-between items-center
                                "
                            >
                                {category.name}
                                {category.attributes?.length && (
                                    <span className="text-xs opacity-60">◀</span>
                                )}
                            </Link>
                        </li>
                    ))}

                    {/* تجهیزات */}
                    <li ref={equipmentRef}>
                        <button
                            type="button"
                            onClick={() => setIsEquipmentOpen((v) => !v)}
                            className={`
                                w-full px-4 py-2 rounded-lg
                                text-sm font-medium
                                transition-colors
                                flex items-center justify-between ${isEquipmentOpen ? "bg-blue-400 text-white dark:bg-slate-500" : "hover:bg-blue-50 dark:hover:bg-gray-800"}
                            `}
                        >
                            تجهیزات
                            <span className="text-xs opacity-60 rotate-180">▶</span>
                        </button>
                    </li>
                </ul>
            </div>

            {/* SUB MODAL (PORTAL) */}
            {isEquipmentOpen &&
                rect &&
                createPortal(
                    <div
                        style={{
                            position: 'fixed',
                            top: rect.top,
                            left: rect.left - 260, // opens to the left
                        }}
                        className="
                            w-64 max-h-[360px]
                            overflow-y-auto
                            rounded-xl border
                            bg-white dark:bg-gray-900
                            shadow-xl z-[999]
                            text-black dark:text-white
                        "
                    >
                        <ul className="p-2 spacce-y-1">
                            {equipmentCategories.map((category) => (
                                <li key={`equipment-${category.id}`}>
                                    <Link
                                        href={`/products?c=${category.id}`}
                                        className="
                                            block px-4 py-2 rounded-lg
                                            text-sm font-medium
                                            hover:bg-blue-50 dark:hover:bg-gray-800
                                            transition-colors
                                        "
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>,
                    document.body
                )}

            {hoveredCategory &&
                anchorRect &&
                createPortal(
                    <div
                        style={{
                            position: 'fixed',
                            top: anchorRect.top,
                            left: anchorRect.left - 280,
                        }}
                        className="
                                w-72 max-h-[420px]
                                overflow-y-auto
                                rounded-xl border
                                bg-white dark:bg-gray-900
                                shadow-xl z-[999]
                                text-black dark:text-white
                            "
                        onMouseEnter={() => {
                            if (closeTimeoutRef.current) {
                                clearTimeout(closeTimeoutRef.current);
                            }
                        }}
                        onMouseLeave={() => {
                            closeTimeoutRef.current = setTimeout(() => {
                                setHoveredCategory(null);
                                setAnchorRect(null);
                            }, 120);
                        }}
                    >
                        <div className="p-3 space-y-3">
                            {hoveredCategory.attributes?.map((attr) => (
                                <div key={attr.id}>
                                    <div className="text-xs font-bold opacity-70 mb-1">
                                        {attr.name}
                                    </div>

                                    <ul className="space-y-1">
                                        {attr.values.map((value) => (
                                            <li key={value}>
                                                <Link
                                                    href={`/products?c=${hoveredCategory.id}&atr=${attr.id}&v=${encodeURIComponent(
                                                        value
                                                    )}`}
                                                    className="
                                                        block px-3 py-1.5 rounded-md
                                                        text-sm
                                                        hover:bg-blue-50 dark:hover:bg-gray-800
                                                        transition-colors
                                                        "
                                                >
                                                    {value}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default CategoriesModal;