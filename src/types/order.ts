import { IProduct } from "./products"

interface OrderItem extends IProduct {
  quantity: number
  unitPrice: number
}

interface Order {
  id: string
  status: "completed" | "cancelled" | "in_progress"
  products: OrderItem[]
  eta?: Date
  totalPrice: number
  createdAt: string
  updatedAt?: string
  customerId: string
  paymentMethod?: "credit_card" | "paypal" | "bank_transfer" | "cash_on_delivery"
  shippingAddress?: string
}

export type { Order, OrderItem }
