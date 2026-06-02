export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Infynno Solutions",
    role: "Technical Project Manager",
    location: "Ahmedabad",
    start: "Dec 2019",
    end: "May 2026",
    highlights: [
      "Architected Node.js microservices and Kubernetes on AWS EKS across 6+ client products at millions to billions of requests monthly.",
      "Led NoticNinja (LLM tax notice automation): microservices architecture, React frontend, team of 5, contributed to multi-million dollar fundraise.",
      "Scaled ProperX (Norway social platform) to millions of fans; owned DevOps and SOC2/GDPR compliance.",
      "Cut FMT infrastructure costs ~50% while sustaining billions of monthly requests.",
    ],
  },
  {
    company: "Freelancer",
    role: "Software Consultant",
    location: "Ahmedabad",
    start: "Feb 2019",
    end: "Nov 2019",
    highlights: [
      "Delivered full-stack applications for US clients end-to-end.",
      "Built GigHub, a Fiverr-style marketplace, with Node.js and React.",
    ],
  },
  {
    company: "Rayvat Outsourcing",
    role: "Software Engineer",
    location: "Gandhinagar",
    start: "Feb 2017",
    end: "Jan 2019",
    highlights: [
      "Built TixBag US ticket marketplace from scratch (Laravel + jQuery) as junior engineer.",
      "Delivered multiple client products with CodeIgniter and Laravel.",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Engineering",
  school: "Gujarat Technological University",
  years: "2012 — 2016",
  extras: ["Google Developer Group member", "Active hackathon participant"],
};

export const OPEN_SOURCE = [
  {
    name: "Gatsby.js",
    role: "Core Maintainer",
    description:
      "Contributed to core features, PR reviews, and developer experience for a widely adopted React static site framework.",
    href: "https://github.com/gatsbyjs/gatsby",
  },
  {
    name: "cal.com",
    role: "Open Source Contributor",
    description:
      "Contributed features, bug fixes, and code quality improvements to open source scheduling infrastructure.",
    href: "https://github.com/calcom/cal.com",
  },
  {
    name: "react-loading-io",
    role: "Author",
    description: "CSS-only loading spinners for React, published on npm.",
    href: "https://github.com/krunalcodes/react-loading-io",
  },
];
