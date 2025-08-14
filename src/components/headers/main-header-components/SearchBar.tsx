"use client";

import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchHistoryContainer from './SearchHistoryContainer'; // import your container

const LOCAL_STORAGE_KEY = "searchHistory";

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    // Get `q` from URL
    const searchedString = searchParams.get("q") || "";
    const [search, setSearch] = useState(searchedString);

    // Sync state with URL
    useEffect(() => {
        setSearch(searchedString);
    }, [searchedString]);

    const saveSearchToHistory = (term: string) => {
        if (!term.trim()) return;

        let history: string[] = [];
        try {
            history = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
        } catch {
            history = [];
        }

        // Remove duplicates and keep latest first
        history = [term, ...history.filter(item => item !== term)];

        // Limit to last 10 searches
        history = history.slice(0, 10);

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
    };

    const handleSearch = (term?: string) => {
        const value = term ?? search.trim();
        if (value) {
            saveSearchToHistory(value);
            router.push(`/products?q=${value}`);
        } else {
            router.push(`/products`);
        }
        setIsFocused(false);
    };

    return (
        <div className="relative w-screen md:w-2/3 lg:w-fit">
            {/* Search bar */}
            <div
                className={`container group w-full lg:w-[460px] xl:w-[600px] h-8 md:h-10 flex flex-row-reverse border-2 border-transparent bg-blue-100 dark:bg-slate-700 rounded-sm m-auto overflow-hidden  
                    ${isFocused ? 'glow-border' : ''}`}
            >
                <div className='w-full'>
                    <input
                        className="w-full lg:w-[420px] xl:w-[560px] h-10 px-1 pb-3 md:pb-2 focus:outline-none text-gray-800 dark:text-gray-100 placeholder:text-blue-400"
                        placeholder="جستجو"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        onFocus={() => setIsFocused(true)}
                    />
                </div>
                <button
                    onClick={() => handleSearch()}
                    className="w-10 h-full lg:size-full text-lg lg:text-2xl flex items-center justify-center text-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:text-purple-200 transition-colors"
                >
                    <BiSearch />
                </button>
            </div>

            {/* Show history only when focused */}
            {isFocused && (
                <>
                    <SearchHistoryContainer
                        onSelect={(value) => {
                            setSearch(value);
                            handleSearch(value);
                        }}
                    />

                    <div onClick={() => setIsFocused(false)} className='w-screen h-screen fixed top-0 left-0 z-20 bg-transparent'></div>
                </>
            )}
        </div>
    );
};

export default SearchBar;
