import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Danindu de Silva",
  title: "Software Engineer",
  description:
    "Personal website of Danindu de Silva — backend software engineer focused on reliable systems, cloud-native products, and practical engineering.",
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
    email: "mailto:hi@danindu.com",
  },
  cta: {
    resume: "/danindu-de-silva-cv.pdf",
  },
};
