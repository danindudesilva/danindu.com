import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    name: "Open Banking Analysis Service",
    summary:
      "A backend service focused on turning financial transaction data into useful product insights.",
    problem:
      "The challenge was to extract useful insights from transaction data while keeping scope practical for an MVP.",
    approach:
      "I worked backward from product needs, reduced scope, and focused the initial implementation on high-value transaction analysis features.",
    outcome:
      "Delivered a more focused and practical solution aligned with product goals.",
    stack: ["Go", "PostgreSQL", "GCP", "REST APIs"],
    featured: true,
    links: {},
  },
  {
    name: "Stripe Payment Flow Demo",
    summary:
      "A practical demo of a payment flow showing backend and frontend interaction patterns.",
    problem:
      "The goal was to model a realistic payment flow with provider integration and clear control of payment state.",
    approach:
      "Implemented the backend flow cleanly and treated the demo as a production-minded integration exercise.",
    outcome:
      "Created a useful reference implementation for payment workflow discussions and future reuse.",
    stack: ["Go", "Stripe", "Cloud Run", "TypeScript"],
    featured: true,
    links: {},
  },
  {
    name: "AI Support Assistant",
    summary:
      "An open-source Go project to explore retrieval, embeddings, and production-minded AI integration patterns.",
    problem:
      "I wanted a hands-on way to learn modern AI system design while keeping the code modular and maintainable.",
    approach:
      "Designed the project as reusable modules with testing, observability, and clean interfaces.",
    outcome:
      "A strong learning and portfolio project that demonstrates engineering discipline.",
    stack: ["Go", "PostgreSQL", "pgvector", "Docker"],
    featured: true,
    links: {},
  },
];
