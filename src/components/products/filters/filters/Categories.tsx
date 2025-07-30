"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import { MdArrowDropDown, MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md'
import { categoryList } from './filtersList'

type Props = {
  category: string // stores english category key
  setCategory: Dispatch<SetStateAction<string>>
}

const Categories = ({ category, setCategory }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleCategorySelect = (selectedCategoryEn: string) => {
    // Toggle selection - if clicking the already selected category, deselect it
    setCategory(prev => prev === selectedCategoryEn ? '' : selectedCategoryEn)
  }

  return (
    <div className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 rounded-lg overflow-hidden ${isOpen ? 'h-fit' : 'h-16'}`}>
      <div 
        className='w-full h-16 flex flex-row items-center justify-between px-4 cursor-pointer'
        onClick={handleToggle}
      >
        <p>دسته بندی</p>
        <MdArrowDropDown className={`transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
      </div>

      {isOpen && (
        <div className='w-full bg-gray-100 p-4 space-y-3 max-h-64 overflow-y-auto'>
          {categoryList.map((cat) => (
            <div 
              key={cat.en}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
              onClick={() => handleCategorySelect(cat.en)}
            >
              {category === cat.en ? (
                <MdRadioButtonChecked className="text-blue-500 text-2xl" />
              ) : (
                <MdRadioButtonUnchecked className="text-gray-500 text-2xl" />
              )}
              <span className="text-lg">{cat.fa}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Categories