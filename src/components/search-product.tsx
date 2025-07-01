import { ReactNode } from "react"
import { Package, Search } from "lucide-react"
import { Product } from "@/types/types"
import { useFilters } from "@/hooks/usefilters"

interface SearchProps<T> {
    items: T[]
    placeholder: string
    emptyMessage: string
    noResultsMessage: string
    children: (filteredItems: Product[]) => ReactNode
}

export function SearchProduct<T>({
    items,
    placeholder,
    emptyMessage,
    noResultsMessage,
    children,
}: SearchProps<T>) {
    const { filters, setFilters, filteredProductsBySearch } = useFilters()

    const filteredItems = filteredProductsBySearch(items as Product[])

    return (
        <section className={`flex flex-col gap-2  max-w-5xl mx-auto  py-4`}>
            <div className="flex gap-2 border-t-1 border-b-1 border-rose-200/20 py-4 items-center md:flex-row flex-col-reverse ">
                <div className={`flex-1 flex gap-2 font-medium text-sm `}>
                    <span className="text-base">Productos</span>
                    <div className="bg-foreground text-black rounded-2xl px-2 border border-gray-300 flex items-center">
                        Todos
                    </div>
                    <div className=" rounded-2xl px-2 border border-gray-300 flex items-center">
                        Camisas
                    </div>
                    <div className=" rounded-2xl px-2 border border-gray-300 flex items-center">
                        Blusas
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={filters.search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFilters({ ...filters, search: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-pink-200 focus:border-pink-200 transition-all duration-200"
                    />
                </div>
            </div>
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold">{emptyMessage}</h3>
                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                        No se encontraron productos en tu inventario. Añade tu
                        primer producto para comenzar.
                    </p>
                </div>
            ) : filteredItems.length === 0 ? (
                <p className="text-center text-gray-500">{noResultsMessage}</p>
            ) : (
                children(filteredItems)
            )}
        </section>
    )
}
