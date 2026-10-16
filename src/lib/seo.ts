import type { Metadata } from "next";

export const SITE_URL = "https://www.mirabell.immobilien";
export const SITE_DESCRIPTION = "13 Eigentumswohnungen mit 3.5 und 4.5 Zimmern in Uetliburg: Entdecken Sie Mirabell mit Seesicht, Grundrissen, Preisen und persönlicher Beratung.";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Mirabell`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      type: "website",
      locale: "de_CH",
      siteName: "Mirabell",
      title: fullTitle,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: `${SITE_URL}/images/aussen2.jpg`, alt: "Mirabell – Eigentumswohnungen in Uetliburg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/images/aussen2.jpg`],
    },
  };
}
