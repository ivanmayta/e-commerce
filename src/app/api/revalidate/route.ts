import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export default async function GET() {
    await revalidatePath("/")
    return NextResponse.json({ revalidated: true })
}
