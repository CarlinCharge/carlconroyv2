interface MenuItem {
  text: string;
  href: string;
}

export const MenuItems: MenuItem[] = [
  {
    text: "Home",
    href: "/",
  },
  { text: "Projects", href: "/projects" },
  { text: "About", href: "/about" },
  { text: "Tech", href: "/tech" },
  { text: "Resumé", href: "/resume" },
  // { text: "Garden", href: "/garden" },
];
