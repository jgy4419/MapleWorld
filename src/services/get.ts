import { maple_api_url } from "@/constants/common";

// api route로 get 요청 할 때
export const apiGet = async (url: string, error?: string) => {
    try {
        const response = await fetch(url);
        console.log(url);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log("data", data);
        
        return data;
    } catch(err) {
        if(error === null) return err
        else return error;
    }
}

// api route에서 get 할 때
export const fetchGet = async (url: string | Error) => {
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