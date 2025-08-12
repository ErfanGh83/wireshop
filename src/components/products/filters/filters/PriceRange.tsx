"use client"

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { MdArrowDropDown } from 'react-icons/md'

type Props = {
  priceRange: [number, number]
  setPriceRange: Dispatch<SetStateAction<[number, number]>>
  min?: number
  max?: number
}

const PriceRange = ({
  priceRange: parentRange,
  setPriceRange,
  min = 0,
  max = 1000
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [localRange, setLocalRange] = useState<[number, number]>(parentRange)

  // Only update local state when parent changes (not during slider interaction)
  useEffect(() => {
    setLocalRange(parentRange)
  }, [parentRange])

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleChange = (index: 0 | 1) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    const newRange = [...localRange] as [number, number]

    // Validate min/max constraints
    if (index === 0) {
      newRange[0] = Math.min(value, localRange[1] - 1)
    } else {
      newRange[1] = Math.max(value, localRange[0] + 1)
    }

    setLocalRange(newRange)
    // Immediately update parent instead of using useEffect
    setPriceRange(newRange)
  }

  return (
    <div className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg overflow-hidden ${isOpen ? "min-h-fit" : "h-16"
      }`}>
      <div
        className='w-full h-16 px-4 py-4 flex flex-row items-center justify-between cursor-pointer'
        onClick={handleToggle}
      >
        <p>محدوده قیمت</p>
        <MdArrowDropDown className={`transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
      </div>

      {isOpen && (
        <div className='w-full bg-gray-100 dark:bg-slate-500 p-4 space-y-4 overflow-y-auto'>
          <div className='flex justify-between items-center'>
            <span className='text-lg'>{localRange[0].toLocaleString()}</span>
            <span className='text-lg'>تا</span>
            <span className='text-lg'>{localRange[1].toLocaleString()}</span>
          </div>

          <div className='space-y-4'>
            <div>
              <label className='block text-sm mb-1'>حداقل قیمت:</label>
              <input
                type="range"
                min={min}
                max={max}
                value={localRange[0]}
                onChange={handleChange(0)}
                className='w-full h-2 bg-blue-200 dark:bg-blue-500 rounded-lg appearance-none cursor-pointer'
              />
            </div>

            <div>
              <label className='block text-sm mb-1'>حداکثر قیمت:</label>
              <input
                type="range"
                min={min}
                max={max}
                value={localRange[1]}
                onChange={handleChange(1)}
                className='w-full h-2 bg-blue-200 dark:bg-blue-500 rounded-lg appearance-none cursor-pointer'
              />
            </div>
          </div>

          <div className='flex gap-4'>
            <input
              type="number"
              min={min}
              max={localRange[1] - 1}
              value={localRange[0]}
              onChange={handleChange(0)}
              className='w-full p-2 border rounded'
            />
            <input
              type="number"
              min={localRange[0] + 1}
              max={max}
              value={localRange[1]}
              onChange={handleChange(1)}
              className='w-full p-2 border rounded'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PriceRange