import AdminSideBar from "@/container/AdminSideBar";

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
