"use client"

import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { MdArrowDropDown, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { brandNames } from './filtersList'

type Props = {
    brands: string[]
    setBrands: Dispatch<SetStateAction<string[]>>
}

const Brands = ({ brands, setBrands }: Props) => {
    const [brandIsOpen, setBrandIsOpen] = useState(false)
    const [selectedBrands, setSelectedBrands] = useState<string[]>(brands)

    const handleBrandToggle = () => {
        setBrandIsOpen(prev => !prev)
    }

    const handleBrandSelect = (brand: string) => {
        setSelectedBrands(prev => 
            prev.includes(brand)
                ? prev.filter(b => b !== brand) // Remove if already selected
                : [...prev, brand] // Add if not selected
        )
    }

    // Update parent brands when selectedBrands changes
    useEffect(() => {
        setBrands(selectedBrands)
    }, [selectedBrands, setBrands])

    return (
        <div className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 rounded-lg overflow-hidden ${brandIsOpen ? 'h-fit' : 'h-16'}`}>
            <div 
                className='w-full h-16 flex flex-row items-center justify-between px-4 cursor-pointer'
                onClick={handleBrandToggle}
            >
                <p>برندها</p>
                <MdArrowDropDown className={`transition-transform duration-200 ${brandIsOpen ? '' : '-rotate-90'}`} />
            </div>

            {brandIsOpen && (
                <div className='w-full bg-gray-100 p-4 space-y-3 max-h-56 overflow-y-auto'>
                    {brandNames.map((brand) => (
                        <div 
                            key={brand}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
                            onClick={() => handleBrandSelect(brand)}
                        >
                            {selectedBrands.includes(brand) ? (
                                <MdCheckBox className="text-blue-500 text-2xl" />
                            ) : (
                                <MdCheckBoxOutlineBlank className="text-gray-500 text-2xl" />
                            )}
                            <span className="text-lg">{brand}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Brands