import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical, public pages. No synthetic lastModified timestamps.
  return ["/", "/angebot", "/lage", "/impressum", "/datenschutz"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
