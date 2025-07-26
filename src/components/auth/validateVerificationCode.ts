import { ZodSchema, ZodError } from 'zod';

type ValidateVerificationCodeParams<T extends { phone: string }> = {
  setError: (error: string) => void;
  formData: T;
  code: string;
  schema: ZodSchema<{ phone: string; code: string }>;
};

export const validateVerificationCode = <T extends { phone: string }>({
  setError,
  formData,
  code,
  schema
}: ValidateVerificationCodeParams<T>): boolean => {
  try {
    schema.parse({
      phone: formData.phone,
      code: code
    });
    setError('');
    return true;
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      setError(error.issues.map(issue => issue.message).join(', '));
    } else {
      console.error('Verification error:', error);
      setError('خطایی در اعتبارسنجی کد رخ داد');
    }
    return false;
  }
};