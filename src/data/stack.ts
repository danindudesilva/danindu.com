export type StackLogo = {
  name: string;
  src: string;
  alt: string;
  scale?: number;
};

export const coreStack: StackLogo[] = [
  {
    name: "Go",
    src: "/logos/raw/go.svg",
    alt: "Go logo",
    scale: 5,
  },
  {
    name: "TypeScript",
    src: "/logos/raw/typescript.svg",
    alt: "TypeScript logo",
  },
  {
    name: "Node.js",
    src: "/logos/raw/nodejs.svg",
    alt: "Node.js logo",
  },
  {
    name: "PostgreSQL",
    src: "/logos/raw/postgresql.svg",
    alt: "PostgreSQL logo",
  },
  {
    name: "Docker",
    src: "/logos/raw/docker.svg",
    alt: "Docker logo",
  },
  {
    name: "Kubernetes",
    src: "/logos/raw/kubernetes.svg",
    alt: "Kubernetes logo",
  },
  {
    name: "GCP",
    src: "/logos/raw/gcp.svg",
    alt: "Google Cloud logo",
  },
  {
    name: "AWS",
    src: "/logos/raw/aws.svg",
    alt: "AWS logo",
  },
];
