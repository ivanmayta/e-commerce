"use client"
//import { products as mockProducts } from "@/data/productos"
import ProductCard from "../ui/product-card"
import { SearchProduct } from "../search-product"
import { useCartStore } from "@/hooks/store"
import { Product } from "@/types/types"

export default function Products({ products }: { products: Product[] }) {
    const { addItem } = useCartStore()
    return (
        <>
            <SearchProduct
                items={products}
                placeholder="Buscar productos..."
                emptyMessage="No hay productos"
                noResultsMessage="No se encontraron productos"
            >
                {(filteredItems) => (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3  gap-y-8 pb-8 sm:px-0 px-4">
                        {filteredItems.map((product) => (
                            <ProductCard.Root key={product.id} value={product}>
                                <ProductCard.Image />
                                <ProductCard.Information />
                                <ProductCard.Button
                                    onClick={() => {
                                        addItem(product)
                                    }}
                                />
                            </ProductCard.Root>
                        ))}
                    </div>
                )}
            </SearchProduct>
        </>
    )
}
