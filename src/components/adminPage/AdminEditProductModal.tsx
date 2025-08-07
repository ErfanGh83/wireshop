'use client'

import { patchProduct } from "@/lib/api/adminApi";
import { ProductFormValues, productSchema } from "@/zod/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AdminEditProductModal({ id }: { id: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      weightKg: 0,
      stock: 0,
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    patchProduct(id, data)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-6 bg-white dark:bg-slate-700 rounded-lg shadow space-y-5"
    >
      <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
        فرم ویرایش محصول
      </h2>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          نام محصول
        </label>
        <input
          type="text"
          {...register("name")}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          توضیحات
        </label>
        <textarea
          {...register("description")}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          قیمت (تومان)
        </label>
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          وزن (کیلوگرم)
        </label>
        <input
          type="number"
          step="0.01"
          {...register("weightKg", { valueAsNumber: true })}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.weightKg && (
          <p className="text-red-500 text-sm mt-1">{errors.weightKg.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          موجودی انبار
        </label>
        <input
          type="number"
          {...register("stock", { valueAsNumber: true })}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.stock && (
          <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        ذخیره محصول
      </button>
    </form>
  );
}
