import { fetchGet } from "@/services/get";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const [ guildName, worldName ] = [
        searchParams.get("guild_name"),
        searchParams.get("world_name")
    ];
    const urlString = `/guild/id?guild_name=${guildName}&world_name=${worldName}`;

    return fetchGet(urlString);
}