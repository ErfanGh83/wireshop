"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormValues, createProductSchema } from "@/zod/schemas";
import { FiTrash2, FiPlus } from "react-icons/fi";
import { postProduct } from "@/lib/api/adminApi";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";

const CATEGORIES = [
  { id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251", name: "network cable" },
  { id: "247b24a4-887d-416f-82c2-460aecbcb9b6", name: "wire & power cable" },
  { id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd", name: "coaxial cable" },
  { id: "d0167d24-263c-4793-a468-9740f7d5eb2f", name: "fiber optic cable" },
  {
    id: "8f1de3da-f360-48d9-a07f-50347811d225",
    name: "telecommunication cable",
  },
  { id: "8768365a-741a-4a95-9daa-69dfe9beeaf4", name: "equipment" },
  { id: "f1489dcd-54af-472e-8d2a-7b249ca747a1", name: "miscellaneous" },
];

const ATTRIBUTE_KEYS = [
  { id: "f64f85d9-684f-4186-9fc4-b6be0e432ee5", name: "shielding" },
  { id: "2fa1992c-269c-4892-9547-1065af1ce48b", name: "jacket" },
  { id: "8144706b-7830-4916-a3c6-658e830ce3bd", name: "core material" },
  { id: "05f1aa3f-b26f-4819-b1ba-5b0628244e3e", name: "test" },
  { id: "775cd291-48af-417a-af58-c8aff0111cdf", name: "type" },
];

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
      categoryId: CATEGORIES[0].id as any,
      attributes: [{ key: ATTRIBUTE_KEYS[0].id as any, value: "" }],
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

  console.log("errors.attributes", errors.attributes);

  const onSubmit = (data: createProductFormValues) => {
    const att: Record<string, string> = {};
    data.attributes.forEach((item) => {
      att[item.key] = item.value;
    });
    postProduct({ ...data, attributes: att })
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
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
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
          دسته‌بندی
        </label>
        <select
          {...register("categoryId")}
          className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${
            errors.categoryId ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">انتخاب دسته‌بندی</option>
          {CATEGORIES.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">
            {errors.categoryId.message}
          </p>
        )}
      </div>

      <div>
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
          ویژگی‌ها
        </label>
        {attrFields.map((field, i) => (
          <>
            <div key={field.id} className="flex gap-2 mb-2">
              <select
                {...register(`attributes.${i}.key`)}
                className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${errors.attributes?.[i]?.value}`}
              >
                <option value="">انتخاب ویژگی</option>
                {ATTRIBUTE_KEYS.map((attr) => (
                  <option key={attr.id} value={attr.id}>
                    {attr.name}
                  </option>
                ))}
              </select>
              <input
                {...register(`attributes.${i}.value`)}
                placeholder="مقدار"
                className={`flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-700 ${errors.attributes?.[i]?.key}`}
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
              <p className="text-red-500 mb-2 mt-[-5px] text-sm">
                {errors.attributes[i]?.key?.message}
              </p>
            )}
            {errors.attributes?.[i]?.value && (
              <p className="text-red-500 mb-2 mt-[-5px] text-sm">
                {errors.attributes[i]?.value?.message}
              </p>
            )}
          </>
        ))}
        {errors.attributes?.root && (
          <p className="text-red-500 text-sm">
            {errors.attributes.root.message}
          </p>
        )}
        {/* {errors.attributes?.[i]?.value && (
          <p className="text-red-500 text-sm">
            {errors.attributes[i]?.value?.message}
          </p>
        )} */}
        <button
          type="button"
          onClick={() =>
            appendAttr({ key: ATTRIBUTE_KEYS[0].id as any, value: "" })
          }
          className="mt-2 flex items-center gap-1 text-blue-600 cursor-pointer hover:text-blue-700 transition-all dark:text-purple-600 hover:dark:text-purple-500"
        >
          <FiPlus /> ویژگی جدید
        </button>
      </div>

      <div>
        <label
          className={"block mb-1 font-medium text-gray-700 dark:text-gray-300"}
        >
          لینک تصاویر
        </label>
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
