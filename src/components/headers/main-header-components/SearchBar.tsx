"use client";

import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams, useRouter } from 'next/navigation';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get `q` from URL and set to input
    const searchedString = searchParams.get("q") || "";
    const [search, setSearch] = useState(searchedString);

    // Sync with URL if it changes
    useEffect(() => {
        setSearch(searchedString);
    }, [searchedString]);

    const handleSearch = () => {
        if (search.trim()) {
            router.push(`/products?q=${encodeURIComponent(search.trim())}`);
        } else {
            router.push(`/products`);
        }
    };

    return (
        <div
            className={`container group w-[320px] min-[460px]:w-[260px] sm:w-[360px] md:w-[460px] xl:w-[600px] h-8 md:h-10 flex flex-row-reverse border-2 border-transparent bg-blue-100 dark:bg-slate-500 rounded-sm m-auto overflow-hidden  
                ${isFocused ? 'glow-border' : ''}`}
            onBlur={() => setIsFocused(false)}
        >
            <div>
                <input
                    className="w-[280px] min-[460px]:w-[220px] sm:w-[320px] md:w-[420px] xl:w-[560px] h-10 px-1 pb-3 md:pb-2 focus:outline-none text-gray-800 dark:text-gray-100 placeholder:text-blue-400"
                    placeholder="جستجو"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    onFocus={() => setIsFocused(true)}
                />
            </div>
            <button
                onClick={handleSearch}
                className="size-full flex items-center justify-center text-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:text-purple-200 transition-colors"
            >
                <BiSearch size={24} />
            </button>
        </div>
    );
};

export default SearchBar;
