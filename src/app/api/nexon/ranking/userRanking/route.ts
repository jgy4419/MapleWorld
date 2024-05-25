import { maple_api_url } from "@/util/constants";

export async function GET() {
    const [date] = ["2024-05-25"];
    const urlString = maple_api_url + `ranking/overall?date=${date}`;
    
    try {
        const response = await fetch(urlString, {
            headers: {
                "x-nxopen-api-key": process.env.NEXON_API_KEY as string
            }
        });
        
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Coontent-Type": 'application/json'
            }
        });
    } catch(error) {
        const err = error as Error
        return new Response(JSON.stringify({error: err.message}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}