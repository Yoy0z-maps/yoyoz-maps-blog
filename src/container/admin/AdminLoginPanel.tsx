import AdminLoginForm from "@/container/admin/AdminLoginForm";
import AdminLoginLogo from "@/components/admin/login/AdminLoginLogo";

export default function AdminLoginPanel() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xs py-9 px-14 items-center justify-center shadow-lg">
      <AdminLoginLogo />
      <AdminLoginForm />
    </div>
  );
}
