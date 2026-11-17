import type { NextConfig } from "next";

// Sicherheits-Header (Sicherheitsprüfung 2026-11-17). Die Content-Security-Policy
// enthält nur Regeln, die keine Skripte, Karten oder eingebetteten Navigatoren
// betreffen (object-src, base-uri, form-action, frame-ancestors).
const SICHERHEIT = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), payment=(), usb=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
    return [{ source: "/:path*", headers: [{ key: "Content-Security-Policy", value: "object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self' https://kundenportal.livetour.ch https://www.livetour.ch https://livetour.ch" }, ...SICHERHEIT] }];
  },
  experimental: {
    inlineCss: true,
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
