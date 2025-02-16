import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  altText: string;
}

export default function FooterSocialLink({
  href,
  icon,
  altText,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-gray-500 cursor-pointer hover:text-white transition-all duration-300"
      aria-label={altText}
    >
      {icon}
    </Link>
  );
}
