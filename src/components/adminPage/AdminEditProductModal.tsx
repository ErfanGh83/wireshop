"use client";

import { getProductById, patchProduct } from "@/lib/api/adminApi";
import { Product } from "@/types/product";
import { ProductFormValues, productSchema } from "@/zod/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";

export default function AdminEditProductModal({ id }: { id: string }) {
  const [defaultValue, setDefaultValue] = useState<Product | null>();

  useEffect(() => {
    getProductById(id)
      // .then(setDefaultValue)
      .then((data) => {
        setDefaultValue(data);
        console.log("data", data);
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      unit: "",
      stock: 0,
      attributes: [],
    },
  });

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setDefaultValue(res);
        reset({
          name: res.name,
          description: res.description || "",
          price: res.price,
          unit: res.unit,
          stock: res.stock,
          attributes: res.attributes,
        });
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, [id, reset]);

  if (!defaultValue) return <Spinner />;

  const onSubmit = (data: ProductFormValues) => {
    console.log("submit: ", { ...data, description: data.description || "" });
    patchProduct(id, { ...data, description: data.description || "" })
      .then(() => toast.success("محصول یا موفقیت تغییر یافت"))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.admin[
            err.status as keyof typeof ERROR_MESSAGES.admin
          ] ||
            err.response?.error ||
            err?.message ||
            "خطایی رخ داده است"
        )
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-1 bg-white dark:bg-slate-700 rounded-lg shadow space-y-5"
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
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          توضیحات
        </label>
        <textarea
          {...register("description")}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white min-h-24 max-h-48"
        />
        {errors?.description && (
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
          واحد
        </label>
        <input
          type="string"
          {...register("unit")}
          className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
        />
        {errors.unit && (
          <p className="text-red-500 text-sm mt-1">{errors.unit.message}</p>
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

      <div>
        <p className="font-medium mb-1 text-gray-700 dark:text-gray-200">
          دسته بندی محصول
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          {defaultValue.category.name}
        </p>
      </div>

      <div>
        <p className="block font-medium mb-1 text-gray-700 dark:text-gray-200">
          مشخصات محصول
        </p>
        {defaultValue.attributes.map((attr, index) => (
          <div key={attr.id} className="flex w-full justify-between mb-2">
            <p className="inline text-gray-700 dark:text-gray-200">
              {attr.name}
            </p>
            <input
              {...register(`attributes.${index}.value` as const)}
              defaultValue={attr.value}
              className="text-gray-700 mb-1 w-70 border rounded-md px-3 py-1 bg-gray-50 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
            />

            {/* <input
              type="hidden"
              {...register(`attributes.${index}.name` as const)}
              value={attr.name}
            /> */}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all mb-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner size={32} /> : "ذخیره محصول"}
      </button>
    </form>
  );
}
