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
        destination: "https://linkedin.com/in/krunalcodes",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
