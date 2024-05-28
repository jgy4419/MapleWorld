import { fetchGet } from "@/services/get";

export async function GET() {
    const [date] = ["2024-05-25"];
    const urlString = `ranking/overall?date=${date}`;

    return fetchGet(urlString);
}