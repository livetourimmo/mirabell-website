import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { PlaceholderMedia } from "@/components/placeholder-media";

export const metadata: Metadata = {
  title: "Lage",
  description: "Mirabell im Dorfkern von Uetliburg — Region, unmittelbare Umgebung und interaktive Karte.",
};

const MAKRO = [
  { titel: "Region", text: "Uetliburg liegt im Hügelland zwischen Zürichsee und Obersee, Kanton St. Gallen." },
  { titel: "Verkehr", text: "[Platzhalter: Anbindung ÖV / Autobahn folgt]" },
  { titel: "Naherholung", text: "Hügelland und Seeufer in unmittelbarer Nähe, Blick Richtung Obersee." },
];

const MIKRO = [
  { titel: "Einkauf", text: "[Platzhalter: Nahversorgung in Gehdistanz folgt]" },
  { titel: "Schule", text: "[Platzhalter: Schulhaus / Kindergarten folgt]" },
  { titel: "Öffentlicher Verkehr", text: "[Platzhalter: nächste Haltestelle folgt]" },
];

export default function LagePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf */}
        <section className="relative h-screen w-full">
          <PlaceholderMedia
            label="Platzhalter: Luftaufnahme Uetliburg"
            className="h-full w-full"
            aspect=""
          />
        </section>

        <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Lage</p>
          <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
            Im Dorfkern von Uetliburg
          </h1>
          <p className="mt-6 max-w-[52ch] text-foreground-muted">
            Ottenhofenstrasse 53 und 55 — ruhig gelegen und dennoch mitten im Dorf,
            mit Blick über das Hügelland Richtung Obersee.
          </p>
        </section>

        {/* EINLEITUNG */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal className="max-w-[62ch]">
            <p className="text-foreground-muted">
              Die folgende Karte zeigt Mirabell im Zusammenhang mit der unmittelbaren
              Umgebung — von Einkaufsmöglichkeiten über Schulen bis zu
              Naherholungsgebieten am See.
            </p>
          </Reveal>
        </section>

        {/* INTERAKTIVE KARTE (ATLIST) */}
        <section className="shell pb-section-mobile md:pb-section">
          <Reveal>
            <div className="relative flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-base)] border border-dashed border-border bg-[color-mix(in_srgb,var(--color-secondary)_18%,var(--color-background))] text-center">
              <MapPin className="size-7 text-foreground-muted" strokeWidth={1.25} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground-muted">
                  Platzhalter: Interaktive Atlist-Karte
                </p>
                <p className="mx-auto mt-2 max-w-md text-xs text-foreground-muted">
                  Embed-Code aus <code>atlist-embed.txt</code> liegt noch nicht vor. Sobald
                  verfügbar: Gesture Handling „greedy", Suchfeld-Placeholder „Suche",
                  Atlist-Branding ausgeblendet.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* MAKROEBENE */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Region</p>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Makroebene</h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {MAKRO.map((item, i) => (
                <Reveal key={item.titel} delay={i * 60}>
                  <div className="border-t border-border pt-5">
                    <p className="font-heading text-lg text-primary">{item.titel}</p>
                    <p className="mt-2 text-sm text-foreground-muted">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MIKROEBENE */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Unmittelbare Umgebung</p>
            <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Mikroebene</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {MIKRO.map((item, i) => (
              <Reveal key={item.titel} delay={i * 60}>
                <div className="border-t border-border pt-5">
                  <p className="font-heading text-lg text-primary">{item.titel}</p>
                  <p className="mt-2 text-sm text-foreground-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
