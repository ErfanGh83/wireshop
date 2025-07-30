"use client"

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { MdArrowDropDown, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { brandNames } from './filtersList'

type Props = {
    brands: string[] // stores english names
    setBrands: Dispatch<SetStateAction<string[]>>
}

const Brands = ({ brands, setBrands }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedBrands, setSelectedBrands] = useState<string[]>(brands)

    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }

    const handleBrandSelect = (brandEn: string) => {
        setSelectedBrands(prev => 
            prev.includes(brandEn)
                ? prev.filter(b => b !== brandEn) // Remove if already selected
                : [...prev, brandEn] // Add if not selected
        )
    }

    // Update parent brands when selectedBrands changes
    useEffect(() => {
        setBrands(selectedBrands)
    }, [selectedBrands, setBrands])

    return (
        <div className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 rounded-lg overflow-hidden ${isOpen ? 'h-fit' : 'h-16'}`}>
            <div 
                className='w-full h-16 flex flex-row items-center justify-between px-4 cursor-pointer'
                onClick={handleToggle}
            >
                <p>برندها</p>
                <MdArrowDropDown className={`transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`} />
            </div>

            {isOpen && (
                <div className='w-full bg-gray-100 p-4 space-y-3 max-h-64 overflow-y-auto'>
                    {brandNames.map((brand) => (
                        <div 
                            key={brand.en}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
                            onClick={() => handleBrandSelect(brand.en)}
                        >
                            {selectedBrands.includes(brand.en) ? (
                                <MdCheckBox className="text-blue-500 text-2xl" />
                            ) : (
                                <MdCheckBoxOutlineBlank className="text-gray-500 text-2xl" />
                            )}
                            <span className="text-lg">{brand.fa}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Brands