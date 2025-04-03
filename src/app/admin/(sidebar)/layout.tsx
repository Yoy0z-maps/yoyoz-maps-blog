import AdminSideBar from "@/container/admin/AdminSideBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function AdminSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/admin/login");
  }

  return (
    <div className="flex w-full">
      <AdminSideBar />
      {children}
    </div>
  );
}
