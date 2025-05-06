import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true, // for permanent redirect (308 status)
      },
    ];
  },
};

export default nextConfig;
