import { Order, OrdersResponse } from "@/types/cart";
import { del, forceDel, get, patch, patchForm, post, postForm } from "./apiClient";
import { API_ENDPOINTS } from "./constants";
import { Product, ProductListResponse } from "@/types/product";
import { CommentResponse } from "@/types/comment";
import { Cable } from "@/types/categories";
import { DiscountPost, DiscountResponse } from "@/types/discount";

export async function getAllProduct(pageNum:number = 1) {
  return get<ProductListResponse>(`${API_ENDPOINTS.ALL_PRODUCT}?page=${pageNum}`);
}

export async function patchProduct(id: string, data: FormData) {
  return patchForm(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`, data);
}

export async function getProductById(id: string) {
  return get<Product>(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`);
}

export async function postProduct(data: FormData) {
  return postForm(API_ENDPOINTS.ALL_PRODUCT, data);
}

export async function getAllOrders() {
  return get<OrdersResponse>(API_ENDPOINTS.ALL_ORDERS);
}

export async function getAllCompletedOrders() {
  return get<OrdersResponse>(API_ENDPOINTS.COMPLETED_ORDERS);
}

export async function getOrderById(id: string) {
  return get<Order>(`${API_ENDPOINTS.ORDER_BY_ID}/${id}`);
}

export async function getOrdersHistory() {
  return get<Order[]>(API_ENDPOINTS.ORDERS_HISTORY);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createNewUser(data: any) {
  return post(API_ENDPOINTS.ADD_USER_BY_ADMIN, data);
}

export async function completeOrder(id: string) {
  return patch(`${API_ENDPOINTS.COMPLETE_ORDER}/${id}`);
}

export async function checkAdmin() {
  return get(API_ENDPOINTS.CHECK_ADMIN);
}

export async function getAllComment() {
  return get<CommentResponse>(API_ENDPOINTS.PENDING_COMMENT);
}

export async function approveComment(id: string) {
  return patch(API_ENDPOINTS.APPROVE_COMMENT + "/" + id);
}

export async function rejectComment(id: string) {
  return patch(API_ENDPOINTS.REJECT_COMMENT + "/" + id);
}

export async function getCategories() {
  return get<Cable[]>(API_ENDPOINTS.GET_CATEGORIES);
}

export async function deleteProduct(id: string) {
  return forceDel(`${API_ENDPOINTS.ALL_PRODUCT}/${id}`);
}
export async function deleteProductForce(id: string) {
  return del(`${API_ENDPOINTS.ALL_PRODUCT}/${id}/force`);
}

export async function deleteImage(productId: string, imageId:string) {
  return del(`${API_ENDPOINTS.ALL_PRODUCT}/${productId}/image/${imageId}`);
}

export async function getDiscountByProductId(productId: string) {
  return get<DiscountResponse>(`${API_ENDPOINTS.DISCOUNT_BY_PRODUCT_ID}/${productId}`);
}

export async function removeDiscount(productId: string) {
  return del(`${API_ENDPOINTS.DISCOUNT}/${productId}`);
}

export async function postDiscount(product: DiscountPost) { 
  return post(API_ENDPOINTS.DISCOUNT, product);
}

export async function patchDiscount(productId: string, product: DiscountPost) { 
  return patch(`${API_ENDPOINTS.DISCOUNT}/${productId}`, product);
}

export async function getAllFilteredProducts(queryParams:string) {
  return get<ProductListResponse>(`${API_ENDPOINTS.ALL_PRODUCT}${queryParams ? `?${queryParams}`: ""}`);
}