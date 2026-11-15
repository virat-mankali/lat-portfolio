import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.WORKERS_CI === "1" || process.env.STATIC_EXPORT === "1" ? "export" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
