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
export const experienceData = [
  {
    title: "Accountant",
    company: "Kang Hydropower Company",
    location: "Nepal",
    timeline: "Nov 2018 - Dec 2022",
  },
  {
    title: "Frontend Developer Training",
    company: "Kreativstorm",
    location: "Berlin, Germany, Remote",
    timeline: "Jan 2024 - Feb 2024",
  },
];
export const projectData = [
  {
    shortTitle: "Shoppio",
    title: "Shoppio: Ecommerce platform",
    id: "Shoppio",
    description: "Ecommerce platform for selling products",
    fullImage: "/projects/shoppio-full.png",
    logo: "/projects/shoppio-logo.png",
    demo: "https://kumang-subba.github.io/shoppio/",
    repo: "https://github.com/kumang-subba/shoppio",
  },
  {
    shortTitle: "NextCord",
    title: "NextCord: Discord Clone",
    id: "Nextcord",
    description: "Discord clone using Next.js",
    fullImage: "/projects/nextcord-full.png",
    logo: "/projects/nextcord-logo.png",

    demo: "https://nextcord.onrender.com/",
    repo: "https://github.com/kumang-subba/nextcord",
  },
  {
    shortTitle: "The Hub",
    title: "The Hub: The Movie App",
    id: "Thehub",
    description: "The Movie App using TMDb API",
    fullImage: "/projects/the-hub-full.png",
    logo: "/projects/the-hub-logo.png",
    demo: "https://kumang-subba.github.io/the-hub/",
    repo: "https://github.com/kumang-subba/the-hub",
  },
  {
    shortTitle: "Blog App",
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
