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
  const params: Record<string, string | number | boolean | string[]> = {};

  // Always add page + limit
  if (page !== undefined) {
    params.page = page;
    params.limit = limit;
  }

  // --- SEARCH MODE ---
  if (search) {
    params.q = search;        // only q + page + limit

    // Directly call search endpoint
    try {
      return await get(API_ENDPOINTS.SEARCH, params);
    } catch (err) {
      if (err instanceof ApiError) {
        return { error: { status: err.status, message: err.message } };
      }
      return { error: { status: 500, message: 'Unknown error occurred' } };
    }
  }

  // --- PRODUCT LISTING MODE ---
  if (order) params.sortBy = order;

  const attributeValuesMap: Record<string, string[]> = {};

  if (filters) {
    if (filters.brand) params.brand = filters.brand;

    if (filters.priceRange) {
      params.minPrice = filters.priceRange[0];
      params.maxPrice = filters.priceRange[1];
    }

    if (filters.onlyInStock) params.inStock = true;

    // Category filter (JSON encoded)
    if (filters.category) {
      try {
        const cat = JSON.parse(filters.category);

        params.categoryId = cat.categoryId;

        if (cat.attributeId && cat.value) {
          if (!attributeValuesMap[cat.attributeId]) {
            attributeValuesMap[cat.attributeId] = [];
          }
          attributeValuesMap[cat.attributeId].push(cat.value);
        }

      } catch {
        params.categoryId = filters.category;
      }
    }

    // Additional attribute filters
    if (filters.attributes) {
      Object.entries(filters.attributes).forEach(([attributeId, values]) => {
        if (values?.length) {
          if (!attributeValuesMap[attributeId]) {
            attributeValuesMap[attributeId] = [];
          }
          attributeValuesMap[attributeId].push(...values);
        }
      });
    }
  }

  // Inject attributeValues into params
  Object.entries(attributeValuesMap).forEach(([attributeId, values]) => {
    params[`attributeValues[${attributeId}]`] = values;
  });

  try {
    return await get(API_ENDPOINTS.PRODUCTS, params);
  } catch (err) {
    if (err instanceof ApiError) {
      return { error: { status: err.status, message: err.message } };
    }
    return { error: { status: 500, message: 'Unknown error occurred' } };
  }
};
