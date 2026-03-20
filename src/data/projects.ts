import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    name: "Enhanced Open Banking Reports",
    summary:
      "A bank statement analysis service that matched transactions to Source of Funds criteria to reduce manual review and speed up client turnaround.",
    problem:
      "Manual financial data analysis was slow and difficult to scale, creating delays for clients and internal teams reviewing bank statement data.",
    approach:
      "Built an enhanced analysis service using Go, PostgreSQL, and gRPC, and worked closely with Product and Design to focus on the highest-value reporting outcomes first.",
    outcome:
      "Improved client turnaround times by over 80% while enabling more fault-tolerant reporting and horizontal scaling for growing data volumes.",
    stack: ["Go", "PostgreSQL", "gRPC", "GCP", "Cloud Run"],
    featured: true,
    links: {},
  },
  {
    name: "Billing Engine",
    summary:
      "A mission-critical billing and subscription microservice used to generate billing and invoicing data for client activity.",
    problem:
      "The billing service had become harder to maintain over time and needed a more reliable and operationally simpler architecture.",
    approach:
      "Worked with Finance, Data Analytics, and Engineering to evolve the service, then migrated it from Node.js on GKE to Go on Cloud Run and replaced Kafka with Pub/Sub.",
    outcome:
      "Improved maintainability and simplified operations for a core internal financial system while preserving critical billing functionality.",
    stack: [
      "Go",
      "Node.js",
      "PostgreSQL",
      "Pub/Sub",
      "Kafka",
      "GKE",
      "Cloud Run",
      "Docker",
    ],
    featured: true,
    links: {},
  },
  {
    name: "Client Reporting",
    summary:
      "A reporting microservice designed to deliver qualitative and quantitative client data for compliance-focused use cases.",
    problem:
      "Clients needed better reporting to support compliance requirements and reduce KYC and AML risk with clearer, more useful data outputs.",
    approach:
      "Designed and implemented the service with Engineering, Product, and Data Analytics, focusing on structured reporting flows and maintainable backend architecture.",
    outcome:
      "Delivered reporting capabilities aligned with client compliance requirements and strengthened Thirdfort’s support for KYC and AML workflows.",
    stack: ["Go", "TypeScript", "ArangoDB", "Terraform", "API Development"],
    featured: true,
    links: {},
  },
  {
    name: "Bulk Client Onboarding Platform",
    summary:
      "A microservice to streamline client onboarding by migrating data from previous providers into Thirdfort at scale.",
    problem:
      "Manual onboarding migrations were time-consuming and difficult to scale when clients needed to move data from earlier providers.",
    approach:
      "Contributed to the design and development of a CSV-driven workflow that validated input data and used Thirdfort’s APIs to create ID checks in bulk.",
    outcome:
      "Enabled a more seamless and self-serve onboarding process for clients moving onto the platform.",
    stack: ["Go", "TypeScript", "React", "GCP", "Cloud Run"],
    featured: false,
    links: {},
  },
  {
    name: "Stripe Payment Integration",
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
  // {
  //   name: "AI Support Assistant",
  //   summary:
  //     "An open-source Go project to explore retrieval, embeddings, and production-minded AI integration patterns.",
  //   problem:
  //     "I wanted a hands-on way to learn modern AI system design while keeping the code modular and maintainable.",
  //   approach:
  //     "Designed the project as reusable modules with testing, observability, and clean interfaces.",
  //   outcome:
  //     "A strong learning and portfolio project that demonstrates engineering discipline.",
  //   stack: ["Go", "PostgreSQL", "pgvector", "Docker"],
  //   featured: true,
  //   links: {},
  // },
];
