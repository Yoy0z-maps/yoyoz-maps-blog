import Link from "next/link";

interface AdminSideBarLinkProps {
  icon: React.ReactNode;
  currentPath: string;
  targetPath: string;
  text: string;
}

export default function AdminSideBarLink({
  icon,
  currentPath,
  targetPath,
  text,
}: AdminSideBarLinkProps) {
  return (
    <Link
      className={`flex items-center py-3 px-4 gap-6 relative z-10 transition-colors duration-200 ${
        currentPath === targetPath ? "text-white" : "text-neutral-400"
      }`}
      href={targetPath}
    >
      {icon}
      <p className="text-md font-pretendard tracking-wider mr-12">{text}</p>
    </Link>
  );
}
