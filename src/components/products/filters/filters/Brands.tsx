"use client";

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { brands } from "./filtersList";

type Props = {
  brand: string | null;
  setBrand: Dispatch<SetStateAction<string | null>>;
};

const Brands = ({ brand, setBrand }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  /* ----------------------------------
     Selected brand first
  -----------------------------------*/
  const sortedBrands = useMemo(() => {
    if (!brand) return brands;

    const selected = brands.find((b) => b.en === brand);
    const rest = brands.filter((b) => b.en !== brand);

    return selected ? [selected, ...rest] : brands;
  }, [brand]);

  /* ----------------------------------
     Toggle brand (select / unselect)
  -----------------------------------*/
  const handleSelect = (value: string) => {
    setBrand((prev) => (prev === value ? null : value));
  };

  return (
    <div
      className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg overflow-hidden ${isOpen ? "min-h-16" : "h-16"
        }`}
    >
      {/* Top bar */}
      <div
        dir="rtl"
        className="w-full h-16 px-4 py-4 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>برند</p>
        <MdArrowDropDown
          className={`transition-transform duration-200 ${isOpen ? "" : "-rotate-90"
            }`}
        />
      </div>

      {/* Dropdown body */}
      {isOpen && (
        <div className="w-full bg-gray-100 dark:bg-slate-500 p-4 space-y-3 overflow-y-auto max-h-64">
          {sortedBrands.map((b, index) => (
            <label
              key={b.en + index}
              dir="rtl"
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleSelect(b.en)}
            >
              <input
                type="radio"
                name="brand"
                checked={brand === b.en}
                readOnly
                className="w-5 h-5 cursor-pointer accent-blue-600"
              />
              <span>{b.fa}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Brands;
