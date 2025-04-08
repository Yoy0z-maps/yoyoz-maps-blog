import { API_SERVER_ADDRESS } from "@/constant/api_address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  const res = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/like/`, {
    method: "POST",
  });

  const result = await res.json();
  return NextResponse.json(result);
}
