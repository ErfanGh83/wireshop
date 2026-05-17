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
  showMoreBtn?: ReactNode;
  tableDiscountModal?: ReactNode[];
  filterSection?: ReactNode;
  // discountModal?: ReactNode;
  hasDiscount?: boolean;
}

export default function AdminTable({
  tableHead,
  tableStyle,
  tableData,
  tableModal,
  showMoreBtn,
  tableDiscountModal,
  filterSection,
  // discountModal,
  hasDiscount = false,
}: Props) {
  // const [currentUrl, setUrl] = useState(url);
  const [modalOpen, setModalOpen] = useState(false);
  const [discountModalOpen, setDiscountModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number>(0);

  // useEffect(() => console.log(currentUrl), [currentUrl]);

  return (
    <>
      {filterSection}

      {tableData.length > 0 ? (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800">
            <thead className="bg-gray-100 dark:bg-slate-700 border-b border-gray-300 dark:border-gray-600">
              <tr>
                {tableHead.map((item, index) => (
                  <th
                    key={index}
                    className={`whitespace-nowrap px-4 py-3 text-start font-semibold border-r border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 ${
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
                  className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {row.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-4 py-3 text-start border-r border-gray-300 dark:border-gray-600${
                        tableStyle?.body || ""
                      }`}
                    >
                      {col}
                    </td>
                  ))}

                  {hasDiscount && (
                    <td
                      className={`px-4 py-3 text-start border-r border-gray-300 dark:border-gray-600${
                        tableStyle?.body || ""
                      }`}
                    >
                      <button
                        onClick={() => {
                          setSelectedRow(rowIndex);
                          setDiscountModalOpen(true);
                        }}
                        className="whitespace-nowrap bg-blue-500 px-3 py-1.5 rounded hover:bg-blue-400 active:bg-blue-300 transition-all text-white"
                      >
                        اعمال تخفیف
                      </button>
                    </td>
                  )}

                  <td
                    className={`px-4 py-3 text-start border-r border-gray-300 dark:border-gray-600${
                      tableStyle?.body || ""
                    }`}
                  >
                    <button
                      onClick={() => {
                        setSelectedRow(rowIndex);
                        setModalOpen(true);
                      }}
                      className="whitespace-nowrap bg-blue-500 px-3 py-1.5 rounded hover:bg-blue-400 active:bg-blue-300 transition-all text-white"
                    >
                      مشاهده
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {showMoreBtn}

          {tableDiscountModal && (
            <AdminModal
              isOpen={discountModalOpen}
              onClose={() => setDiscountModalOpen(false)}
              title="جزئیات تخفیف"
            >
              {selectedRow !== null && selectedRow !== undefined && (
                <>{tableDiscountModal[selectedRow]}</>
              )}
            </AdminModal>
          )}

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
      ) : (
        <div className="text-center text-2xl text-blue-700 dark:text-purple-300 overflow-hidden">
          موردی برای نمایش وجود ندارد.
        </div>
      )}
    </>
  );
}
