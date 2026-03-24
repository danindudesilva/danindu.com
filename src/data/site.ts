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
  social: [
    {
      name: "email",
      label: "Email",
      url: "mailto:hi@danindu.com",
    },
    {
      name: "github",
      label: "GitHub",
      url: "https://github.com/danindudesilva",
    },
    {
      name: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/danindudesilva",
    },
    {
      name: "upwork",
      label: "Upwork",
      url: "https://www.upwork.com/freelancers/danindu",
    },
    {
      name: "medium",
      label: "Medium",
      url: "https://danindu.medium.com/",
    },
  ],
  cta: {
    resume: "/danindu-de-silva-cv-public.pdf",
  },
};
