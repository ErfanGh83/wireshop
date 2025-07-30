"use client";

import { fetchProducts } from "@/lib/api/action";
import { ProductsResponse, IProduct, Filters } from "@/types/products";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import NormalProductContainer from "./NormalProductContainer";

interface LoadMoreProps {
    filters?: Filters | null;
    search?: string;
    order?: string;
}

const LoadMore = ({ filters, search, order }: LoadMoreProps) => {
    const { ref, inView } = useInView();

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const loadProducts = async (pageNum: number, reset = false) => {
        setLoading(true);
        try {
            const res: ProductsResponse = await fetchProducts({ 
                page: pageNum, 
                filters,
                search,
                order
            }) as ProductsResponse;
            
            if (reset) {
                setProducts(res.products);
                setPage(2); // Next load will be page 2
                setHasMore(res.products.length >= 12); // Assuming 12 is your limit
            } else {
                setProducts(prev => [...prev, ...res.products]);
                setPage(prev => prev + 1);
                setHasMore(res.products.length > 0);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    // Reset products when filters/search/order change
    useEffect(() => {
        setInitialLoad(false);
        loadProducts(1, true);
    }, [filters, search, order]);

    // First load (only if no filters/search/order)
    useEffect(() => {
        if (initialLoad) {
            loadProducts(1, true);
        }
    }, [initialLoad]);

    // Load more when visible
    useEffect(() => {
        if (inView && hasMore && !loading && !initialLoad) {
            loadProducts(page);
        }
    }, [inView]);

    return (
        <>
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
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