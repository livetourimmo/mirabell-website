import type { Metadata } from "next";
import { PT_Serif, PT_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { CookieBanner } from "@/components/consent/cookie-banner";

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
  metadataBase: new URL("https://www.mirabell.immobilien"),
  title: {
    default: "Mirabell — Wo Seesicht und Weitblick zuhause sind",
    template: "%s | Mirabell",
  },
  description:
    "Mirabell in Uetliburg: 13 charaktervolle Eigentumswohnungen (3.5 & 4.5 Zimmer) mit grosszügiger Autoeinstellhalle inklusive E-Mobilität.",
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
          <Toaster position="bottom-center" />
        </ConsentProvider>
      </body>
    </html>
  );
}
