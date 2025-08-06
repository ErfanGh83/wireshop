import React, { Dispatch, SetStateAction } from 'react'
import { Address } from '@/types/address'
import ProfileFormWrapper from '../auth/ProfileFormWrapper'
import { FaXmark } from 'react-icons/fa6'


type Props = {
    fetchedAddresses?: Address[]
    setModuleIsOpen: Dispatch<SetStateAction<boolean>>
}


const AddressModule = ({ setModuleIsOpen }: Props) => {

    const handleCloseModule = () => {
        setModuleIsOpen(false)
    }

    return (
        <div className="w-screen h-screen sm:h-[700px] sm:w-[500px] md:w-[600px] xl:w-[700px] bg-white rounded-md flex items-center justify-center relative">
            <button
                onClick={handleCloseModule}
                className="size-fit absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
            >
                <FaXmark size={20} />
            </button>

            <ProfileFormWrapper setModuleIsOpen={setModuleIsOpen} />
        </div>
    );
};

export default AddressModule