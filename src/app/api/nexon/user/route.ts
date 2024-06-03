import { fetchGet } from "@/services/get";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const ocid = searchParams.get("ocid");
    const urlString = `character/basic?ocid=${ocid}`;

    return fetchGet(urlString);
}