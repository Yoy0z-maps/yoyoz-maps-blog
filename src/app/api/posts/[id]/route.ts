import { API_SERVER_ADDRESS, API_TOKEN } from "@/constant/api_address";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  const res = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/`, {
    method: "GET",
  });
  const result = await res.json();
  return NextResponse.json(result);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  const formData = await req.formData();

  const res = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/`, {
    method: "PATCH",
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = params.id;
  const res = await fetch(`${API_SERVER_ADDRESS}/posts/${postId}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${API_TOKEN}`,
    },
  });
  const result = await res.json();
  return NextResponse.json(result);
}
