import { MdAdminPanelSettings } from "react-icons/md";

export default function AdminLoginLogo() {
  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <MdAdminPanelSettings size={50} className="text-blue-600" />
      <p className="text-2xl font-semibold font-pretendard text-blue-600">
        Admin Login
      </p>
    </div>
  );
}
