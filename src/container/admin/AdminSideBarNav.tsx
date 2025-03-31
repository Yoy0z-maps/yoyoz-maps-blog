"use client";

import AdminSideBarLink from "@/components/admin/login/AdminSideBarLink";

import { FaProjectDiagram } from "react-icons/fa";
import { FaBloggerB, FaCircleUser } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";

import useNavActiveStore from "@/hook/useNavActive";

export default function AdminSideBarNav() {
  const path = useNavActiveStore((state) => state.path);

  return (
    <nav className="flex flex-col gap-[16px] relative">
      <div
        className="absolute shadow-lg bg-blue-600 rounded-md transition-all duration-500 w-full h-[48px]"
        style={{
          transform: `translateY(${
            path === "/admin/dashboard"
              ? "0"
              : path === "/admin/blog"
                ? "64px"
                : path === "/admin/project"
                  ? "128px"
                  : path === "/admin/user"
                    ? "192px"
                    : "0"
          })`,
        }}
      />
      <AdminSideBarLink
        targetPath="/admin/dashboard"
        currentPath={path}
        icon={<MdSpaceDashboard size={20} />}
        text="DASHBOARD"
      />
      <AdminSideBarLink
        targetPath="/admin/blog"
        currentPath={path}
        icon={<FaBloggerB size={20} />}
        text="BLOG"
      />
      <AdminSideBarLink
        targetPath="/admin/project"
        currentPath={path}
        icon={<FaProjectDiagram size={20} />}
        text="PROJECTS"
      />
      <AdminSideBarLink
        targetPath="/admin/user"
        currentPath={path}
        icon={<FaCircleUser size={20} />}
        text="USERS"
      />
    </nav>
  );
}
