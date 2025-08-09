import { z } from 'zod'

// Helper schema for Iranian phone numbers (09xxxxxxxxx)
const IranianPhoneSchema = z
  .string()
  .length(11, 'شماره تلفن باید ۱۱ رقم باشد')
  .regex(/^09\d{9}$/, 'شماره تلفن باید با ۰۹ شروع شود و فقط شامل اعداد باشد')
  .regex(/^[0-9۰-۹]+$/, 'شماره تلفن باید فقط شامل اعداد باشد');

// 1. ارسال کد تأیید
export const SendCodeSchema = z.object({
  phone: IranianPhoneSchema,
})
export type SendCodeInput = z.infer<typeof SendCodeSchema>

// 2. تأیید کد
export const VerifyCodeSchema = z.object({
  phone: IranianPhoneSchema,
  code: z.string().length(7, 'کد تأیید باید 7 رقم باشد'),
})
export type VerifyCodeInput = z.infer<typeof VerifyCodeSchema>

// 3. تکمیل ثبت‌نام
export const CompleteSignupSchema = z.object({
  phone: IranianPhoneSchema,
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  birthdate: z.string().regex(
    /^[۰-۹]{4}-[۰-۹]{2}-[۰-۹]{2}$/,
    'تاریخ تولد باید به فرمت شمسی و با اعداد فارسی وارد شود'
  ),
})
export type CompleteSignupInput = z.infer<typeof CompleteSignupSchema>

// 4. ورود
export const LoginSchema = z.object({
  phone: IranianPhoneSchema,
  password: z.string().min(6, 'رمز عبور الزامی است و باید حداقل ۶ کاراکتر باشد'),
})
export type LoginInput = z.infer<typeof LoginSchema>

export const productSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  description: z.string().min(1, "توضیح الزامی است"),
  price: z.number().min(0, "قیمت نمی‌تواند منفی باشد"),
  weightKg: z.number().min(0, "وزن باید صفر یا بیشتر باشد"),
  stock: z.number().int().min(0, "موجودی نمی‌تواند منفی باشد"),
});
export type ProductFormValues = z.infer<typeof productSchema>;

export const createProductSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  description: z.string().optional(),
  price: z.coerce.number().min(1, "قیمت باید بزرگتر از صفر باشد"),
  weightKg: z.coerce.number().min(0.01, "وزن باید بزرگتر از صفر باشد"),
  stock: z.coerce.number().int().min(0, "موجودی منفی نیست"),
  categoryId: z.string().min(1, "شناسه دسته‌بندی الزامی است"),
  attributes: z.array(
    z.object({
      key: z.string().min(1, "کلید الزامی است"),
      value: z.string().min(1, "مقدار الزامی است"),
    })
  ),
  images: z
    .array(z.string().url("لینک تصویر معتبر نیست"))
});
export type createProductFormValues = z.infer<typeof createProductSchema>;

export const createMemberSchema = z.object({
  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره تلفن معتبر نیست (مثال: 09123456789)"),
  password: z.string().min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
  role: z
    .enum(["user", "admin", "support"])
    .refine((val) => !!val, { message: "انتخاب نقش الزامی است" }),
});
export type CreateMemberFormValues = z.infer<typeof createMemberSchema>;
