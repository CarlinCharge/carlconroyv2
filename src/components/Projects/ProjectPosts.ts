interface ProjectPost {
  text: string;
  href: string;
  description: string;
}

const ProjectPost: ProjectPost[] = [
  {
    text: "Spotify Stats",
    href: "spotifystats",
    description: "View Your Personalized Spotify Data",
  },
  {
    text: "Pokédex App",
    href: "/pokédex",
    description: "A Pokédex App For Looking Up Your Favorite Pokémon",
  },
];

export default ProjectPost;
