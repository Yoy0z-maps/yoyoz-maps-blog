import AdminSideBarNav from "./AdminSideBarNav";

export default function AdminSideBar() {
  return (
    <div className="relative flex flex-col items-center justify-start h-screen bg-sidebar-bg p-4 shadow-[2px_0_8px_rgba(0,0,0,0.1)]">
      <p className="text-logo-light text-lg font-pretendard font-medium text-center w-full mt-4">
        Think Different.
      </p>
      <div className="px-10 border-b border-neutral-300 w-[85%] my-8"></div>
      <AdminSideBarNav />
    </div>
  );
}
