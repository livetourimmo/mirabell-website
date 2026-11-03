import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Nur WebP: AVIF verschmierte bei den Visualisierungen feine Strukturen
    // (Laub, Stoffe) sichtbar, siehe src/lib/bilder.ts BILDQUALITAET.
    formats: ["image/webp"],
    qualities: [75, 85],
  },
  experimental: {
    inlineCss: true,
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
