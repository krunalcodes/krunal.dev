export type WebApp = {
  title: string;
  repo: string;
  description: string;
  tags: string[];
  demo?: string;
  thumbnail: string;
};

export const WEB_APPS: WebApp[] = [
  {
    title: "Tixbag",
    // repo: "https://github.com/krunalcodes/tixbag",
    demo: "https://tixbag.com/",
    description:
      "A US-based secondary ticket marketplace with secure payments, fraud prevention, real-time listings, and scalable infrastructure.",
    tags: ["Codeigniter", "Bootstrap", "jQuery", "MySQL", "HTML", "CSS"],
    thumbnail: "/_static/projects/tixbag.png",
  },
] as WebApp[];

export type Tool = {
  title: string;
  repo: string;
  demo: string;
  description: string;
  techs: string[];
};

export const TOOLS: Tool[] = [
  {
    title: "React Loading IO",
    repo: "https://github.com/krunalcodes/react-loading-io",
    demo: "https://github.com/krunalcodes/react-loading-io",
    description: "CSS-only spinners of loading.io for React",
    techs: ["npm-package"],
  },
];
