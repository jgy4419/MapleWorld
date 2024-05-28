import { fetchGet } from "@/services/get";

export async function GET() {
    const [date] = ["2024-05-25"];
    const urlString = `ranking/guild?date=${date}&ranking_type=1`;
    
    // 실제 get요청하는 함수.
    return fetchGet(urlString);
}