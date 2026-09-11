import { NextResponse } from "next/server";
import { z } from "zod";
import { TRIP_REGIONS } from "@/constant/tripRegions";
import { listTripPhotos } from "@/lib/trip/list";
import { createAdminClient } from "@/lib/supabase/admin";
import { validTripPassword } from "@/lib/trip/auth";
import { TRIP_BUCKET, tripDateSchema } from "@/lib/trip/storage";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function GET(request: Request) {
  const region = new URL(request.url).searchParams.get("region") || undefined;
  if (region && !TRIP_REGIONS.some((r) => r.code === region))
    return NextResponse.json(
      { error: "지역을 확인해주세요." },
      { status: 400 },
    );
  try {
    return NextResponse.json(
      { photos: await listTripPhotos(region) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      { error: "사진을 불러오지 못했어요. 잠시 후 다시 시도해주세요." },
      { status: 503 },
    );
  }
}
const mutation = z.object({
  password: z.string().min(1).max(256),
  path: z
    .string()
    .regex(
      /^[A-Z]{3}\/\d{4}-\d{2}\/\d{2}\/[a-zA-Z0-9_-]+\.(jpg|jpeg|png|webp|gif|heic|heif)$/,
    ),
  region: z
    .string()
    .refine((code) => TRIP_REGIONS.some((r) => r.code === code))
    .optional(),
  date: tripDateSchema.optional(),
});
async function change(request: Request, remove: boolean) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: "허용되지 않은 요청입니다." },
      { status: 403 },
    );
  const parsed = mutation.safeParse(await request.json().catch(() => null));
  if (!parsed.success)
    return NextResponse.json(
      { error: "사진과 날짜, 지역을 확인해주세요." },
      { status: 400 },
    );
  const input = parsed.data;
  if (!validTripPassword(input.password))
    return NextResponse.json(
      { error: "비밀번호가 일치하지 않아요." },
      { status: 401 },
    );
  if (!remove && (!input.region || !input.date))
    return NextResponse.json(
      { error: "지역과 날짜를 입력해주세요." },
      { status: 400 },
    );
  try {
    const storage = createAdminClient().storage.from(TRIP_BUCKET);
    const exists = await storage.info(input.path);
    if (exists.error)
      return NextResponse.json(
        {
          error: "사진이 없거나 이미 변경되었습니다. 목록을 새로고침해주세요.",
        },
        { status: 404 },
      );
    const nextPath = remove
      ? input.path
      : `${input.region}/${input.date!.slice(0, 7)}/${input.date!.slice(8)}/${input.path.split("/").pop()}`;
    if (remove || nextPath !== input.path) {
      const { error } = remove
        ? await storage.remove([input.path])
        : await storage.move(input.path, nextPath);
      if (error) throw error;
    }
    return NextResponse.json({ path: nextPath });
  } catch {
    return NextResponse.json(
      { error: "변경하지 못했어요. 새로고침 후 다시 시도해주세요." },
      { status: 503 },
    );
  }
}
export const PATCH = (request: Request) => change(request, false);
export const DELETE = (request: Request) => change(request, true);
