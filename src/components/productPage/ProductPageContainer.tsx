"use client";

import MainLayout from "@/components/layouts/MainLayout";
import ProductDetailSpec from "@/components/productPage/spec/ProductDetailSpec";
import ProductCommentForm from "@/components/productPage/comment/ProductCommentForm";
import ProductCommentContainer from "@/components/productPage/comment/ProductCommentContainer";
import { ProductDetailResponse } from "@/types/product_detail";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { addCartItem } from "@/lib/api/cartApi";
import { toast } from "react-toastify";
import { getProductDetail } from "@/lib/api/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BASE_URL } from "@/lib/api/constants";
import Image from "next/image";

export default function ProductPageContainer() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [product, setProduct] = useState<ProductDetailResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    if (!id) return;

    getProductDetail(id)
      .then((res) => {
        setProduct(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        setError("خطا در دریافت محصول.");
      });
  }, [id]);

  const handleSubmit = () => {
    if (product?.stock && quantity > product.stock) {
      toast.error(`حداکثر موجودی کالا ${product.stock} واحد است.`);
      return;
    }

    if (product && quantity > 0) {
      console.log(product);
      addCartItem({ productId: product.id, quantity })
        .then(() => {
          toast.success("محصول با موفقیت به سبد خرید اضافه شد");
          setQuantity(0);
        })
        .catch((err) =>
          toast.error(err.response?.message || err.message || "خطایی رخ داد")
        );
    }
  };

  const formatPrice = (value: number) => value.toLocaleString("fa-IR");

  if (!id) {
    return (
      <MainLayout>
        <div
          dir="ltr"
          className="overflow-y-auto size-full pb-20 md:pb-6 bg-white dark:bg-slate-900 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto"
        >
          <div className="bg-white  md:mb-0 dark:bg-slate-800 shadow-xl rounded-2xl md:p-6 p-4 w-full h-full">
            <div className="text-center mt-10">شناسه محصول یافت نشد.</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div
          dir="ltr"
          className="overflow-y-auto size-full pb-20 md:pb-6 bg-white dark:bg-slate-900 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto"
        >
          <div className="bg-white  md:mb-0 dark:bg-slate-800 shadow-xl rounded-2xl md:p-6 p-4 w-full h-full">
            <div className="text-center mt-10 text-red-500">{error}</div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div
          dir="ltr"
          className="overflow-y-auto size-full pb-20 md:pb-6 bg-white dark:bg-slate-900 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto"
        >
          <div className="bg-white  md:mb-0 dark:bg-slate-800 shadow-xl rounded-2xl md:p-6 p-4 w-full h-full">
            <div className="flex justify-center items-center mt-10">
              loading...
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div
        dir="ltr"
        className="overflow-y-auto size-full pb-20 md:pb-6 bg-white dark:bg-slate-900 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto"
      >
        <div className="bg-white  md:mb-0 dark:bg-slate-800 shadow-xl overflow-y-auto md:overflow-y-hidden rounded-2xl md:p-6 p-4 w-full h-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {/* Product Image */}
          <div
            dir="rtl"
            className="flex justify-center items-center md:col-span-2"
          >
            {product.images && product.images.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="select-none h-130"
              >
                {product.images.map((src, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center"
                  >
                    <Image
                      crossOrigin="anonymous"
                      src={BASE_URL + src.url}
                      alt={`product-${index}`}
                      priority
                      width={200}
                      height={200}
                      className="h-full w-full object-contain "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>تصویری برای نمایش موجود نیست.</p>
            )}
          </div>

          {/* Product Details */}
          <div
            dir="rtl"
            className="flex flex-col justify-start space-y-4 md:col-span-3 lg:col-span-4 md:overflow-y-auto pr-1 pt-10"
          >
            <div className="border-r-6 rounded-md p-2 flex flex-col justify-start space-y-4 col-span-3 border-blue-100">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              {product.price ? (
                <>
                  <p className="text-xl font-semibold">
                    قیمت:{" "}
                    <span className="relative inline-block">
                      {product.discount && (
                        <span className="absolute left-0 right-0 top-1/2 h-[1.5px] bg-red-500 -translate-y-1/2"></span>
                      )}
                      {formatPrice(product.price)}{" "}
                    </span>
                    ریال به ازای هر واحد
                  </p>
                  {/* {product.discount && (
                    <p className="font-semibold">
                      قیمت با {product.discount.percentage}% تخفیف:{" "}
                      {(100 - product.discount.percentage) * product.price}
                    </p>
                  )} */}
                  {product.discount?.percentage && (
                    <p className="font-semibold text-green-600">
                      قیمت با {product.discount.percentage}% تخفیف:{" "}
                      {(
                        ((100 - product.discount.percentage) / 100) *
                        product.price
                      ).toLocaleString("fa-IR")}{" "}
                      ریال
                    </p>
                  )}
                </>
              ) : (
                <p className="text-lg">
                  به علت نوسانات بازار برای اطلاع از قیمت تماس بگیرید.
                </p>
              )}
              <p className="text-sm text-gray-700 dark:text-gray-200">
                {product.description}
              </p>

              {/* Length Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  min={1}
                  className="px-3 py-2 w-20 md:w-40 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-blue-100 hover:scale-105 ease-out transition-all cursor-pointer hover:bg-blue-200 hover:text-blue-900 text-black px-4 py-2 rounded-lg dark:bg-slate-500 hover:dark:text-black dark:text-gray-100"
                >
                  افزودن به سبد خرید
                </button>
              </div>
              <p className="text-md">هر واحد یک {product.unit}</p>
              <p className="text-md">حداکثر موجودی {product.stock} واحد</p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">مشخصات کابل</h2>
              {product.attributes && product.attributes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                  {product.attributes.map((item) => (
                    <ProductDetailSpec
                      id={item.id}
                      label={item.name}
                      value={item.value}
                      key={item.id}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-sm">مشخصاتی برای این کالا تعریف نشده.</p>
              )}
            </div>

            <ProductCommentForm id={product.id} />

            <ProductCommentContainer id={product.id} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
