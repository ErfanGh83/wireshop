"use client"

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <div
            className={`container group w-[260px] sm:w-[360px] md:w-[460px] xl:w-[600px] h-8 md:h-10 flex flex-row-reverse border-2 border-transparent bg-blue-100 rounded-sm m-auto overflow-hidden focus:glow-border 
                ${isFocused? 'glow-border' : ''}`}
            onBlur={() => setIsFocused(false)}
        >
            <div>
                <input
                    className="w-[220px] sm:w-[320px] md:w-[420px] xl:w-[560px] h-10 px-1 pb-3 md:pb-2 focus:outline-none text-gray-800 placeholder:text-blue-400"
                    placeholder="جستجو"
                    onFocus={() => setIsFocused(true)}
                />
            </div>
            <button className="size-full flex items-center justify-center text-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">
                <BiSearch size={24} />
            </button>
        </div>
    )
}

export default SearchBar