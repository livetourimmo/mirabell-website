import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
  },
  experimental: {
    inlineCss: true,
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
