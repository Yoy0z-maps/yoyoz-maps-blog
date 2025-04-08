import { API_SERVER_ADDRESS, API_TOKEN } from "@/constant/api_address";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${API_SERVER_ADDRESS}/posts/`, { method: "GET" });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const res = await fetch(`${API_SERVER_ADDRESS}/posts/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${API_TOKEN}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: res.status });
  }

  const result = await res.json();
  return NextResponse.json(result);
}
