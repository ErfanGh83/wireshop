"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormValues, createProductSchema } from "@/zod/schemas";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { postProduct } from "@/lib/api/adminApi";
import { toast } from "react-toastify";
import { CATEGORIES, ERROR_MESSAGES } from "@/lib/api/constants";
import { useEffect } from "react";

export default function AdminCreateProductForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<createProductFormValues>({
    resolver: zodResolver(createProductSchema) as any,
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      weightKg: 0,
      stock: 0,
      categoryId: CATEGORIES[0].id as any,
      attributes: [],
      images: [],
    },
  });

  const categoryId = watch("categoryId");

  const { fields: attrFields, replace: replaceAttrs } = useFieldArray({
    control,
    name: "attributes",
  });

  const {
    fields: imgFields,
    append: appendImg,
    remove: removeImg,
  } = useFieldArray({ control, name: "images" as any });

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (category) {
      const newAttrs = category.attributes.map((attr) => ({
        key: attr.id,
        value: "",
      }));
      replaceAttrs(newAttrs);
    } else {
      replaceAttrs([]);
    }
  }, [categoryId, replaceAttrs]);

  const onSubmit = (data: createProductFormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    if (data.description) formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("weightKg", data.weightKg.toString());
    formData.append("stock", data.stock.toString());
    formData.append("categoryId", data.categoryId);

    const attributesObj: Record<string, string> = {};
    data.attributes.forEach((attr) => {
      attributesObj[attr.key] = attr.value;
    });
    formData.append("attributes", JSON.stringify(attributesObj));

    data.images.forEach((file) => {
      formData.append("images", file);
    });

    postProduct(formData)
      .then(() => toast.success("محصول با موفقیت ایجاد شد"))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.admin[
            err.status as keyof typeof ERROR_MESSAGES.admin
          ] ||
            err.response?.error ||
            "خطایی رخ داده است"
        )
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto md:p-8 mb-4 bg-white dark:bg-slate-800 shadow-lg rounded-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
        ایجاد محصول
      </h2>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          نام محصول
        </label>
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
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          توضیحات محصول
        </label>
        <textarea
          {...register("description")}
          placeholder="توضیحات"
          className={`w-full border rounded-lg max-h-[200px] p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          قیمت (تومان)
        </label>
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
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          وزن (کیلوگرم)
        </label>
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
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          تعداد موجودی
        </label>
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
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          دسته‌بندی
        </label>
        <select
          {...register("categoryId")}
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          ویژگی‌ها
        </label>

        {attrFields.length === 0 && (
          <p className="text-gray-500">دسته‌بندی انتخاب شده ویژگی ندارد.</p>
        )}

        {attrFields.map((field, index) => {
          const category = CATEGORIES.find((cat) => cat.id === categoryId);
          if (!category) return null;
          const attribute = category.attributes.find(
            (attr) => attr.id === field.key
          );
          if (!attribute) return null;

          return (
            <div className="mb-4" key={field.id} >
              <div className="flex flex-row justify-between items-center">
                <label className="mb-1 font-semibold text-gray-700 dark:text-gray-300">
                  {attribute.name}
                </label>

                <select
                  {...register(`attributes.${index}.value` as const)}
                  defaultValue={field.value || ""}
                  className={`border rounded-lg p-2 w-48 sm:w-64 lg:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
                    errors.attributes?.[index]?.value
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    انتخاب کنید
                  </option>
                  {attribute.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <input
                  type="hidden"
                  {...register(`attributes.${index}.key` as const)}
                  value={field.key}
                />
              </div>
              {errors.attributes?.[index]?.value && (
                <p className="text-red-500 text-sm text-end">
                  {errors.attributes[index]?.value?.message}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          تصاویر محصول
        </label>
        {imgFields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 mb-2">
            <input
              type="file"
              {...register(`images.${index}` as const)}
              className="border rounded-lg p-2 w-full"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => removeImg(index)}
              className="text-red-600 hover:text-red-800"
              title="حذف تصویر"
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendImg(null)}
          className="flex items-center gap-1 px-3 py-1 rounded-md border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FiPlus />
          افزودن تصویر
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        ایجاد محصول
      </button>
    </form>
  );
}
