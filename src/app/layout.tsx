import type { Metadata } from "next";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/seo";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import { GoogleTag } from "@/components/google-tag";
import { Analytics } from "@vercel/analytics/next";

// Lokal aus @fontsource statt next/font/google: Der Abruf bei Google ist im
// Vercel-Build (Turbopack) bei anderen Projektseiten gescheitert. PT Serif und
// PT Sans gibt es nicht als Variable Font, daher die bisherigen Schnitte 400/700.
const ptSerif = localFont({
  src: [
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/pt-serif/files/pt-serif-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pt-serif",
  display: "swap",
  // Wie bisher bei next/font/google: Fallback-Metriken auf Basis einer Serifenschrift.
  adjustFontFallback: "Times New Roman",
});

const ptSans = localFont({
  src: [
    { path: "../../node_modules/@fontsource/pt-sans/files/pt-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../node_modules/@fontsource/pt-sans/files/pt-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-pt-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eigentumswohnungen in Uetliburg | Mirabell",
    template: "%s | Mirabell",
  },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      suppressHydrationWarning
      className={cn("h-full antialiased", ptSerif.variable, ptSans.variable)}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `(function(){try{var c=JSON.parse(localStorage.getItem('mirabell-consent'));if(c&&c.version===2)document.documentElement.dataset.mirabellConsent='known';}catch(e){}})();` }}
        />
        <GoogleTag />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <ConsentProvider>
          {children}
          <CookieBanner />
          <GoogleAnalytics />
          <Toaster position="bottom-center" />
        </ConsentProvider>
        <Analytics />
      </body>
    </html>
  );
}
