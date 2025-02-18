import Link from "next/link";

export default function MobileNavLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-theme-dark">
      {icon}
    </Link>
  );
}
