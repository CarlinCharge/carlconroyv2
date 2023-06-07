import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquarespace,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface SocialItem {
  icon: IconType;
  alt: string;
  href: string;
  isExternal?: boolean;
}

export const SocialItems: SocialItem[] = [
  {
    icon: FaGithub,
    href: "https://github.com/CarlinCharge",
    alt: "Github Profile",
    isExternal: true,
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/carlconroydesign/",
    alt: "Github Profile",
    isExternal: true,
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/carl-conroy/",
    alt: "LinkedIn Profile",
    isExternal: true,
  },
  {
    icon: FaSquarespace,
    href: "https://www.carlconroydesign.com/",
    alt: "Carl Conroy Design",
    isExternal: true,
  },
];
