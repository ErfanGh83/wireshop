import { API_ENDPOINTS } from "./constants";
import { post, get } from './apiClient';
import { normalizeIranianPhone, toEnglishDigits } from "../utils";
import { FullUserInfo, UserInfo } from "@/components/auth/useAuthUser";
import { Address } from "@/types/address";

export async function requestOtp(phone: string) {
  const fixedPhone = normalizeIranianPhone(phone)
  return post(API_ENDPOINTS.REQUEST_OTP, { phone: fixedPhone });
  // Handles 200, 409, 500 errors
}

export async function verifyOtp(phone: string, code: string) {
  const fixedPhone = normalizeIranianPhone(phone)
  return post(API_ENDPOINTS.VERIFY_OTP, { phone: fixedPhone, code });
  // Handles 200, 400, 500 errors
}

export async function createUser(phone: string, password: string, birthdate: string) {
  const fixedBirthdate = toEnglishDigits(birthdate);
  const fixedPhone = normalizeIranianPhone(phone)
  return post(API_ENDPOINTS.CREATE_USER, { phone:fixedPhone, password, birthdate:fixedBirthdate });
  // Handles 201 (JWT returned), 400
}

export async function login(phone: string, password: string) {
  const fixedPhone = normalizeIranianPhone(phone)
  return post(API_ENDPOINTS.LOGIN, { phone: fixedPhone, password });
  // Handles 200 (JWT returned), 401, 404
}

export async function logout() {
  return post(API_ENDPOINTS.LOGOUT, {});
  // Handles 200
}

export async function whoAmI():Promise<UserInfo> {
  return get(API_ENDPOINTS.WHO_AM_I);
  // Handles 200, 401
}

export async function getProfile():Promise<FullUserInfo> {
  return get(API_ENDPOINTS.GET_PROFILE);
}

export async function addNewAddress(address: Address) {
  return post(API_ENDPOINTS.ADD_ADDRESS, {address})
}