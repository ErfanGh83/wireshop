import { ZodSchema, ZodError } from 'zod';

type ValidateSignupFormParams<T> = {
  setErrors: (errors: Record<string, string>) => void;
  formData: T;
  schema: ZodSchema<T>;
};

export const validateSignupForm = <T extends Record<string, unknown>>({
  setErrors,
  formData,
  schema
}: ValidateSignupFormParams<T>): boolean => {
  try {
    schema.parse(formData);
    setErrors({});
    return true;
  } catch (error: unknown) {
    // Zod errors have "issues" array
    if (error instanceof ZodError) {
      const newErrors: Record<string, string> = {};
      for (const issue of error.issues) {
        const field = issue.path?.[0];
        if (typeof field === 'string') {
          newErrors[field] = issue.message;
        }
      }
      setErrors(newErrors);
    } else {
      console.error('Validation error:', error);
      setErrors({ general: 'خطایی در اعتبارسنجی داده‌ها رخ داد' });
    }
    return false;
  }
};