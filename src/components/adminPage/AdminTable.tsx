"use client";

import { ReactNode, useState } from "react";
import AdminModal from "./AdminModal";

interface Props {
  tableHead: string[];
  tableStyle?: {
    head?: string;
    body?: string;
  };
  tableData: ReactNode[][];
  tableModal: ReactNode[];
}

export default function AdminTable({
  tableHead,
  tableStyle,
  tableData,
  tableModal,
}: Props) {
  // const [currentUrl, setUrl] = useState(url);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number>(0);

  // useEffect(() => console.log(currentUrl), [currentUrl]);

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
          {tableData.map((row, rowIndex) => (
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
                <button
                  onClick={() => {
                    setSelectedRow(rowIndex);
                    setModalOpen(true);
                  }}
                  className="bg-blue-400 p-2 rounded cursor-pointer hover:bg-blue-300 active:bg-blue-200 transition-all text-slate-200"
                >
                  مشاهده
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AdminModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="جزئیات ردیف"
      >
        {selectedRow !== null && selectedRow !== undefined && (
          <>{tableModal[selectedRow]}</>
        )}
      </AdminModal>
    </div>
  );
}
