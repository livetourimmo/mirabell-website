import type { Metadata } from "next";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/seo";
import { PT_Serif, PT_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Analytics } from "@vercel/analytics/next";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={cn("h-full antialiased", ptSerif.variable, ptSans.variable)}
    >
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
