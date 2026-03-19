import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Thirdfort Limited",
    role: "Software Engineer",
    period: "Dec 2020 — present",
    summary:
      "Worked on backend systems and cloud infrastructure for financial workflows, internal tooling, and production services.",
    bullets: [
      "Led and delivered backend features used in production financial workflows.",
      "Built and maintained services using Go, TypeScript, PostgreSQL, and Google Cloud.",
      "Collaborated with product and engineering teams to scope and ship practical solutions under ambiguity.",
    ],
    technologies: [
      "Go",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GCP",
      "Docker",
    ],
    featured: true,
  },
];
