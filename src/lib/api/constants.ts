export const BASE_SOCKET_URL = "ws://localhost:8080";
export const BASE_URL = "http://localhost:8080";
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
  ALL_ORDERS: "/api/cart/list",
  ORDER_BY_ID: "/api/cart",
  ADD_USER_BY_ADMIN: "/api/user/new",
  COMPLETE_ORDER: "/api/cart/complete",
  ACTIVE_CART: "/api/cart/my",
  MODIFY_CART: "/api/cart/item",
  SELECTED_ADDRESS: "/api/cart/address",
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
  }
};

export const CATEGORY_IDS = [
  "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251",
  "247b24a4-887d-416f-82c2-460aecbcb9b6",
  "b1a56f01-1b41-4321-a29a-50bb2b5311fd",
  "d0167d24-263c-4793-a468-9740f7d5eb2f",
  "8f1de3da-f360-48d9-a07f-50347811d225",
  "8768365a-741a-4a95-9daa-69dfe9beeaf4",
  "f1489dcd-54af-472e-8d2a-7b249ca747a1",
] as const;

export const CATEGORIES = [
  {
    id: "247b24a4-887d-416f-82c2-460aecbcb9b6",
    name: "wire & power cable",
    attributes: [
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: [
          "electrical wire-flexible wire-PVC",
          "electrical wire-flexible wire-nylon",
          "electrical wire-solid wire",
          "electrical wire-ground wire",
          "power cable-flexible cable",
          "power cable-solid cable",
          "power cable-power cable",
          "power cable-fire alarm cable",
          "power cable-AWG control cable",
          "power cable-AC cable",
          "power cable-aluminum cable",
          "power cable-industrial cable-medium voltage",
          "power cable-industrial cable-high voltage",
        ],
      },
    ],
  },
  {
    id: "5268ac1c-3f9c-4b27-a92d-b2dfeccd9251",
    name: "network cable",
    attributes: [
      {
        id: "2fa1992c-269c-4892-9547-1065af1ce48b",
        name: "jacket",
        options: ["PVC", "LSZH", "(outdoor)PE", "Double"],
      },
      {
        id: "8144706b-7830-4916-a3c6-658e830ce3bd",
        name: "core material",
        options: ["copper", "cca"],
      },
      {
        id: "05f1aa3f-b26f-4819-b1ba-5b0628244e3e",
        name: "test",
        options: ["without-test", "with-test-channel", "with-test-permanent"],
      },
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: ["CAT5", "CAT6", "CAT6a", "CAT7"],
      },
      {
        id: "f64f85d9-684f-4186-9fc4-b6be0e432ee5",
        name: "shielding",
        options: ["UTP", "FTP", "STP", "SFTP"],
      },
    ],
  },
  {
    id: "b1a56f01-1b41-4321-a29a-50bb2b5311fd",
    name: "coaxial cable",
    attributes: [
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: [
          "CCTV cable-RG59",
          "CCTV cable-RG6",
          "CCTV cable-RG11",
          "CCTV cable-combo",
          "antenna cable",
          "radio cable",
        ],
      },
    ],
  },
  {
    id: "d0167d24-263c-4793-a468-9740f7d5eb2f",
    name: "fiber optic cable",
    attributes: [
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: ["single mode", "multi mode"],
      },
    ],
  },
  {
    id: "8f1de3da-f360-48d9-a07f-50347811d225",
    name: "telecommunication cable",
    attributes: [
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: [
          "aerial telecom cable",
          "underground telecom cable",
          "telecom wires",
        ],
      },
    ],
  },
  {
    id: "8768365a-741a-4a95-9daa-69dfe9beeaf4",
    name: "equipment",
    attributes: [
      {
        id: "775cd291-48af-417a-af58-c8aff0111cdf",
        name: "type",
        options: [
          "network-patch cord",
          "network-patch panel",
          "network-rack",
          "network-trunking",
          "network-connectors",
          "network-cable management",
          "wire & cable-tray",
          "wire & cable-conduit",
          "wire & cable-duct",
          "wire & cable-electrical panel",
          "wire & cable-connectors",
          "coaxial",
          "telecommunication",
          "tools",
        ],
      },
    ],
  },
  {
    id: "f1489dcd-54af-472e-8d2a-7b249ca747a1",
    name: "miscellaneous",
    attributes: [],
  },
];