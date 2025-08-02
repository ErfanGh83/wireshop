import React, { Dispatch, SetStateAction } from 'react'
import { FaXmark } from 'react-icons/fa6'

type Props = {
    setModuleIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddressModule = ({ setModuleIsOpen }: Props) => {

    const handleCloseModule = () => {
        setModuleIsOpen(false)
    }

    return (
        <div
            className='size-3/4 relative rounded-md overflow-hidden bg-white'
        >
            <button
                onClick={handleCloseModule}
                className='size-fit absolute top-0 right-0 p-4 cursor-pointer'
            >
                <FaXmark size={24}/>
            </button>
        </div>
    )
}

export default AddressModule