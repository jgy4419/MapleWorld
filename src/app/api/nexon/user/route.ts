import { fetchGet } from "@/services/get";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const characterName = searchParams.get("character_name");
  
  if (!characterName) {
    return new Response(JSON.stringify({ error: "Character name is required" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return fetchGet("id?character_name=" + characterName);
}
