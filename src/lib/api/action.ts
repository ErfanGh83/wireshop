"use server"

import { API_ENDPOINTS } from "@/lib/api/constants"
import { get } from "./apiClient";

type Props = {
    page?: number
    order?: string
}

export const fetchProducts = async ({ page, order }:Props) => {
    let params = ''
    const limit = 12

    if(page) {
        params = `skip=${page*limit}&limit=${limit}`
    }

    if(order){
        params = params + `&order=${order}`
    }
    
    return get(API_ENDPOINTS.PRODUCTS, params);
}