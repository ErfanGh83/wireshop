"use client";

import { fetchProducts } from "@/lib/api/action";
import { ProductsResponse, IProduct } from "@/types/products";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import NormalProductContainer from "./NormalProductContainer";

const LoadMore = () => {
    const { ref, inView } = useInView();

    const [page, setPage] = useState(2);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadProducts = async (pageNum: number) => {
        setLoading(true);
        try {
            const res: ProductsResponse = await fetchProducts({ page: pageNum }) as ProductsResponse;
            
            if (res.products.length > 0) {
                setProducts((prev) => [...prev, ...res.products]);
                setPage((prev) => prev + 1);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    // First load
    useEffect(() => {
        loadProducts(0);
    }, []);

    // Load more when visible
    useEffect(() => {
        if (inView && hasMore && !loading) {
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
