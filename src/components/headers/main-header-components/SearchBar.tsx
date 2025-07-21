import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {

    return (
        <div
            className='w-[300px] h-10 flex flex-row-reverse bg-blue-200 rounded-sm m-auto overflow-hidden'
        >
            <div>
                <input 
                    className='w-[260px] h-10 px-1 focus:outline-none text-gray-800 placeholder:text-blue-400'
                    placeholder='جستجو'
                />
            </div>

            <button
                className='size-full flex items-center justify-center text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors'
            >
                <BiSearch size={24}/>
            </button>
        </div>
    )
}

export default SearchBar