import { Metadata } from "next"
import businessInfo from "@/data/business.json"
export const metadata: Metadata = {
    title: businessInfo.name,
    description: businessInfo.description,
}
