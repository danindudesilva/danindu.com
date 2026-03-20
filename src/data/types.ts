export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  upwork: string;
  email: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  nav: NavItem[];
  social: SocialLinks;
  cta: {
    resume: string;
  };
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  technologies: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  featured?: boolean;
};

export type ProjectItem = {
  name: string;
  summary: string;
  problem: string;
  approach: string;
  outcome?: string;
  stack: string[];
  featured: boolean;
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
};

export type WritingItem = {
  title: string;
  description: string;
  date: string;
  url: string;
  platform: string;
};
