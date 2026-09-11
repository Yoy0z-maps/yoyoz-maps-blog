import "server-only";
import { createClient } from "@supabase/supabase-js";

export function createAdminClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error("Supabase 서버 환경변수를 설정해주세요.");
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}
