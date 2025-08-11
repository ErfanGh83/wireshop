"use server"

import { API_ENDPOINTS } from "@/lib/api/constants"
import { get } from "./apiClient";
import { Filters } from "@/types/products";

type Props = {
    page?: number
    search?: string | null
    order?: string | null
    filters?: Filters | null
}

export const fetchProducts = async ({ page, search, order, filters }: Props) => {
    const limit = 12;
    const params = new URLSearchParams();

    if (search) {
        params.append('q', search);
    }

    if (page !== undefined) {
        params.append('page', String(page - 1));
        params.append('limit', String(limit));
    }

    if (order) {
        params.append('sortBy', order);
    }

    if (filters) {
        if (filters.brands?.length > 0) {
            params.append('brands', filters.brands.join(','));
        }
        if (filters.priceRange) {
            params.append('minPrice', String(filters.priceRange[0]));
            params.append('maxPrice', String(filters.priceRange[1]));
        }
        if (filters.onlyInStock) {
            params.append('inStock', 'true');
        }
        if (filters.category) {
            params.append('category', filters.category);
        }
    }

    return get(API_ENDPOINTS.PRODUCTS, params.toString());
}