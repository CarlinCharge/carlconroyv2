import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface SocialItem {
  icon: IconType;
  alt: string;
  href: string;
}

export const SocialItems: SocialItem[] = [
  {
    icon: FaGithub,
    href: "https://github.com/CarlinCharge",
    alt: "Github Profile",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/carlconroydesign/",
    alt: "Github Profile",
  },
  {
    icon: FaLinkedin,
    href: "https://www.instagram.com/carlconroydesign/",
    alt: "Github Profile",
  },
];
