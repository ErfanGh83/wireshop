import React, { Dispatch, SetStateAction } from 'react'
import ProfileFormWrapper from '../auth/ProfileFormWrapper'
import { FaXmark } from 'react-icons/fa6'


type Props = {
    refetch: () => void
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}


const AddressModal = ({ setModalIsOpen, refetch }: Props) => {

    const handleCloseModal = () => {
        setModalIsOpen(false)
    }

    return (
        <div className="w-screen h-screen sm:h-[700px] sm:w-[500px] md:w-[600px] xl:w-[700px] bg-white dark:bg-slate-800  text-black dark:text-white rounded-md flex flex-col items-center justify-start pt-16 sm:pt-0 sm:justify-center relative">
            <button
                onClick={handleCloseModal}
                className="size-fit absolute top-[5%] right-[3%] sm:top-0 sm:right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
            >
                <FaXmark size={20} />
            </button>

            <ProfileFormWrapper refetch={refetch} setModalIsOpen={setModalIsOpen} />
        </div>
    );
};

export default AddressModal