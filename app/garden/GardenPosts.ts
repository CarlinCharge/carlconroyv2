interface GardenPost {
  title: string;
  subtitle: string;
  href: string;
  description: string;
}

export const GardenPosts: GardenPost[] = [
  {
    title: "The useState Hook Explained",
    subtitle: "An overview of useState",
    href: "#",
    description: "What Is It Used For And How Do I Use It?",
  },
  {
    title: "The useEffect Hook Explained",
    subtitle: "The Difference Between useEffect and useState",
    href: "#",
    description: "How Do They Work Together?",
  },
  {
    title: "getStaticProps",
    subtitle: "What Is Server Side Rendering? How Does getStaticProps Work?",
    href: "#",
    description: "A Short Guide On Data Fetching",
  },
  {
    title: "MDX in Next13",
    subtitle: "What's New In Setting Up MDX Within Next13?",
    href: "#",
    description: "A Quick And Dirty Guide On @next/mdx",
  },
];
