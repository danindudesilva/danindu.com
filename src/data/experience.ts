import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Thirdfort Limited",
    role: "Software Engineer",
    period: "Dec 2020 — Present",
    summary:
      "Built and maintained backend services and cloud-native systems for financial workflows, reporting, onboarding, and billing in a regulated fintech environment.",
    bullets: [
      "Led the design and delivery of an enhanced bank statement analysis service that matched transactions to Source of Funds criteria, helping reduce manual analysis and improving client turnaround times by over 80%.",
      "Implemented and evolved production backend services using Go, Node.js, PostgreSQL, gRPC, Pub/Sub, BigQuery, Terraform, and Google Cloud, balancing maintainability, scalability, and operational simplicity.",
      "Delivered cross-functional projects including a billing engine migration from Node.js on GKE to Go on Cloud Run, bulk onboarding workflows via CSV processing, and client reporting systems supporting KYC and AML compliance needs.",
    ],
    technologies: [
      "Go",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "gRPC",
      "Pub/Sub",
      "BigQuery",
      "Terraform",
      "GCP",
    ],
    featured: true,
  },
  {
    company: "Dialog Axiata PLC",
    role: "Research and Development Engineer - IoT",
    period: "Jun 2017 — Dec 2020",
    summary:
      "Worked across IoT R&D and software engineering, building connected systems spanning embedded devices, communication modules, and backend applications.",
    bullets: [
      "Developed IoT prototypes and connected device platforms using embedded hardware, firmware, and LTE/NB-IoT technologies.",
      "Built a smart seat reservation system using PHP Laravel and real-time IoT platform data for hybrid workplace use cases.",
      "Contributed to Sri Lanka’s first NB-IoT Hackathon by helping design a custom development board and supporting developer adoption of the platform.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "PHP Laravel",
      "IoT",
      "Embedded Systems",
      "NB-IoT",
      "LTE",
    ],
    featured: true,
  },
];
