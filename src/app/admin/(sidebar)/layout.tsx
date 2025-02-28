import AdminSideBar from "@/container/admin/AdminSideBar";

export default function AdminSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <AdminSideBar />
      {children}
    </div>
  );
}
