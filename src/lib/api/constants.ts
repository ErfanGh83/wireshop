export const BASE_SOCKET_URL = "";
export const BASE_URL = "https://electroelka.com";
export const API_ENDPOINTS = {
  CREATE_USER: "/api/auth/signup/complete", //method: POST, request body: phone number, 200: Verification code sent, 409: User already exists, 500: Faild to send sms or Internal server error.
  REQUEST_OTP: "/api/auth/signup/send-code", //method: POST, request body: phone number + verfication code, 200: Phone number verified, 400: Invalid or expired code, 500: Internal server error.
  VERIFY_OTP: "/api/auth/signup/verify", //method: POST, request body: phone number + password + birthdate, 201: Signup successful (gives a JWT token), 400: Phone still not verified.
  LOGIN: "/api/auth/login", //method: POST, request body: phone number + password, 200: Login successful (gives a JWT token), 401: Invalid password, 404: User not found.
  LOGOUT: "/api/auth/logout", //method: POST, 200: Logged out successfully.
  WHO_AM_I: "/api/auth/whoami", //method: GET, 200: Current user info, 401: Unauthorized.
  PRODUCT_DETAIL: "/api/product",
  PRODUCTS: "/api/product",
  MY_CONVERSATION: "/api/chat/my-conversation",
  ALL_CONVERSATIONS: "/api/chat",
  ALL_CART: "/api/cart",
  ALL_PRODUCT: "/api/product",
  ALL_ORDERS: "/api/order/list",
  ORDERS_HISTORY: "/api/order/history",
  COMPLETED_ORDERS: "/api/order/completed",
  ORDER_BY_ID: "/api/order",
  ADD_USER_BY_ADMIN: "/api/user/new",
  COMPLETE_ORDER: "/api/order/complete",
  ACTIVE_CART: "/api/cart/my",
  MODIFY_CART: "/api/cart/item",
  SELECTED_ADDRESS: "/api/cart/address",
  SEARCH: "/api/product/search",
  GET_PROFILE: "/api/user/my-profile",
  FP_REQUEST_OTP: "/api/auth/forgot-password/send-code", //method: POST, request body: phone number
  FP_VERIFY_OTP: "/api/auth/forgot-password/verify", //method: POST, request body: phone number + verification code
  FP_CHANGE_PASS: "/api/auth/forgot-password/change-password", //method: POST, request body: phone number + new password
  CHANGE_PROFILE: "/api/user/profile", //method: PUT
  ADD_ADDRESS: "/api/user/address",
  CHECK_ADMIN: "/api/auth/admin-check",
  PRODUCT_COMMENT: "/api/comment",
  PENDING_COMMENT: "/api/comment/pending",
  APPROVE_COMMENT: "/api/comment/approve",
  REJECT_COMMENT: "/api/comment/reject",
  CHECKOUT: "/api/purchase/url",
  SET_ACTIVE_ADDRESS: "/api/cart/address",
  GET_CATEGORIES: "/api/category",
  DISCOUNT_BY_PRODUCT_ID: "/api/discount/by-product",
  DISCOUNT: "/api/discount",
};

export const ERROR_MESSAGES = {
  admin: {
    400: "شماره تلفن قبلا ثبت شده.",
    401: "ابتدا وارد شوید.",
    403: "دوباره با دسترسی ادمین وارد شوید.",
    404: " یافت نشد.",
    409: "محصول وجود دارد.",
    500: "خطایی از سمت سرور رخ داد.",
  },
  create_product: {
    400: "شماره تلفن قبلا ثبت شده.",
    401: "ابتدا وارد شوید.",
    403: "دوباره با دسترسی ادمین وارد شوید.",
    404: " یافت نشد.",
    409: "محصول وجود دارد.",
    500: "خطایی از سمت سرور رخ داد.",
  },
  cart: {
    400: "مقدار نا معتبر یا موجودی نا کافی.",
    401: "دوباره وارد شوید.",
    404: "کاربر یا محصول یافت نشد",
    500: "خطایی درون سرور رخ داد",
  },
  comment: {
    400: "متن نا معتبر یا محصول یافت نشد.",
    401: "ابتدا وارد شوید.",
  },
  manage_comment: {
    400: "کامنت در وضعیت بررسی قرار ندارد.",
    401: "ابتدا وارد شوید.",
    403: "با دسترسی ادمین وارد شوید.",
    404: "کامنت یافت نشد.",
  },
  my_cart: {
    401: "لطفا وارد شوید",
    404: "سبد خرید فعالی ندارید",
    500: "بعدا دوباره امتحان کنید",
  },
  complete_cart: {
    401: "لطفا وارد شوید.",
    403: "با دسترسی ادمین وارد شوید.",
    404: "سبد خرید یافت نشد.",
    500: "بعدا دوباره امتحان کنید.",
  },
};
