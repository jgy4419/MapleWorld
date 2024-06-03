import { fetchGet } from "@/services/get";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const character_name = searchParams.get("character_name");
  const urlString = `/id?character_name=${character_name}`

  return fetchGet(urlString);
}