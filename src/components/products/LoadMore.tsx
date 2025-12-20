import { fetchProducts } from "@/lib/api/action";
import { Filters } from "@/types/products";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import NormalProductContainer from "./NormalProductContainer";
import { LuCable } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

interface BackendProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  weightKg: number;
  stock: number;
  discount: number | null;
  images: string[];
  unit: string;
  category: { id: string; name: string };
  attributes: { id: string; name: string; value: string }[];
}

interface BackendResponse {
  data: BackendProduct[];
  page: number;
  limit: number;
  total: number;
}

interface Error {
  status: number;
  message: string;
}

interface BackendErrorResponse {
  error: Error;
}

interface LoadMoreProps {
  filters?: Filters | null;
  search?: string | null;
  order?: string | null;
}

const isBackendErrorResponse = (
  res: BackendResponse | BackendErrorResponse
): res is BackendErrorResponse => {
  return res && typeof res === "object" && "error" in res;
};

const LoadMore = ({ filters, search, order }: LoadMoreProps) => {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<BackendProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const loadProducts = async (pageNum: number, reset = false) => {
    setLoading(true);
    setError(null);

    const res = (await fetchProducts({
      page: pageNum,
      filters,
      search,
      order,
    })) as BackendResponse | BackendErrorResponse;

    if (isBackendErrorResponse(res)) {
      switch (res.error.status) {
        case 0:
        case 500:
          setError("خطای شبکه یا سرور");
          break;
        case 404:
          setError("محصولی با مشخصات داده شده یافت نشد");
          break;
        case 400:
          setError("محصولی با مشخصات داده شده یافت نشد");
          break;
        default:
          setError("خطا در بارگذاری محصولات");
      }
    } else {
      const newProducts = res.data ?? [];
      if (!newProducts.length) {
        setError("محصولی با مشخصات داده شده یافت نشد");
      }
      if (reset) {
        setProducts(newProducts);
        setPage(2);
        setHasMore(newProducts.length >= res.limit);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
        setPage((prev) => prev + 1);
        setHasMore(newProducts.length > 0);
      }
    }
    setLoading(false);
  };

  const handleRetry = () => loadProducts(1, true);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setProducts([]);
    loadProducts(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, search, order]);

  useEffect(() => {
    if (inView && hasMore && !loading && !error) {
      loadProducts(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasMore, loading, page, error]);

  return (
    <>
      {error && products.length === 0 ? (
        <div className="size-full flex flex-col pt-16 items-center justify-center gap-4">
          {error === "محصولی با مشخصات داده شده یافت نشد" ? (
            <>
              <div className="size-fit text-8xl text-gray-600 dark:text-gray-400 mt-24">
                <FaShoppingCart />
              </div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">
                {error}
              </p>
            </>
          ) : (
            <>
              <div className="size-fit text-8xl text-gray-600 dark:text-gray-400">
                <LuCable />
              </div>
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">
                خطای اتصال به شبکه رخ داده است
              </p>
              <button
                onClick={handleRetry}
                disabled={loading}
                className="mt-4 text-2xl cursor-pointer text-gray-700 dark:text-gray-400"
              >
                {loading && <VscLoading className="animate-spin mr-2" />}
                تلاش مجدد
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
            {products.map((product, index) => (
              <NormalProductContainer
                key={product.id + index}
                id={product.id}
                title={product.name}
                discount={product.discount}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                imageUrl={product.images.length ? product.images?.[0]?.url || "" : ""}
                price={product.price}
                // unit={product.unit}
                available={product.stock > 0}
                // discount={0}
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
