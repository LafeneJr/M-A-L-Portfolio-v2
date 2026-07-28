import type { Project } from "../projects-constant/project-types";

import travelbrain from "../../assets/projects/travelbrianai.webp";
import ldAliyu from "../../assets/projects/ldaliyu.webp";
import streetwear from "../../assets/projects/streetwearhub.webp";
import countryinfo from "../../assets/projects/countryinfo.webp";
import ebook from "../../assets/projects/ebook.webp";

export const PROJECTS: Project[] = [
  {
    id: "travelbrain-ai",

    title: "TravelBrain AI",

    subtitle: "AI Travel Intelligence",

    description:
      "AI-powered travel companion that helps users discover destinations, build personalized itineraries, and plan unforgettable journeys.",

    image: travelbrain,

    featured: true,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenAI",
    ],

    categories: [
      "Featured",
      "AI / ML",
      "SaaS",
      "Web Applications",
    ],

    stats: [
      {
        label: "Platform",
        value: "Full Stack",
      },
      {
        label: "AI",
        value: "OpenAI",
      },
      {
        label: "Status",
        value: "In Progress",
      },
    ],

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/LafeneJr/TRAVELBRAIN-AI",
      },

      liveDemo: {
        label: "Live Demo",
        href: "https://travelbrain-ai-liard.vercel.app/",
      },
    },
  },

  {
    id: "ld-aliyu",

    title: "LD Aliyu & Co.",

    subtitle: "Accounting Website",

    description:
      "A premium accounting website focused on trust, professionalism and modern business presentation.",

    image: ldAliyu,

    featured: false,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "EmailJS",
    ],

    categories: [
      "Web Applications",
    ],

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/LafeneJr/LD-Aliyu-And-Co",
      },

      liveDemo: {
        label: "Live Demo",
        href: "https://ld-aliyu-and-co.vercel.app",
      },
    },
  },

  {
    id: "streetwear-hub",

    title: "StreetWear Hub",

    subtitle: "Fashion E-Commerce",

    description:
      "Modern fashion storefront featuring a responsive shopping experience and bold editorial-inspired layouts.",

    image: streetwear,

    featured: false,

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    categories: [
      "Web Applications",
    ],

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/LafeneJr/E-Commerce",
      },

      liveDemo: {
        label: "Live Demo",
        href: "https://e-commerce-henna-eight-79.vercel.app",
      },
    },
  },

  {
    id: "country-info",

    title: "CountryInfo",

    subtitle: "REST Countries Explorer",

    description:
      "Explore countries around the world using live REST API data with search, filters and detailed information.",

    image: countryinfo,

    featured: false,

    technologies: [
      "React",
      "TypeScript",
      "REST API",
      "Tailwind CSS",      
    ],

    categories: [
      "Tools",
      "Web Applications",
    ],

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/LafeneJr/Rest-Explore",
      },

      liveDemo: {
        label: "Live Demo",
        href: "https://github.com/LafeneJr/Rest-Explore",
      },
    },
  },

  {
    id: "ebook-store",

    title: "E-Book Store",

    subtitle: "Digital Book Marketplace",

    description:
      "An online bookstore providing an engaging shopping experience with authentication and product browsing.",

    image: ebook,

    featured: false,

    technologies: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",                    
      "JWT",
    ],

    categories: [
      "Web Applications",
    ],

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/LafeneJr/Rest-Explore",
      },      
    },
  },
];