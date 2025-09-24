import { API_ENDPOINTS } from "@/lib/api/constants";
import { ApiError, get } from "./apiClient";
import { Filters } from "@/types/products";
import { categoryIdParser, ParsedCategoryId } from "../utils";

type Props = {
  page?: number;
  search?: string | null;
  order?: string | null;
  filters?: Filters | null;
};

export const fetchProducts = async ({ page, search, order, filters }: Props) => {
  const limit = 12;
  const params: Record<string, string | number | boolean | string[]> = {};

  if (search) params.q = search;
  if (page !== undefined) {
    params.page = page;
    params.limit = limit;
  }
  if (order) params.sortBy = order;

  // Object to store attribute values by attribute ID
  const attributeValuesMap: Record<string, string[]> = {};

  if (filters) {
    if (filters.brand) params.brand = filters.brand;
    if (filters.priceRange) {
      params.minPrice = filters.priceRange[0];
      params.maxPrice = filters.priceRange[1];
    }
    if (filters.onlyInStock) params.inStock = true;
    
    // Handle category parsing
    if (filters.category) {
      try {
        const parsedCategory: ParsedCategoryId = categoryIdParser(filters.category);
        
        // Set the category ID
        params.categoryId = parsedCategory.categoryId;
        
        // Add the attribute value to our map
        if (!attributeValuesMap[parsedCategory.attributeId]) {
          attributeValuesMap[parsedCategory.attributeId] = [];
        }
        attributeValuesMap[parsedCategory.attributeId].push(parsedCategory.value);
        
      } catch (error) {
        console.error('Failed to parse category ID:', error);
        // Fallback: use the raw category ID if parsing fails
        params.categoryId = filters.category;
      }
    }

    // Handle additional attribute filters if you have them
    if (filters.attributes) {
      Object.entries(filters.attributes).forEach(([attributeId, values]) => {
        if (values && values.length > 0) {
          if (!attributeValuesMap[attributeId]) {
            attributeValuesMap[attributeId] = [];
          }
          attributeValuesMap[attributeId].push(...values);
        }
      });
    }
  }

  // Convert attribute values map to URL parameters
  Object.entries(attributeValuesMap).forEach(([attributeId, values]) => {
    if (values.length > 0) {
      params[`attributeValues[${attributeId}]`] = values;
    }
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