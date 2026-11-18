import type { Metadata } from "next";

export const SITE_URL = "https://www.mirabell.immobilien";
export const SITE_DESCRIPTION = "13 Eigentumswohnungen mit 3.5 und 4.5 Zimmern in Uetliburg: Entdecken Sie Mirabell mit Seesicht, Grundrissen, Preisen und persönlicher Beratung.";

/** IndexNow-Schlüssel, ausgeliefert unter /indexnow.txt (app/indexnow.txt/route.ts). */
export const INDEXNOW_SCHLUESSEL = "6eee01cf67d2c4a60f3bf2237471f058";

/**
 * Metadaten einer Seite: Canonical und og:url selbstreferenzierend.
 * `noindex` für Seiten, die nie in den Suchindex gehören (Impressum,
 * Datenschutz); diese stehen auch nicht in der Sitemap.
 */
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  { noindex = false }: { noindex?: boolean } = {},
): Metadata {
  const fullTitle = `${title} | Mirabell`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      locale: "de_CH",
      siteName: "Mirabell",
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: `${SITE_URL}/images/og-mirabell.jpg`, width: 1200, height: 630, alt: "Mirabell – Eigentumswohnungen in Uetliburg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/images/og-mirabell.jpg`],
    },
  };
}
