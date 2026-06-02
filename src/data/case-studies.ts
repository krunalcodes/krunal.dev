export type CaseStudyCategory =
  | "AI"
  | "Media"
  | "Social"
  | "EdTech"
  | "Web3"
  | "Mobility"
  | "Security"
  | "Marketplace";

export type CaseStudy = {
  slug: string;
  title: string;
  headline: string;
  company: string;
  region: string;
  role: string;
  categories: CaseStudyCategory[];
  problem: string;
  architecture: string;
  stack: string[];
  metrics: string[];
  outcomes: string[];
  featured: boolean;
  demo?: string;
  thumbnail?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "noticninja",
    title: "NoticNinja",
    headline: "LLM-powered tax notice automation that helped secure millions in funding",
    company: "US-based SaaS",
    region: "United States",
    role: "Solution Architect & Tech Lead",
    categories: ["AI"],
    problem:
      "Manual processing of tax notices at scale required automation with high accuracy and auditability.",
    architecture:
      "Microservices on AWS EKS: OCR ingestion, LLM extraction pipelines, structured workflow engine, React dashboard.",
    stack: ["Node.js", "React", "Kubernetes", "AWS EKS", "LLM", "OCR"],
    metrics: ["Team of 5", "Multi-million $ fundraise", "SOC2 Type II"],
    outcomes: [
      "Designed and led full-stack delivery of tax notice automation platform.",
      "Contributed to company fundraising with production-ready architecture.",
      "Led SOC2 Type II compliance program.",
    ],
    featured: true,
    thumbnail: "/_static/projects/tixbag.png",
  },
  {
    slug: "fmt",
    title: "FMT (Free Malaysia Today)",
    headline: "Billions of monthly requests at ~50% lower infrastructure cost",
    company: "FMT",
    region: "Malaysia",
    role: "Solution Architect",
    categories: ["Media"],
    problem:
      "Malaysia's largest multilingual news site faced scaling bottlenecks and rising GCP costs.",
    architecture:
      "Next.js frontend upgrade, WordPress/GCP backend optimization, database tuning, CDN strategy.",
    stack: ["Next.js", "WordPress", "GCP", "MySQL"],
    metrics: ["Billions req/mo", "~50% cost reduction"],
    outcomes: [
      "Sustained peak traffic with improved reliability.",
      "Halved infrastructure spend through targeted optimization.",
    ],
    featured: true,
  },
  {
    slug: "properx",
    title: "ProperX",
    headline: "All-in-one social platform scaled to millions of fans in Norway",
    company: "ProperX",
    region: "Norway",
    role: "Solution Architect & DevOps Lead",
    categories: ["Social"],
    problem:
      "Combine Twitter, Instagram, and Twitch-like experiences into one creator platform.",
    architecture:
      "Node.js microservices, Next.js frontend, full DevOps ownership, compliance-ready infrastructure.",
    stack: ["Node.js", "Next.js", "Kubernetes", "AWS"],
    metrics: ["Millions of fans", "Thousands of creators", "SOC2 & GDPR"],
    outcomes: [
      "Architected and scaled multi-feature social platform.",
      "Led SOC2 Type II and GDPR compliance efforts.",
    ],
    featured: true,
  },
  {
    slug: "medentry",
    title: "MedEntry",
    headline: "Australia & UK's largest medical entrance exam prep platform",
    company: "MedEntry",
    region: "Australia / UK",
    role: "Full-Stack Engineer",
    categories: ["EdTech"],
    problem: "High-traffic edtech platform needed modern web and mobile experiences.",
    architecture:
      "Next.js web app, React Native mobile, backend deployment consulting.",
    stack: ["Next.js", "React Native", "Node.js"],
    metrics: ["Market leader in UCAT/HPAT prep"],
    outcomes: [
      "Built Next.js frontend and React Native mobile application.",
      "Improved reliability through infrastructure optimizations.",
    ],
    featured: true,
  },
  {
    slug: "nft-trader",
    title: "NFT Trader",
    headline: "Top-rated Web3 trading platform rebuild at peak adoption",
    company: "NFT Trader",
    region: "United States",
    role: "Lead Engineer",
    categories: ["Web3"],
    problem: "Legacy platform needed performance and UX overhaul during Web3 peak.",
    architecture: "Next.js rebuild with improved data fetching, wallet flows, and reliability.",
    stack: ["Next.js", "Web3", "TypeScript"],
    metrics: ["Top-rated marketplace at peak Web3"],
    outcomes: [
      "Delivered complete platform rebuild with measurable UX improvements.",
    ],
    featured: false,
  },
  {
    slug: "quikhitch",
    title: "QuikHitch",
    headline: "Canada carpooling app—from API to mobile",
    company: "QuikHitch",
    region: "Canada",
    role: "Solution Architect",
    categories: ["Mobility"],
    problem: "End-to-end carpooling product for the Canadian market.",
    architecture: "NestJS backend, Next.js marketing site, React Native mobile app.",
    stack: ["NestJS", "Next.js", "React Native"],
    metrics: ["Full product ownership"],
    outcomes: ["Owned architecture from system design through mobile delivery."],
    featured: false,
  },
  {
    slug: "satark",
    title: "Satark",
    headline: "AI cybersecurity intelligence platform through seed round",
    company: "Satark",
    region: "India",
    role: "Solution Architect",
    categories: ["Security", "AI"],
    problem: "AI-driven security product needed cloud architecture and frontend for investors.",
    architecture: "Cloud-native deployment, AI pipeline integration, production frontend.",
    stack: ["Node.js", "React", "AWS", "AI/ML"],
    metrics: ["Seed funding secured"],
    outcomes: [
      "Led architecture and frontend; contributed to seed fundraise positioning.",
    ],
    featured: false,
  },
  {
    slug: "xcoobee",
    title: "XCooBee",
    headline: "Serverless privacy & consent management on AWS",
    company: "XCooBee",
    region: "Global",
    role: "Backend Architect",
    categories: ["Security"],
    problem: "Consent workflows and privacy operations at scale with regulatory compliance.",
    architecture: "AWS Lambda, API Gateway, event-driven consent processing.",
    stack: ["AWS Lambda", "API Gateway", "Node.js"],
    metrics: ["Serverless at scale"],
    outcomes: ["Built serverless backend for privacy and consent management."],
    featured: false,
  },
  {
    slug: "tixbag",
    title: "Tixbag",
    headline: "US secondary ticket marketplace built from scratch",
    company: "Tixbag",
    region: "United States",
    role: "Founding Engineer",
    categories: ["Marketplace"],
    problem: "Launch a secure secondary ticket marketplace for the US market.",
    architecture: "Laravel backend, jQuery frontend, payments and fraud prevention flows.",
    stack: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    metrics: ["Built end-to-end as junior engineer"],
    outcomes: [
      "Independently architected and shipped full marketplace from zero.",
    ],
    featured: false,
    demo: "https://tixbag.com/",
    thumbnail: "/_static/projects/tixbag.png",
  },
  {
    slug: "gighub",
    title: "GigHub",
    headline: "Fiverr-style freelance marketplace for the US market",
    company: "GigHub",
    region: "United States",
    role: "Full-Stack Consultant",
    categories: ["Marketplace"],
    problem: "Greenfield gig marketplace for US clients.",
    architecture: "Node.js API, React SPA, marketplace flows and payments design.",
    stack: ["Node.js", "React"],
    metrics: ["Built from scratch"],
    outcomes: ["Delivered platform architecture and implementation as solo consultant."],
    featured: false,
  },
];

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter((c) => c.featured);

export const CASE_STUDY_CATEGORIES: CaseStudyCategory[] = [
  "AI",
  "Media",
  "Social",
  "EdTech",
  "Web3",
  "Mobility",
  "Security",
  "Marketplace",
];
