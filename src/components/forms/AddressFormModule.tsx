import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { addNewAddress } from '@/lib/api/authApi';

interface AddressFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: () => void
}

const AddressFormModule = ({ setShowForm, refetch }: AddressFormProps) => {
  const [formData, setFormData] = useState({
    province: '',
    city: '',
    description: '',
    plaque: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({
    province: false,
    city: false,
    description: false,
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
      description: !formData.description,
      plaque: !formData.plaque || !/^\d+$/.test(formData.plaque),
      postalCode: !formData.postalCode || !/^\d{10}$/.test(formData.postalCode),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      refetch()
      addNewAddress(formData)
      setShowForm(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 500 }}
      className="w-screen h-screen sm:h-[600px] sm:w-[500px] md:w-[600px] xl:w-[700px] xl:h-[600px] bg-white rounded-md overflow-x-hidden overflow-y-auto shadow-lg"
    >
      <div className="p-4 relative">
        <button
          onClick={() => setShowForm(false)}
          className="absolute left-4 top-4 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
        >
          <BiArrowBack size={20} />
        </button>
        <h2 className="text-center text-lg font-semibold py-2">افزودن آدرس جدید</h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full h-fit p-6 space-y-4 px-24 flex flex-col justify-between">
        {/* Province Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">استان *</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className={`
        w-full p-2 border rounded-md
        ${errors.province ? 'border-red-500' : 'border-gray-300'}
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      `}
          />
          {errors.province && <p className="text-red-500 text-xs mt-1">لطفا استان را وارد کنید</p>}
        </div>

        {/* City Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">شهر *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`
        w-full p-2 border rounded-md
        ${errors.city ? 'border-red-500' : 'border-gray-300'}
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      `}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">لطفا شهر را وارد کنید</p>}
        </div>

        {/* Postal Address Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">آدرس پستی *</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`
        w-full p-2 border rounded-md
        ${errors.description ? 'border-red-500' : 'border-gray-300'}
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      `}
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">لطفا آدرس پستی را وارد کنید</p>}
        </div>

        {/* Plaque Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">پلاک *</label>
          <input
            type="text"
            name="plaque"
            value={formData.plaque}
            onChange={handleChange}
            className={`
        w-full p-2 border rounded-md
        ${errors.plaque ? 'border-red-500' : 'border-gray-300'}
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      `}
          />
          {errors.plaque && <p className="text-red-500 text-xs mt-1">لطفا مقدار مناسب را برای پلاک قرار دهید</p>}
        </div>

        {/* Postal Code Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">کد پستی *</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            maxLength={10}
            className={`
        w-full p-2 border rounded-md
        ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
      `}
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