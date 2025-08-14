type Props = {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const ConfirmModal = ({ title, description, onCancel, onConfirm }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 space-y-6">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>

            <div className="flex flex-row-reverse justify-end gap-3">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 rounded-md cursor-pointer text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    خیر
                </button>
                <button
                    onClick={onConfirm}
                    className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                    بله
                </button>
            </div>
        </div>
    );
};

export default ConfirmModal;