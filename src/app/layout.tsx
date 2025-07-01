import type { Metadata } from "next"
import "./globals.css"
import { metadata as md } from "@/data/metadata"
//metadatos
export const metadata: Metadata = md

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="e">
            <body className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
                {children}
            </body>
        </html>
    )
}
