import { IProduct } from "./products"

interface ICart {
    id: string
    data: IProduct[]
    total: number
}

export type {ICart}