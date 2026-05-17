"use client"

import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const BackAndForwardButtonContainer = () => {
    const router = useRouter();

    const handleBackButtonClick = () => {
        router.back();
    }

    const handleForwardButtonClick = () => {
        router.forward();
    }

    return (
        <div className='size-fit flex flex-row items-center gap-2 mx-2'>
            <button
                onClick={handleBackButtonClick}
                className="size-8 md:size-10 flex justify-center items-center bg-white dark:bg-black border-4 border-gray-500 rounded-full hover:cursor-pointer transition-all"
                aria-label="Go back"
            >
                <BiArrowBack className="text-gray-700 dark:text-gray-400" />
            </button>

            <button
                onClick={handleForwardButtonClick}
                className="size-8 md:size-10 flex justify-center items-center bg-white dark:bg-black border-4 border-gray-500 rounded-full hover:cursor-pointer transition-all rotate-180"
                aria-label="Go forward"
            >
                <BiArrowBack className="text-gray-700 dark:text-gray-400" />
            </button>
        </div>
    )
}

export default BackAndForwardButtonContainer;