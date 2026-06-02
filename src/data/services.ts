export type Service = {
  title: string;
  description: string;
  idealFor: string[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Product engineering",
    description:
      "Ship MVPs and production SaaS from zero—frontend, backend, integrations, and launch-ready infrastructure.",
    idealFor: [
      "Seed-stage founders validating product-market fit",
      "Teams needing a senior builder who thinks like an operator",
    ],
    deliverables: [
      "Scoped roadmap and architecture",
      "Full-stack implementation",
      "Production deployment on AWS/GCP",
    ],
  },
  {
    title: "Architecture & scale",
    description:
      "Design and optimize systems handling high traffic—microservices, Kubernetes, cost reduction, and reliability.",
    idealFor: [
      "Products outgrowing monoliths",
      "Media and consumer apps with traffic spikes",
    ],
    deliverables: [
      "Architecture review and target design",
      "Performance and cost optimization plan",
      "Hands-on implementation support",
    ],
  },
  {
    title: "AI-native platforms",
    description:
      "Build LLM-powered workflows, OCR pipelines, and agentic features with production guardrails.",
    idealFor: [
      "B2B SaaS automating document-heavy workflows",
      "Teams adding AI without sacrificing compliance",
    ],
    deliverables: [
      "Pipeline design (ingestion → model → workflow)",
      "React/Node implementation",
      "Evaluation and monitoring approach",
    ],
  },
  {
    title: "Technical leadership",
    description:
      "Lead cross-functional engineering, align delivery with business milestones, and support fundraising readiness.",
    idealFor: [
      "Startups preparing for seed or Series A",
      "Founders needing a technical co-pilot",
    ],
    deliverables: [
      "Team coordination and technical roadmaps",
      "SOC2/GDPR program support",
      "Investor-ready technical narrative",
    ],
  },
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Intro call",
    description: "30-minute call to understand your product, constraints, and timeline.",
  },
  {
    step: "02",
    title: "Discovery",
    description: "Clarify scope, risks, and success metrics—no jargon, plain outcomes.",
  },
  {
    step: "03",
    title: "Proposal",
    description: "Fixed scope or iterative engagement with clear milestones.",
  },
  {
    step: "04",
    title: "Build & ship",
    description: "Hands-on delivery with regular demos and production focus.",
  },
];
