import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request: NextApiRequest) {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: any) {
	const { name } = await request.json();
	return new Response(JSON.stringify({ message: `Hello, ${name}!`}), {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	});
}