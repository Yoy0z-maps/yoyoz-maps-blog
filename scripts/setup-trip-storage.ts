import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { MAX_PHOTO_BYTES, PHOTO_TYPES, TRIP_BUCKET } from "../src/lib/trip/storage";

async function main() {
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;
if (!url || !key) throw new Error("SUPABASE_URL / SUPABASE_SECRET_KEY가 필요합니다.");
const client = createClient(url, key, { auth: { persistSession: false } });
const { data: buckets, error } = await client.storage.listBuckets();
if (error) throw error;
const options = { public: false, fileSizeLimit: MAX_PHOTO_BYTES, allowedMimeTypes: Object.keys(PHOTO_TYPES) };
if (!buckets.some(bucket => bucket.name === TRIP_BUCKET)) {
  const { error } = await client.storage.createBucket(TRIP_BUCKET, options);
  if (error) throw error;
} else {
  const { error } = await client.storage.updateBucket(TRIP_BUCKET, options);
  if (error) throw error;
}
console.log("trip-photos 비공개 버킷 설정 완료 (20MB, 사진 형식 제한). 업로드는 서버가 발급한 서명 URL만 사용합니다.");

}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
