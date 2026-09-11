import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { TRIP_REGIONS } from "@/constant/tripRegions";
import { TRIP_BUCKET } from "./storage";
import type { TripPhoto } from "./photos";
export async function listTripPhotos(region?: string): Promise<TripPhoto[]> {
  const storage = createAdminClient().storage.from(TRIP_BUCKET);
  const photos: TripPhoto[] = [];
  async function walk(prefix: string, depth: number) {
    for (let offset = 0; ; offset += 100) {
      const { data, error } = await storage.list(prefix, {
        limit: 100,
        offset,
        sortBy: { column: "name", order: "asc" },
      });
      if (error) throw error;
      for (const item of data) {
        const path = `${prefix}/${item.name}`;
        if (!item.id && depth < 2) await walk(path, depth + 1);
        else if (
          item.id &&
          /^[A-Z]{3}\/\d{4}-\d{2}\/\d{2}\/[^/]+\.(jpg|jpeg|png|webp|gif|heic|heif)$/i.test(
            path,
          )
        ) {
          const [region, month, day] = path.split("/");
          photos.push({
            path,
            region,
            date: `${month}-${day}`,
            createdAt: item.created_at || "",
            size: item.metadata?.size || 0,
            src: "",
          });
        }
      }
      if (data.length < 100) break;
    }
  }
  for (const code of region ? [region] : TRIP_REGIONS.map((r) => r.code))
    await walk(code, 0);
  photos.sort(
    (a, b) =>
      b.createdAt.localeCompare(a.createdAt) || b.path.localeCompare(a.path),
  );
  for (let offset = 0; offset < photos.length; offset += 100) {
    const batch = photos.slice(offset, offset + 100);
    const { data, error } = await storage.createSignedUrls(
      batch.map((p) => p.path),
      3600,
    );
    if (error) throw error;
    for (const [index, entry] of Array.from((data || []).entries())) {
      if (entry.error || !entry.signedUrl)
        throw new Error("사진 URL 생성 실패");
      batch[index].src = entry.signedUrl;
    }
  }
  return photos;
}
