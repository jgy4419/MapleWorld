import { fetchGet } from "@/services/get";
import { getToday } from "@/constants/common";

export async function GET() {
    const date = getToday();
    const urlString = `ranking/overall?date=${date}`;

    return fetchGet(urlString);
}