import AdminLoginPanel from "@/container/admin/AdminLoginPanel";
import AdminLoginFooter from "@/components/admin/login/AdminLoginFooter";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token) {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[linear-gradient(to_bottom,_#165DFB_33.33%,_#ffffff_33.33%)]">
      <AdminLoginPanel />
      <AdminLoginFooter />
    </div>
  );
}
