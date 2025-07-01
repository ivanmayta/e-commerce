import { Product } from "@/types/types"
import Papa from "papaparse"

export const getProductFromGoogleSheet = async () => {
    const url =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYtUe2cKXDMD9vchzeP25hVSGRWTFdYposYwq0-EiPSJZMVfMLlS0gW9Quk_imI8wUx_kRpshiOQ-i/pub?output=csv"

    try {
        const response = await fetch(url, {
            method: "GET",
            cache: "force-cache",
        })

        if (!response.ok) throw new Error("Failed to fetch CSV")

        const csvText = await response.text()
        console.log(csvText)
        return new Promise<Product[]>((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                complete: (results) => resolve(results.data as Product[]),
                error: (error: unknown) => reject(error),
            })
        })
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}
