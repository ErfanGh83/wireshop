import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaXmark } from 'react-icons/fa6';
import { Address } from '@/types/address';

interface AddressFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  addNewAddress: (address: Address) => void;
}

const AddressFormModule = ({ setShowForm, addNewAddress }: AddressFormProps) => {
  const [formData, setFormData] = useState({
    province: '',
    city: '',
    postalAddress: '',
    plaque: '',
    unit: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({
    province: false,
    city: false,
    postalAddress: false,
    plaque: false,
    postalCode: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      province: !formData.province,
      city: !formData.city,
      postalAddress: !formData.postalAddress,
      plaque: !formData.plaque,
      postalCode: !formData.postalCode || !/^\d{10}$/.test(formData.postalCode)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const newAddress: Address = {
        id: Date.now().toString(),
        title: `${formData.province} - ${formData.city}`,
        fullAddress: `${formData.postalAddress}, پلاک ${formData.plaque}, واحد ${formData.unit}, کدپستی ${formData.postalCode}`
      };
      addNewAddress(newAddress);
      setShowForm(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="w-full max-w-[95vw] sm:w-[500px] md:w-[600px] bg-white rounded-md overflow-hidden shadow-lg"
    >
      <div className="p-4 relative">
        <button
          onClick={() => setShowForm(false)}
          className="absolute left-4 top-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <FaXmark size={20} />
        </button>
        <h2 className="text-center text-lg font-semibold py-2">افزودن آدرس جدید</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">استان *</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.province ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.province && <p className="text-red-500 text-xs mt-1">لطفا استان را وارد کنید</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">شهر *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">لطفا شهر را وارد کنید</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">آدرس پستی *</label>
          <input
            type="text"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.postalAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.postalAddress && <p className="text-red-500 text-xs mt-1">لطفا آدرس پستی را وارد کنید</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">پلاک *</label>
            <input
              type="text"
              name="plaque"
              value={formData.plaque}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${errors.plaque ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.plaque && <p className="text-red-500 text-xs mt-1">لطفا پلاک را وارد کنید</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">واحد</label>
            <input
              type="text"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">کد پستی *</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            maxLength={10}
            className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-xs mt-1">
              {formData.postalCode ? 'کد پستی باید 10 رقم باشد' : 'لطفا کد پستی را وارد کنید'}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          ذخیره آدرس
        </button>
      </form>
    </motion.div>
  );
};

export default AddressFormModule