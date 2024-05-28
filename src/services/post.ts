import { maple_api_url } from "@/constants/common";

export const fetchGet = async (url: string) => {
    // const [date] = ["2024-05-25"];
    // const urlString = maple_api_url + `ranking/guild?date=${date}&ranking_type=1`;
    
    try {
        const response = await fetch(maple_api_url + url, {
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