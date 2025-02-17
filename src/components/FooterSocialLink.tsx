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
      className="dark:text-gray-500 text-gray-300 hover:text-gray-700 cursor-pointer dark:hover:text-white transition-all duration-300"
      aria-label={altText}
    >
      {icon}
    </Link>
  );
}
