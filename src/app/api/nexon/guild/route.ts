import { fetchGet } from "@/services/get";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const oguildId = searchParams.get("oguild_id");
    const urlString = `guild/basic?oguild_id=${oguildId}`;

    return fetchGet(urlString);
}