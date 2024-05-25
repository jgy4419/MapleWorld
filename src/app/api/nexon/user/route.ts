import type { NextApiRequest, NextApiResponse } from 'next'

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

  const urlString = "https://open.api.nexon.com/maplestory/v1/id?character_name=" + characterName;

  try {
    const response = await fetch(urlString, {
      headers: {
        "x-nxopen-api-key": process.env.NEXON_API_KEY as string

      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    const err = error as Error;
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
