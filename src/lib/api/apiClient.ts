// lib/api/apiClient.ts
import { BASE_URL } from './constants';

/** Generic JSON types for request/response */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

/** Custom error type for API errors */
export class ApiError extends Error {
  public readonly status: number;
  public readonly response: unknown;

  constructor(message: string, status: number, response: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }
}

/** Helper to safely parse JSON, returns `unknown` */
const safeJsonParse = async (res: Response): Promise<unknown> => {
  try {
    return await res.json();
  } catch {
    return null;
  }
};

/** POST method with strict typing */
export async function post<TResponse>(
  endpoint: string,
  data: Json,
  options: Omit<RequestInit, 'method' | 'body'> = {}
): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(data),
    credentials: 'include',
    ...options,
  });

  const parsed = await safeJsonParse(response);

  if (!response.ok) {
    const message = typeof parsed === 'object' && parsed !== null && 'message' in parsed
      ? String((parsed as Record<string, unknown>).message)
      : 'Request failed';
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as TResponse;
}

/** GET method with strict typing */
export async function get<TResponse>(
  endpoint: string,
  options: Omit<RequestInit, 'method'> = {}
): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'GET',
    credentials: 'include',
    ...options,
  });

  const parsed = await safeJsonParse(response);

  if (!response.ok) {
    const message = typeof parsed === 'object' && parsed !== null && 'message' in parsed
      ? String((parsed as Record<string, unknown>).message)
      : 'Request failed';
    throw new ApiError(message, response.status, parsed);
  }

  return parsed as TResponse;
}
