import { z } from 'zod'

// 1. ارسال کد تأیید
export const SendCodeSchema = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل ۱۰ رقم باشد'),
})
export type SendCodeInput = z.infer<typeof SendCodeSchema>

// 2. تأیید کد
export const VerifyCodeSchema = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل ۱۰ رقم باشد'),
  code: z.string().length(6, 'کد تأیید باید ۶ رقم باشد'),
})
export type VerifyCodeInput = z.infer<typeof VerifyCodeSchema>

// 3. تکمیل ثبت‌نام (با نام کاربری اضافه‌شده)
export const CompleteSignupSchema = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل ۱۰ رقم باشد'),
  username: z.string().min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  birthdate: z.string().regex(
    /^\d{4}-\d{2}-\d{2}$/,
    'تاریخ تولد باید به فرمت سال - ماه - روز باشد'
  ),
})
export type CompleteSignupInput = z.infer<typeof CompleteSignupSchema>

// 4. ورود
export const LoginSchema = z.object({
  phone: z.string().min(10, 'شماره تلفن باید حداقل ۱۰ رقم باشد'),
  password: z.string().min(6, 'رمز عبور الزامی است و باید حداقل ۶ کاراکتر باشد'),
})
export type LoginInput = z.infer<typeof LoginSchema>
