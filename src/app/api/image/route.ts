import { NextRequest, NextResponse } from "next/server";
import { API_SERVER_ADDRESS } from "@/constant/api_address";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const res = await fetch(`${API_SERVER_ADDRESS}/upload-image/`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
