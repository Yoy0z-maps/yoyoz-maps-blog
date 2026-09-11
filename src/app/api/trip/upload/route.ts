import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { photoPath, TRIP_BUCKET, uploadSchema } from "@/lib/trip/storage";

export const runtime = "nodejs";
export async function POST(request: Request) {
  if (request.headers.get("origin") && request.headers.get("origin") !== new URL(request.url).origin) {
    return NextResponse.json({ error: "허용되지 않은 요청입니다." }, { status: 403 });
  }
  const input = uploadSchema.safeParse(await request.json().catch(() => null));
  if (!input.success) return NextResponse.json({ error: "지역, 날짜, 파일 형식과 크기를 확인해주세요." }, { status: 400 });
  const password = process.env.TRIP_UPLOAD_PASSWORD;
  if (!password) return NextResponse.json({ error: "서버 업로드 비밀번호가 설정되지 않았습니다." }, { status: 503 });
  const hash = (value: string) => createHash("sha256").update(value).digest();
  if (!timingSafeEqual(hash(password), hash(input.data.password))) {
    return NextResponse.json({ error: "비밀번호가 일치하지 않아요." }, { status: 401 });
  }
  try {
    const storage = createAdminClient().storage.from(TRIP_BUCKET);
    const uploads = [];
    for (const file of input.data.files) {
      const path = photoPath(input.data.region, input.data.date, file.id, file.type);
      // A previous request may have reached Storage even if the mobile connection timed out.
      const existing = await storage.info(path);
      if (existing.data) {
        uploads.push({ id: file.id, path, uploaded: true });
        continue;
      }
      const { data, error } = await storage.createSignedUploadUrl(path);
      if (error) throw error;
      uploads.push({ id: file.id, path, signedUrl: data.signedUrl });
    }
    return NextResponse.json({ uploads }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "Supabase 연결 또는 trip-photos 버킷 설정을 확인해주세요." }, { status: 503 });
  }
}
