"use client";

import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";

export default function AdminSignoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    router.push("/admin/login");
  };

  return (
    <div
      onClick={handleLogout}
      className="flex mt-auto mb-6 gap-4 group cursor-pointer"
    >
      <IoIosLogOut className="text-2xl text-neutral-500 group-hover:text-blue-600" />
      <p className="text-neutral-500 text-sm font-pretendard font-medium group-hover:text-blue-600">
        Sign Out
      </p>
    </div>
  );
}
