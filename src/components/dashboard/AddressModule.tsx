import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { exampleAddresses } from './exampleAddresses'
import { AnimatePresence, motion } from 'framer-motion'
import AddressFormModule from '../forms/AddressFormModule'

interface Address {
    id: string
    title: string
    fullAddress: string
}

type Props = {
    setModuleIsOpen: Dispatch<SetStateAction<boolean>>
}

const MAX_TITLE_LENGTH = 30;
const MAX_ADDRESS_LENGTH = 100;

const AddressModule = ({ setModuleIsOpen }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>(exampleAddresses);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleCloseModule = () => {
    setModuleIsOpen(false);
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem('selectedAddress');
    if (savedAddress) {
      setSelectedAddress(JSON.parse(savedAddress));
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

  const addNewAddress = (newAddress: Address) => {
    setAddresses(prev => [...prev, newAddress]);
    setSelectedAddress(newAddress);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="w-full max-w-[95vw] sm:w-[500px] md:w-[600px] h-[400px] md:h-[500px] relative">
      <AnimatePresence mode="wait">
        {showForm ? (
          <AddressFormModule setShowForm={setShowForm} addNewAddress={addNewAddress} />
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

            <h2 className="py-2 text-center text-lg font-semibold">انتخاب آدرس ها</h2>
            <hr className="w-4/5 mx-auto" />

            <div className="size-full flex flex-col py-4 gap-4 overflow-y-auto px-4">
              {addresses.length ? (
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
                          {truncateText(address.title, MAX_TITLE_LENGTH)}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">
                          {truncateText(address.fullAddress, MAX_ADDRESS_LENGTH)}
                        </p>
                      </div>
                    </label>
                  </div>
                ))
              ) : (
                <p className="size-fit m-auto text-xl md:text-2xl font-medium text-gray-500">
                  آدرسی یافت نشد
                </p>
              )}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="w-full h-fit p-3 md:p-4 cursor-pointer text-sm md:text-base text-white bg-blue-500 hover:bg-blue-600 transition-colors border-t"
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