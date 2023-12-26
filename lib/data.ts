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
    cardBG: "from-[#f7f0ff] to-[#a78afe]",
    images: [
      {
        src: "/projects/shoppio-1.png",
        style: "left-0 top-0 w-full",
      },
      {
        src: "/projects/shoppio-2.png",
        style: "left-[60%] top-[50%] w-[35%] rotate-[25deg]",
      },
      {
        src: "/projects/shoppio-3.png",
        style: "left-[20%] top-[60%] w-[50%]",
      },
    ],
    logo: {
      src: "/projects/shoppio-logo.png",
      style: "top-0 left-0 h-20 w-20",
    },
    demo: "https://kumang-subba.github.io/shoppio/",
    repo: "https://github.com/kumang-subba/shoppio",
  },
  {
    title: "NextCord: Discord Clone",
    id: "Nextcord",
    description: "Discord clone using Next.js",
    fullImage: "/projects/nextcord-full.png",
    cardBG: "from-[#f7f0ff] to-[#addeff]",
    images: [
      {
        src: "/projects/nextcord-1.png",
        style: "left-[10%] top-[5%] w-[50%] -rotate-[20deg]",
      },
      {
        src: "/projects/nextcord-2.png",
        style: "left-[60%] top-[50%] w-[35%] rotate-[25deg]",
      },
      {
        src: "/projects/nextcord-3.png",
        style: "left-[20%] top-[50%] w-[50%]",
      },
    ],
    logo: {
      src: "/projects/nextcord-logo.png",
      style: "top-40 left-[50%] h-10 w-10",
    },
    demo: "https://nextcord.onrender.com/",
    repo: "https://github.com/kumang-subba/nextcord",
  },
  {
    title: "The Hub: The Movie App",
    id: "Thehub",
    description: "The Movie App using TMDb API",
    fullImage: "/projects/the-hub-full.png",
    cardBG: "from-[#f7f0ff] to-[#ffd8ad]",
    images: [
      {
        src: "/projects/the-hub-1.png",
        style: "left-[10%] top-[10%] w-[50%] -rotate-[20deg]",
      },
      {
        src: "/projects/the-hub-2.png",
        style: "left-[60%] top-[50%] w-[35%] rotate-[25deg]",
      },
      {
        src: "/projects/the-hub-3.png",
        style: "left-[20%] top-[60%] w-[40%]",
      },
    ],
    logo: {
      src: "/projects/the-hub-logo.png",
      style: "top-20 left-[60%] h-20 w-20",
    },
    demo: "https://kumang-subba.github.io/the-hub/",
    repo: "https://github.com/kumang-subba/the-hub",
  },
  {
    title: "Blog: Blog App",
    id: "Blog",
    description: "Full stack blog App",
    fullImage: "/projects/blog-full.png",
    cardBG: "from-[#f7f0ff] to-[#ffade1]",
    images: [
      {
        src: "/projects/blog-1.png",
        style: "left-0 top-[50%] w-[80%] -rotate-[20deg]",
      },
      {
        src: "/projects/blog-2.png",
        style: "left-[60%] top-[50%] w-[35%] rotate-[25deg]",
      },
    ],
    logo: {
      src: "/projects/blog-logo.png",
      style: "top-40 left-[40%] h-20 w-20",
    },
    demo: "https://kumang-subba.github.io/blog-client/",
    repo: "https://github.com/kumang-subba/blog-client",
  },
];
