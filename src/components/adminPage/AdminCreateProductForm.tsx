"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormValues, createProductSchema } from "@/zod/schemas";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { postProduct } from "@/lib/api/adminApi";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";

export default function AdminCreateProductForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createProductFormValues>({
    resolver: zodResolver(createProductSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      weightKg: 0,
      stock: 0,
      categoryId: "",
      attributes: [{ key: "", value: "" }],
      images: [""],
    },
  });

  const {
    fields: attrFields,
    append: appendAttr,
    remove: removeAttr,
  } = useFieldArray({ control, name: "attributes" });

  const {
    fields: imgFields,
    append: appendImg,
    remove: removeImg,
  } = useFieldArray({ control, name: "images" as any });

  const onSubmit = (data: createProductFormValues) => {
    const att: Record<string, string> = {};
    data.attributes.forEach((item) => {
      att[item.key] = item.value;
    });
    postProduct({ ...data, attributes: att })
      .then((response) => console.log(response))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.admin[
            err.status as keyof typeof ERROR_MESSAGES.admin
          ] ||
            err.response.error ||
            "خطایی رخ داده است"
        )
      );;
  };

  const labelClass = "block mb-1 font-medium text-gray-700 dark:text-gray-300";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto md:p-8 mb-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        ایجاد محصول
      </h2>

      <div>
        <label className={labelClass}>نام محصول</label>
        <input
          {...register("name")}
          placeholder="نام محصول"
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>توضیحات محصول</label>
        <textarea
          {...register("description")}
          placeholder="توضیحات"
          className={`w-full border rounded-lg max-h-[200px] p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      <div>
        <label className={labelClass}>قیمت (تومان)</label>
        <input
          type="number"
          {...register("price")}
          placeholder="قیمت"
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.price ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>وزن (کیلوگرم)</label>
        <input
          type="number"
          step="0.1"
          {...register("weightKg")}
          placeholder="وزن"
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.weightKg ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.weightKg && (
          <p className="text-red-500 text-sm mt-1">{errors.weightKg.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>تعداد موجودی</label>
        <input
          type="number"
          {...register("stock")}
          placeholder="موجودی"
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.stock ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.stock && (
          <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
        )}
      </div>

      <div>
        <label className={labelClass}>شناسه دسته‌بندی</label>
        <input
          {...register("categoryId")}
          placeholder="شناسه دسته‌بندی"
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.categoryId ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.categoryId.message}
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>ویژگی‌ها</label>
        <div className="space-y-3">
          {attrFields.map((field, i) => (
            <div key={field.id} className="flex flex-col gap-1">
              <div className="flex md:flex-row flex-col gap-2">
                <input
                  {...register(`attributes.${i}.key`)}
                  placeholder="کلید"
                  className={`flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
                    errors.attributes ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <input
                  {...register(`attributes.${i}.value`)}
                  placeholder="مقدار"
                  className={`flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
                    errors.attributes ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => removeAttr(i)}
                  className="text-red-600 hover:text-red-500 active:text-red-400 p-2 cursor-pointer transition-all"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              {errors.attributes?.[i]?.key && (
                <p className="text-red-500 text-sm">
                  {errors.attributes[i]?.key?.message}
                </p>
              )}
              {errors.attributes?.[i]?.value && (
                <p className="text-red-500 text-sm">
                  {errors.attributes[i]?.value?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => appendAttr({ key: "", value: "" })}
          className="mt-2 flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-700 transition-all dark:text-purple-600 hover:dark:text-purple-500"
        >
          <FiPlus /> ویژگی جدید
        </button>
      </div>

      <div>
        <label className={labelClass}>لینک تصاویر</label>
        <div className="space-y-3">
          {imgFields.map((field, i) => (
            <div key={field.id} className="flex flex-col gap-1">
              <div className="flex gap-2">
                <input
                  {...register(`images.${i}`)}
                  placeholder="https://..."
                  className={`flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
                    errors.images ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => removeImg(i)}
                  className="text-red-600 hover:text-red-500 active:text-red-400 p-2 cursor-pointer transition-all"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
              {errors.images?.[i] && (
                <p className="text-red-500 text-sm">
                  {errors.images[i]?.message as string}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => appendImg("")}
          className="mt-2 flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-700 transition-all dark:text-purple-600 hover:dark:text-purple-500"
        >
          <FiPlus /> لینک جدید
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-3 cursor-pointer dark:bg-purple-600 dark:hover:bg-purple-700 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        ایجاد محصول
      </button>
    </form>
  );
}
