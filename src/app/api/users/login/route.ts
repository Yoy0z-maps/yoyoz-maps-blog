import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${API_SERVER_ADDRESS}/users/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: body.username, password: body.password }),
  });

  const result = await res.json();
  return NextResponse.json(result);
}
