"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { createNewUser } from "@/lib/api/adminApi";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import { CreateMemberFormValues, createMemberSchema } from "@/zod/schemas";

export default function AdminCreateMemberForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateMemberFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(createMemberSchema) as any,
    defaultValues: {
      phone: "",
      password: "",
      role: "user",
    },
  });

  const onSubmit = (data: CreateMemberFormValues) => {
    createNewUser({ ...data, phone: "+98" + data.phone.slice(1) })
      .then(() => {
        toast.success("عضو با موفقیت ایجاد شد");
        reset();
      })
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.admin[
            err.status as keyof typeof ERROR_MESSAGES.admin
          ] ||
            err.response.error ||
            "خطایی رخ داده است"
        )
      );
  };

  const labelClass = "block mb-1 font-medium text-gray-700 dark:text-gray-300";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto md:p-8 mb-4 p-2 sm:p-5 transition-all bg-white dark:bg-slate-800 shadow-lg rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        ایجاد عضو جدید
      </h2>

      {/* phone */}
      <div>
        <label className={labelClass}>شماره تلفن</label>
        <input
          {...register("phone")}
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* password */}
      <div>
        <label className={labelClass}>رمز عبور</label>
        <input
          type="password"
          {...register("password")}
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* role */}
      <div>
        <label className={labelClass}>نقش</label>
        <select
          {...register("role")}
          className={`w-full border rounded-lg p-3 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.role ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="user">کاربر</option>
          <option value="admin">مدیر</option>
          <option value="support">پشتیبانی</option>
        </select>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 cursor-pointer dark:bg-purple-600 dark:hover:bg-purple-700 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        ایجاد عضو
      </button>
    </form>
  );
}
