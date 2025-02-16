import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import Link from "next/link";
import FooterSocialLink from "./FooterSocialLink";

export default function Footer() {
  return (
    <div className="flex w-full fixed bottom-0 items-center justify-center py-6 gap-x-10">
      <FooterSocialLink
        href="https://github.com/Yoy0z-maps"
        icon={<FaGithub size={25} />}
        altText="Github"
      />
      <FooterSocialLink
        href="https://www.instagram.com/hanyohanyochamchimayo/"
        icon={<FaInstagram size={25} />}
        altText="Instagram"
      />
      <FooterSocialLink
        href="https://www.youtube.com/channel/UC8-_5555555555555555"
        icon={<FaYoutube size={25} />}
        altText="Youtube"
      />
    </div>
  );
}
