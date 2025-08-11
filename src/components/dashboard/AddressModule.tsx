import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { AnimatePresence, motion } from 'framer-motion'
import AddressFormModule from '../forms/AddressFormModule'
import { Address } from '@/types/address'
import { IoLocation } from 'react-icons/io5'

type Props = {
  addresses?: Address[]
  setModuleIsOpen: Dispatch<SetStateAction<boolean>>
}

const MAX_TITLE_LENGTH = 30;
const MAX_ADDRESS_LENGTH = 100;

const AddressModule = ({ setModuleIsOpen }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleCloseModule = () => {
    setModuleIsOpen(false);
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem('selectedAddress');
    if (savedAddress) {
      setSelectedAddress(JSON.parse(savedAddress));
    }

    if (addresses?.length) {
      setAddresses(addresses)
    }
  }, []);

  useEffect(() => {
    if (selectedAddress) {
      localStorage.setItem('selectedAddress', JSON.stringify(selectedAddress));
    }
  }, [selectedAddress]);

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-screen h-screen sm:h-[500px] sm:w-[500px] md:w-[600px] xl:w-[700px] xl:h-[600px] relative">
      <AnimatePresence mode="wait">
        {showForm ? (
          <AddressFormModule setShowForm={setShowForm} />
        ) : (
          <motion.div
            key="address-list"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full h-full flex flex-col relative rounded-md overflow-hidden bg-white shadow-lg"
          >
            <button
              onClick={handleCloseModule}
              className="size-fit absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
            >
              <FaXmark size={20} />
            </button>

            <h2 className="py-4 text-center text-lg font-semibold">انتخاب آدرس ها</h2>
            <div className="size-full flex flex-col py-4 gap-4 overflow-y-auto px-4">
              {addresses?.length ? (
                addresses.map((address) => (
                  <div
                    key={address.id}
                    className="w-full flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      id={`address-${address.id}`}
                      name="selectedAddress"
                      checked={selectedAddress?.id === address.id}
                      onChange={() => handleAddressSelect(address)}
                      className="mt-1 accent-blue-500 cursor-pointer"
                      style={{ width: '18px', height: '18px' }}
                    />
                    <label htmlFor={`address-${address.id}`} className="flex-1 cursor-pointer">
                      <div className="flex flex-col">
                        <p className="text-sm md:text-base font-semibold">
                          {truncateText(address.province + address.city, MAX_TITLE_LENGTH)}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">
                          {truncateText(address.description, MAX_ADDRESS_LENGTH)}
                        </p>
                      </div>
                    </label>
                  </div>
                ))
              ) : (
                <div
                  className='size-full flex flex-col items-center justify-center gap-2'
                >
                  <IoLocation className='text-7xl text-gray-500' />
                  <p className="size-fit text-xl md:text-2xl font-medium text-gray-600">
                    آدرسی یافت نشد
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full h-fit p-3 md:p-4 cursor-pointer text-sm md:text-base text-white bg-blue-600 hover:bg-blue-700 transition-colors border-t"
            >
              افزودن آدرس جدید
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddressModule