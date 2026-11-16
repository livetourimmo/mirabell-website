import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Nur WebP: AVIF verschmierte bei den Visualisierungen feine Strukturen
    // (Laub, Stoffe) sichtbar, siehe src/lib/bilder.ts BILDQUALITAET.
    formats: ["image/webp"],
    qualities: [75, 85],
  },
  // Einbetten nur durch die Seite selbst, das liveTour-Kundenportal (Rückmeldung der Bauherrschaft
  // zur Webseite) und die liveTour-Website (Projektseite /projekte/mirabell zeigt die Webseite live).
  // Schützt zugleich vor Clickjacking durch fremde Seiten.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "Content-Security-Policy", value: "frame-ancestors 'self' https://kundenportal.livetour.ch https://www.livetour.ch https://livetour.ch" }] }];
  },
  experimental: {
    inlineCss: true,
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
