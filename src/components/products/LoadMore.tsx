"use client";

import { fetchProducts } from "@/lib/api/action";
import { ProductsResponse, IProduct, Filters } from "@/types/products";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import NormalProductContainer from "./NormalProductContainer";
import { LuCable } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

interface LoadMoreProps {
  filters?: Filters | null;
  search?: string | null;
  order?: string | null;
}

const LoadMore = ({ filters, search, order }: LoadMoreProps) => {
  const { ref, inView } = useInView();

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<null | string>(null);

  const loadProducts = async (pageNum: number, reset = false) => {
    setLoading(true);
    setError(null);

    try {
      const res = (await fetchProducts({
        page: pageNum,
        filters,
        search,
        order,
      })) as ProductsResponse;

      if (reset) {
        setProducts(res.products);
        setPage(2);
        setHasMore(res.products.length >= 12);
      } else {
        setProducts((prev) => [...prev, ...res.products]);
        setPage((prev) => prev + 1);
        setHasMore(res.products.length > 0);
      }
    } catch (err) {

      const stringError = (err as string).toString()

      if (stringError === 'TypeError: fetch failed') {
        setError("خطای شبکه یا سرور");
      }
      else if (stringError === 'ApiError: Request failed with status 404') {
        setError("محصولی با مشخصات داده شده یافت نشد")
      }
      else if (stringError === 'ApiError: Request failed with status 500') {
        setError("خطای شبکه یا سرور");
      }
      else {
        setError("خطا در بارگذاری محصولات");
      }
    }
    setLoading(false);
  };

  // Reload when filters/search/order change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setProducts([]);
    loadProducts(1, true);
  }, [filters, search, order]);

  // Infinite scroll trigger
  useEffect(() => {
    if (inView && hasMore && !loading && !error) {
      loadProducts(page);
    }
  }, [inView, hasMore, loading, page, error]);

  return (
    <>
      {error && products.length === 0 ? (
        <div
          className="size-full flex flex-col items-center justify-center gap-4"
        >

          {
            error === "محصولی با مشخصات داده شده یافت نشد" ?
              <div className="size-fit text-7xl">
                <FaShoppingCart color="gray"/>
              </div>
              :
              <div className="size-fit text-7xl">
                <LuCable />
              </div>
          }
          <p className="text-center text-xl sm:text-2xl xl:text-4xl text-black font-bold mt-8">{error}</p>
        </div>

      ) : (
        <>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 ">
            {products.map((product) => (
              <NormalProductContainer
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.thumbnail}
                price={product.price}
                isSpecial={product.rating > 4}
                discount={product.discountPercentage}
                description={product.description}
              />
            ))}
          </div>

          {hasMore && (
            <section className="w-full h-fit py-12 flex items-center justify-center">
              <div ref={ref} className="size-fit">
                {loading && <VscLoading className="animate-spin text-4xl" />}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default LoadMore;
