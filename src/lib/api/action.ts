"use server"

import { API_ENDPOINTS } from "@/lib/api/constants"
import { get } from "./apiClient";

type Props = {
    page?: number
    search?: string
    order?: string
}

export const fetchProducts = async ({ page, search, order }:Props) => {
    let params = ''
    const limit = 12

    if(search){
        params = `q=${search}`
    }

    if(page) {
        params = `&skip=${page*limit}&limit=${limit}`
    }

    if(order){
        params = params + `&sortBy=${order}`
    }

    console.log(params)
    
    return get(API_ENDPOINTS.PRODUCTS, params);
}