import { Product } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CartItem = {
    product: Product
    quantity: number
}

type CartStore = {
    items: CartItem[]
    whatsapp: string
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    getTotal: () => number
    getTotalItems: () => number
    setWhatsapp: (whatsapp: string) => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            whatsapp: "",

            addItem: (product: Product) => {
                const currentItems = get().items
                const existingItem = currentItems.find(
                    (item) => item.product.id === product.id
                )

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    })
                } else {
                    set({ items: [...currentItems, { product, quantity: 1 }] })
                }
            },

            removeItem: (productId: string) => {
                set({
                    items: get().items.filter(
                        (item) => item.product.id !== productId
                    ),
                })
            },

            updateQuantity: (productId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId)
                    return
                }

                set({
                    items: get().items.map((item) =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    ),
                })
            },

            clearCart: () => set({ items: [] }),

            getTotal: () => {
                return get().items.reduce(
                    (total, item) =>
                        total + Number(item.product.price) * item.quantity,
                    0
                )
            },

            getTotalItems: () => {
                return get().items.reduce(
                    (total, item) => total + item.quantity,
                    0
                )
            },
            setWhatsapp: (whatsapp: string) => set({ whatsapp }),
        }),
        {
            name: "cart-storage",
        }
    )
)
