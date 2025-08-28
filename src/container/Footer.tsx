import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

import FooterSocialLink from "../components/FooterSocialLink";

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
        href="https://www.linkedin.com/in/john-han-3b1b2b349/"
        icon={<FaLinkedin size={25} />}
        altText="Linkedin"
      />
    </div>
  );
}
