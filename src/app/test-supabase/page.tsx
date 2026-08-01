import { createClient } from "@/lib/supabase/server";

export default async function TestSupabasePage() {
  const supabase = await createClient();

  const { error } = await supabase.from("travel_photos").select("id").limit(1);

  return (
    <main>
      <h1>Supabase 연결 확인</h1>

      {error ? (
        <pre>{error.message}</pre>
      ) : (
        <p>Supabase 연결에 성공했습니다.</p>
      )}
    </main>
  );
}
