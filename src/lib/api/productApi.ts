import { ProductDetailResponse } from "@/types/product_detail";
import { get, post } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { CommentResponse } from "@/types/comment";

export async function getProductDetail(id: string) {
  return get<ProductDetailResponse>(`${API_ENDPOINTS.PRODUCT_DETAIL}/${id}`);
}

export async function getProductComment(id: string) {
  return get<CommentResponse>(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postProductComment(id: string, data:any) {
  return post(`${API_ENDPOINTS.PRODUCT_COMMENT}/${id}`, data);
}
