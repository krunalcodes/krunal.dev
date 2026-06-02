import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // cacheComponents: true,
  turbopack: {},

  redirects: async () => {
    return [
      {
        source: "/resume",
        destination: "/Resume%202026.pdf",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
