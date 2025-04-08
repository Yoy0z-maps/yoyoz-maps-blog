import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const res = await fetch(`${API_SERVER_ADDRESS}/comments/`, {
    method: "POST",
    body: formData,
  });

  const result = await res.json();
  return NextResponse.json(result);
}
