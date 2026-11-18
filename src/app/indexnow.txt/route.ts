import { INDEXNOW_SCHLUESSEL } from "@/lib/seo";

/** Schlüsseldatei für IndexNow (lib/seo.ts). Steht bewusst nicht in der Sitemap. */
export function GET(): Response {
  return new Response(INDEXNOW_SCHLUESSEL, {
    headers: { "Cache-Control": "public, max-age=86400", "Content-Type": "text/plain; charset=utf-8" },
  });
}
