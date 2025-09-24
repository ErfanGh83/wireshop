"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { brands } from "./filtersList";

type Props = {
  brand: string | null; // only one brand can be selected
  setBrand: Dispatch<SetStateAction<string | null>>;
};

const Brands = ({ brand, setBrand }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg overflow-hidden ${
        isOpen ? "min-h-16" : "h-16"
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
          className={`transition-transform duration-200 ${
            isOpen ? "" : "-rotate-90"
          }`}
        />
      </div>

      {/* Dropdown body */}
      {isOpen && (
        <div className="w-full bg-gray-100 dark:bg-slate-500 p-4 space-y-3 overflow-y-auto max-h-64">
          {brands.map((b, index) => (
            <label
              key={b.en + index}
              dir="rtl"
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                checked={brand === b.en}
                onChange={() => setBrand(b.en)}
                className="w-5 h-5 cursor-pointer"
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
