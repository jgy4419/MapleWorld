import { fetchGet } from "@/services/get";
import { getToday } from "@/constants/common";

export async function GET() {
    // 항상 최신 날짜로 수정
    const date = getToday();
    const urlString = `ranking/overall?date=${date}`;

    return fetchGet(urlString);
}