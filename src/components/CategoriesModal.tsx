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

    if (!isOpen) return null;

    const rect = equipmentRef.current?.getBoundingClientRect();

    return (
        <>
            {/* MAIN MODAL */}
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
                <ul className="p-2 space-y-1">
                    {modalCategories.map((category) => (
                        <li key={category.id}>
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

                    {/* تجهیزات */}
                    <li ref={equipmentRef}>
                        <button
                            type="button"
                            onClick={() => setIsEquipmentOpen((v) => !v)}
                            className={`
                                w-full px-4 py-2 rounded-lg
                                text-sm font-medium
                                transition-colors
                                flex items-center justify-between ${ isEquipmentOpen ? "bg-blue-400 text-white dark:bg-slate-500" : "hover:bg-blue-50 dark:hover:bg-gray-800"}
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
        </>
    );
};

export default CategoriesModal;