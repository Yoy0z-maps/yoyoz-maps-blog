import AdminLoginPanel from "@/container/AdminLoginPanel";
import AdminLoginFooter from "@/components/admin/login/AdminLoginFooter";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[linear-gradient(to_bottom,_#165DFB_33.33%,_#ffffff_33.33%)]">
      <AdminLoginPanel />
      <AdminLoginFooter />
    </div>
  );
}
