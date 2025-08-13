/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from 'axios';
import { BASE_URL } from "./constants";

export class ApiError extends Error {
  public readonly status: number;
  public readonly response: unknown;

  constructor(message: string, status: number, response: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.response = response;
  }
}

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response) {
      throw new ApiError(
        (err.response.data as any)?.message || 'Request failed',
        err.response.status,
        err.response.data
      );
    }
    if (err.request) {
      throw new ApiError('No response from server', 0, null);
    }
    throw new ApiError(err.message, 0, null);
  }
);

export async function get<T>(url: string, params?: any): Promise<T> {
  const res = await api.get<T>(url, { params });
  return res.data;
}

export async function post<T>(url: string, data: any): Promise<T> {
  const res = await api.post<T>(url, data);
  return res.data;
}


export async function put<T = any>(url: string, data?: any, config = {}) {
  try {
    const response = await api.put<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || "Server error",
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: "Network error",
      };
    } else {
      throw {
        status: -1,
        message: error.message,
      };
    }
  }
}

export async function patch<T>(url: string, data?: any, config = {}): Promise<T> {
  try {
    const response = await api.patch<T>(url, data, config);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || "Server error",
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: "Network error",
      };
    } else {
      throw {
        status: -1,
        message: error.message,
      };
    }
  }
}

export async function del<T>(url: string, config = {}, data?: any): Promise<T> {
  try {
    const response = await api.delete<T>(url, {
      ...config,
      data,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || "Server error",
      };
    } else if (error.request) {
      throw {
        status: 0,
        message: "Network error",
      };
    } else {
      throw {
        status: -1,
        message: error.message,
      };
    }
  }
}