export const BASE_URL = "http://localhost:8080";
// export const BASE_URL = 'https://dummyjson.com'
export const API_ENDPOINTS = {
  CREATE_USER: "/api/auth/signup/complete", //method: POST, request body: phone number, 200: Verification code sent, 409: User already exists, 500: Faild to send sms or Internal server error.
  REQUEST_OTP: "/api/auth/signup/send-code", //method: POST, request body: phone number + verfication code, 200: Phone number verified, 400: Invalid or expired code, 500: Internal server error.
  VERIFY_OTP: "/api/auth/signup/verify", //method: POST, request body: phone number + password + birthdate, 201: Signup successful (gives a JWT token), 400: Phone still not verified.
  LOGIN: "/api/auth/login", //method: POST, request body: phone number + password, 200: Login successful (gives a JWT token), 401: Invalid password, 404: User not found.
  LOGOUT: "/api/auth/logout", //method: POST, 200: Logged out successfully.
  WHO_AM_I: "/api/auth/whoami", //method: GET, 200: Current user info, 401: Unauthorized.
  GET_PROFILE: "/api/user/my-profile",
  FP_REQUEST_OTP: "/api/auth/forgot-password/send-code", //method: POST, request body: phone number
  FP_VERIFY_OTP: "/api/auth/forgot-password/verify", //method: POST, request body: phone number + verification code
  FP_CHANGE_PASS: "/api/auth/forgot-password/change-password", //method: POST, request body: phone number + new password
  CHANGE_PROFILE: "/api/user/profile", //method: PUT
  ADD_ADDRESS: "/api/user/address",
  PRODUCTS: "/product",
};