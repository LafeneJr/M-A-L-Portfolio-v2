export const PROJECT_CATEGORIES = [
  "All Projects",
  "Featured",
  "Web Applications",
  "AI / ML",
  "SaaS",
  "Tools",
  "Open Source",
] as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[number];

export interface ProjectLink {
  label: string;

  href: string;

  external?: boolean;
}

export interface ProjectStats {
  label: string;

  value: string;
}

export interface Project {
  id: string;

  title: string;

  subtitle: string;

  description: string;

  image: string;

  featured: boolean;

  technologies: string[];

  categories: ProjectCategory[];

  stats?: ProjectStats[];

  links: {    
    liveDemo?: ProjectLink;

    github?: ProjectLink;
  };
}