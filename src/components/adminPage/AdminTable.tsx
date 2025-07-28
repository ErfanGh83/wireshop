"use client";

import { JSX, ReactNode, useEffect, useState } from "react";

interface Props {
  tableHead: string[];
  tableStyle?: {
    head?: string;
    body?: string;
  };
  url: string;
}

const data: Record<string, (string | JSX.Element)[][]> = {
  edit_item: [
    [
      <img
        src="https://www.wireandcableyourway.com/media/wysiwyg/392_4.jpg"
        alt="product"
        className="rounded"
        width={50}
      />,
      "محصول تستی شماره ۱",
    ],
    [
      <img
        src="https://www.wireandcableyourway.com/media/wysiwyg/1895_3.jpg"
        alt="product"
        className="rounded"
        width={50}
      />,
      "محصول تستی شماره ۲",
    ],
  ],

  order_list: [
    ["علیرضا محمدی", "1403/05/01", "۳۲۰,۰۰۰ تومان"],
    ["سارا کریمی", "1403/05/03", "۱,۱۰۰,۰۰۰ تومان"],
  ],

  change_access: [
    ["زهرا میرزایی", "کاربر معمولی"],
    ["مهدی جهانگیری", "ادمین"],
  ],
};

export default function AdminTable({ tableHead, url, tableStyle }: Props) {
  const [currentUrl, setUrl] = useState(url);

  useEffect(() => console.log(currentUrl), [currentUrl]);


  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
      <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-100 bg-white/50 dark:bg-slate-800/30 backdrop-blur-md">
        <thead className="border-b border-gray-300/30 dark:border-gray-600/20">
          <tr>
            {tableHead.map((item, index) => (
              <th
                key={index}
                className={`px-4 py-3 text-start font-medium ${
                  tableStyle?.head || ""
                }`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[currentUrl].map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-gray-200/20 dark:border-gray-600/10 hover:bg-gray-100/30 dark:hover:bg-slate-700/30 transition-colors"
            >
              {row.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-3 text-start ${tableStyle?.body || ""}`}
                >
                  {col}
                </td>
              ))}
              <td className="px-4 py-3 text-start">
                <button className="bg-blue-400 p-2 rounded cursor-pointer hover:bg-blue-300 active:bg-blue-200 transition-all text-slate-200">
                  مشاهده
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
