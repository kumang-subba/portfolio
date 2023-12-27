export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Git",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Bootstrap",
] as const;
export type SKillsType = (typeof skillsData)[number];
export const educationData = [
  {
    title: "School Leaving Certificate",
    institution: "United School",
    location: "Nepal",
    timeline: "June 2002 - March 2008",
  },
  {
    title: "GCE A Levels",
    institution: "Lumbini International College",
    location: "Nepal",
    timeline: "May 2008 - June 2010",
  },
  {
    title: "Business Information Technology",
    institution: "Laurea University of Applied Sciences",
    location: "Finland",
    timeline: "August 2023 - Ongoing",
  },
];
export const projectData = [
  {
    title: "Shoppio: Ecommerce",
    id: "Shoppio",
    description: "Ecommerce platform for selling products",
    fullImage: "/projects/shoppio-full.png",
    logo: "/projects/shoppio-logo.png",

    demo: "https://kumang-subba.github.io/shoppio/",
    repo: "https://github.com/kumang-subba/shoppio",
  },
  {
    title: "NextCord: Discord Clone",
    id: "Nextcord",
    description: "Discord clone using Next.js",
    fullImage: "/projects/nextcord-full.png",
    logo: "/projects/nextcord-logo.png",

    demo: "https://nextcord.onrender.com/",
    repo: "https://github.com/kumang-subba/nextcord",
  },
  {
    title: "The Hub: The Movie App",
    id: "Thehub",
    description: "The Movie App using TMDb API",
    fullImage: "/projects/the-hub-full.png",
    logo: "/projects/the-hub-logo.png",
    demo: "https://kumang-subba.github.io/the-hub/",
    repo: "https://github.com/kumang-subba/the-hub",
  },
  {
    title: "Blog: Blog App",
    id: "Blog",
    description: "Full stack blog App",
    fullImage: "/projects/blog-full.png",
    logo: "/projects/blog-logo.png",

    demo: "https://kumang-subba.github.io/blog-client/",
    repo: "https://github.com/kumang-subba/blog-client",
  },
];
export type ProjectType = (typeof projectData)[number];
