import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Danindu de Silva",
  title: "Software Engineer",
  description:
    "Danindu de Silva is a software engineer focused on backend systems, cloud-native products, fintech workflows, and practical engineering.",
  url: "https://danindu.com",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    github: "https://github.com/danindudesilva",
    linkedin: "https://www.linkedin.com/in/danindudesilva",
    upwork: "https://www.upwork.com/freelancers/danindu",
    email: "mailto:hi@danindu.com",
  },
  cta: {
    resume: "/danindu-de-silva-cv.pdf",
  },
};
