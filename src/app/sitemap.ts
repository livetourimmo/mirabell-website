import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Nur indexierbare Seiten. Impressum und Datenschutz sind noindex und stehen
 * deshalb nicht drin.
 *
 * lastModified = Datum der letzten inhaltlichen Änderung der Seite (aus der
 * Git-Historie), kein Build-Zeitstempel. Bei Inhaltsänderungen nachführen.
 */
const SEITEN: { path: string; lastModified: string }[] = [
  { path: "/", lastModified: "2026-11-03" },
  { path: "/angebot", lastModified: "2026-11-03" },
  { path: "/lage", lastModified: "2026-10-16" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SEITEN.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
