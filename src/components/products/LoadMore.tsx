"use client";

import { fetchProducts } from "@/lib/api/action";
import { ProductsResponse, IProduct, Filters } from "@/types/products";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import NormalProductContainer from "./NormalProductContainer";

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

  const [error, setError] = useState(false);
  console.log(error)
  const loadProducts = async (pageNum: number, reset = false) => {
    setLoading(true);
    setError(false); // reset on new load
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
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(true);
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
    if (inView && hasMore && !loading) {
      loadProducts(page);
    }
  }, [inView, hasMore, loading, page]);

  if (!products) return <p>Failed to load products. Please try again.</p>;

  return (
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
  );
};

export default LoadMore;
