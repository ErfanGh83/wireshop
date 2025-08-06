'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

export type FormField = {
  name: string;
  label: string;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  error?: string;
  value?: string | null;
  onChange?: (value: string) => void;
  customRender?: React.ReactNode; // ✅ New
};

export type GenericFormProps = {
  fields: FormField[];
  onSubmit: (formData: Record<string, string>) => void;
  submitLabel?: string;
};

const GenericForm: React.FC<GenericFormProps> = ({
  fields,
  onSubmit,
  submitLabel = 'ارسال',
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const field = fields.find((f) => f.name === name);
    if (field?.onChange) {
      field.onChange(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const finalData: Record<string, string> = {};
    for (const field of fields) {
      finalData[field.name] = field.value ?? formData[field.name] ?? '';
    }

    onSubmit(finalData);
  };

  return (
    <form className='w-3/5 h-fit' onSubmit={handleSubmit}>
      <h2 className="w-fit mx-auto mb-16 text-3xl font-bold text-gray-800 dark:text-gray-100">
        {submitLabel}
      </h2>

      <div className='w-full h-fit flex flex-col gap-4 mb-8'>
        {fields.map((field) => (
          <div
            key={field.name}
            className='w-full h-24 flex flex-col focus-within:text-blue-500'
          >
            <div className='size-fit flex flex-row-reverse items-center mb-1 text-2xl gap-x-1'>
              <label htmlFor={field.name} className='text-xl transition-colors duration-200'>
                {field.label}
              </label>
              <span className='transition-colors duration-200'>{field.icon}</span>
            </div>

            {field.customRender ? (
              field.customRender
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={field.value ?? formData[field.name] ?? ''}
                onChange={handleChange}
                dir='rtl'
                className='w-full h-12 flex px-4 focus:outline-none focus:border-blue-500 focus:ring-blue-200 text-gray-800 focus:text-gray-700 placeholder:text-gray-400 focus:placeholder:text-blue-400 border-[2px] border-gray-200 rounded-lg'
              />
            )}

            {field.error && (
              <p className='text-sm mt-1 text-red-600'>{field.error}</p>
            )}
          </div>
        ))}
      </div>

      <button
        type='submit'
        className='w-full h-12 bg-blue-500 hover:bg-blue-600 transition-colors text-white cursor-pointer rounded-md'
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default GenericForm;
