'use client';

import Link from 'next/link';
import React from 'react';
import { newCategories } from './products/filters/filters/filtersList';

type Props = {
    isOpen: boolean;
};

const CategoriesModal = ({ isOpen }: Props) => {
    if (!isOpen) return null;

    return (
        <div
            className="
        absolute top-full right-0 mt-2 text-black dark:text-white 
        w-72 max-h-[420px] overflow-y-auto
        rounded-xl border bg-white dark:bg-gray-900
        shadow-xl z-50
      "
        >
            <ul className="p-2 space-y-1">
                {newCategories.map((category) => (
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
            </ul>
        </div>
    );
};

export default CategoriesModal;
