import { BiTimer } from "react-icons/bi";
import { formatTime } from "@/lib/utils";
import { FormEvent } from "react";

interface VerificationCodeInputProps {
  onBack: () => void;
  onResendCode: () => void;
  cooldown: number;
  resetCooldown: () => void;
  onChange: (code: string) => void;
  onSubmit: () => void;
  error?: string;
}

const VerificationCodeInput = ({
  onResendCode,
  cooldown,
  onBack,
  onChange,
  onSubmit,
  error,
}: VerificationCodeInputProps) => {
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      onChange(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="w-full flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
      <div className={`w-full flex flex-col gap-1`}>
        <div className={`w-full flex flex-row items-center border-2 rounded-lg overflow-hidden transition-all
          ${error ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-600 focus-within:border-blue-500 dark:focus-within:border-blue-400'}
          focus-within:ring-2 ${error ? 'focus-within:ring-red-200 dark:focus-within:ring-red-900' : 'focus-within:ring-blue-200 dark:focus-within:ring-blue-900'}`}>
          <input
            className='w-full h-12 px-4 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-center text-gray-800 dark:text-gray-100'
            placeholder='کد تأیید'
            type='text'
            inputMode='numeric'
            pattern='[0-9]*'
            onChange={handleCodeChange}
            maxLength={6}
          />
        </div>
        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        )}
      </div>

      <div className="flex flex-row items-center justify-between">
        <button
          type="button"
          onClick={cooldown <= 0 ? onResendCode : undefined}
          disabled={cooldown > 0}
          className={`text-sm flex items-center gap-1 ${cooldown > 0 ? 'text-gray-500 dark:text-gray-400' : 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300'} transition-colors`}
        >
          {cooldown > 0 ? (
            <>
              <BiTimer size={16} />
              <span>ارسال مجدد کد ({formatTime(cooldown)})</span>
            </>
          ) : (
            <span>ارسال مجدد کد</span>
          )}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          بازگشت
        </button>
      </div>

      <button
        type='submit'
        className='w-full h-12 bg-blue-500 hover:bg-blue-600 transition-colors text-white cursor-pointer rounded-md'
      >
        تایید
      </button>
    </form>
  );
};

export default VerificationCodeInput;