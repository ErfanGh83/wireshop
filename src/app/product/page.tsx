"use client";

import MainLayout from "@/components/layouts/MainLayout";
import ProductImageSlider from "@/components/productPage/slider/ProductImageSlider";
import ProductDetailSpec from "@/components/productPage/spec/ProductDetailSpec";
import ProductCommentForm from "@/components/productPage/comment/ProductCommentForm";
import ProductCommentContainer from "@/components/productPage/comment/ProductCommentContainer";
import { get } from "@/lib/api/apiClient";
import { API_ENDPOINTS, BASE_URL } from "@/lib/api/constants";
import { ProductDetail } from "@/types/product_detail";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { addCartItem } from "@/lib/api/cartApi";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!id) return;

    get<ProductDetail>(`${BASE_URL}${API_ENDPOINTS.PRODUCT_DETAIL}/${id}`)
      .then(setProduct)
      .catch((err) => {
        console.error(err);
        setError("خطا در دریافت محصول.");
      });
  }, [id]);

  const handleSubmit = () => {
    const quantity = Number(inputRef.current?.value);
    if (product && quantity > 0) {
      addCartItem(product.id, quantity);
    }
  };

  if (!id) {
    return (
      <MainLayout>
        <div className="text-center mt-10">شناسه محصول یافت نشد.</div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="text-center mt-10 text-red-500">{error}</div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center mt-10">loading...</div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
        <div className="bg-white dark:bg-slate-600 shadow-xl overflow-y-auto md:overflow-y-hidden rounded-2xl md:p-6 p-4 w-full h-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {/* Product Image */}
          <div className="flex justify-center items-center md:col-span-2">
            <ProductImageSlider
              images={product.images}
              discount={0}
              isFeatured={false}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start space-y-4 md:col-span-3 lg:col-span-4 md:overflow-y-auto pr-1 pt-10">
            <div className="border-r-6 rounded-md p-2 flex flex-col justify-start space-y-4 col-span-3 border-blue-100">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xl font-semibold">
                هر واحد {product.weightKg} کیلوگرم
              </p>
              <p className="text-xl font-semibold">
                قیمت: {product.price} تومان به ازای هر واحد
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {product.description}
              </p>

              {/* Length Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  ref={inputRef}
                  min={1}
                  placeholder="واحد (کیلوگرم)"
                  className="px-3 py-2 w-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-blue-100 hover:scale-105 ease-out transition-all cursor-pointer hover:bg-blue-200 hover:text-blue-900 text-black px-4 py-2 rounded-lg dark:bg-slate-500 hover:dark:text-black dark:text-gray-100"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">مشخصات کابل</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                {product.attributes.map((item) => (
                  <ProductDetailSpec
                    label={item.name}
                    value={item.value}
                    key={item.id}
                  />
                ))}
              </div>
            </div>

            <ProductCommentForm />

            <ProductCommentContainer />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
