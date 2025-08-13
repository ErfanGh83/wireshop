// lib/api/action.ts
"use server";

import { API_ENDPOINTS } from "@/lib/api/constants";
import { ApiError, get } from "./apiClient";
import { Filters } from "@/types/products";

type Props = {
  page?: number;
  search?: string | null;
  order?: string | null;
  filters?: Filters | null;
};

export const fetchProducts = async ({ page, search, order, filters }: Props) => {
  const limit = 12;
  const params: Record<string, string | number | boolean> = {};

  if (search) params.q = search;
  if (page !== undefined) {
    params.page = page;
    params.limit = limit;
  }
  if (order) params.sortBy = order;

  if (filters) {
    if (filters.brands?.length) params.brands = filters.brands.join(',');
    if (filters.priceRange) {
      params.minPrice = filters.priceRange[0];
      params.maxPrice = filters.priceRange[1];
    }
    if (filters.onlyInStock) params.inStock = true;
    if (filters.category) params.categoryId = filters.category;
  }

    try {
    return await get(API_ENDPOINTS.PRODUCTS, params);
  } catch (err) {
    if (err instanceof ApiError) {
      return { error: { status: err.status, message: err.message } };
    }
  }
};
