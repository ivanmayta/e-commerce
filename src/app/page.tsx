import HeroSection from "@/components/sections/hero"
import { noto_sans } from "@/fonts/fonts"

import Products from "@/components/sections/products"
import { getProductFromGoogleSheet } from "@/data/api"
export default async function Home() {
    const products = await getProductFromGoogleSheet()

    return (
        <>
            <header></header>
            <main className={`${noto_sans.className}`}>
                <HeroSection />
                {/* <div className="max-w-5xl mx-auto">
                    {JSON.stringify(products)}
                </div> */}
                <Products products={products} />
            </main>

            <footer className=" top-auto row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm py-2"
                    href="https://iverse.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Desarrollado por iverse.dev
                </a>
            </footer>
        </>
    )
}
