import type { Metadata } from "next";
import Image from "next/image";
import { Download, Table as TableIcon } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { MOCK_DOWNLOADS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebot",
  description: "Alle 13 Wohnungen im Überblick: Grundrisse, Flächen, Preise und Downloads zum Neubauprojekt Mirabell in Uetliburg.",
};

const MATERIALS = [
  { titel: "Böden", text: "Parkett individuell wählbar." },
  { titel: "Fassade", text: "Kompaktfassade mit mineralischer Wärmedämmung (22 cm). Sockelgeschoss weiss gestrichen, Obergeschosse mit Grobputz in zurückhaltendem Farbton." },
  { titel: "Fenster", text: "Holz-Metall-Fenster mit Dreifachverglasung, raumhoch mit Hebeschiebefenster zu Terrasse, Balkon oder Loggia." },
  { titel: "Heizung", text: "Erdsonden-Wärmepumpe mit acht Erdsonden à 200 m Tiefe, Fussbodenheizung mit Einzelraumregulierung." },
  { titel: "Küche", text: "Kücheneinrichtungen individuell wählbar." },
  { titel: "Bad", text: "Sanitärapparate individuell wählbar. Eigener Waschturm in jeder Wohnung." },
];

export default function AngebotPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf */}
        <section className="relative h-screen w-full">
          <Image
            src="/images/aussen1-v2.png"
            alt="Architektur-Visualisierung Mirabell, Aussenansicht Haus A und Haus B"
            fill
            priority
            className="object-cover"
          />
        </section>

        <section className="shell pt-14 pb-section-mobile md:pt-20 md:pb-section">
          <div>
            <Eyebrow>Angebot</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
              Mirabell auf einen Blick
            </h1>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Entdecken Sie sämtliche Grundrisse, Wohnflächen und Preise der
              13 Eigentumswohnungen übersichtlich an einem Ort. Das Angebot
              lässt sich nach Geschoss und Zimmerzahl filtern. Ergänzende
              Pläne und der Baubeschrieb stehen direkt zum Download bereit.
            </p>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Beide Häuser sind mit einem Lift erschlossen und hindernisfrei
              nach SIA 500 konzipiert. Eine moderne Sonnerie mit Videokamera
              sowie 23 Einstellhallenplätze mit Vorbereitung für
              E-Ladestationen ergänzen den Wohnkomfort.
            </p>
          </div>
        </section>

        {/* NAVIGATOR / ANGEBOTSLISTE */}
        <section id="navigator" className="shell pb-section-mobile md:pb-section">
          <Reveal>
            <div className="flex min-h-[420px] w-full flex-col items-center justify-center gap-4 rounded-[var(--radius-base)] border border-dashed border-border bg-[color-mix(in_srgb,var(--color-secondary)_18%,var(--color-background))] text-center">
              <TableIcon className="size-7 text-foreground-muted" strokeWidth={1.25} />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">
                Platzhalter
              </span>
            </div>
          </Reveal>
        </section>

        {/* DOWNLOADS */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <Reveal>
              <Eyebrow>Unterlagen</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Downloads</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {MOCK_DOWNLOADS.map((item, i) => (
                <Reveal key={item.id} delay={i * 60}>
                  <div className="flex items-start justify-between gap-4 rounded-[var(--radius-base)] border border-border bg-surface p-6">
                    <div>
                      <p className="font-heading text-lg text-primary">{item.titel}</p>
                      <p className="mt-1.5 text-sm text-foreground-muted">{item.beschreibung}</p>
                      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                        {item.dateityp} · {item.dateigroesse}
                      </p>
                    </div>
                    <Download className="mt-1 size-5 shrink-0 text-foreground-muted" strokeWidth={1.5} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIALISIERUNG */}
        <section id="materialisierung" className="shell scroll-mt-24 py-section-mobile md:py-section">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
            <Reveal>
              <Eyebrow>Materialisierung</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Ausbau &amp; Materialien</h2>
              <p className="mt-4 max-w-[52ch] text-foreground-muted">
                Sorgfältig ausgewählte Materialien, zeitlose Oberflächen und
                aufeinander abgestimmte Ausstattungsdetails prägen den
                Innenausbau von Mirabell und schaffen ein harmonisches
                Gesamtbild mit Raum für persönliche Akzente.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-base)]">
                <Image
                  src="/images/v4_Innen4.jpg"
                  alt="Schlafzimmer mit direktem Zugang zum Bad"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.map((material, i) => (
              <Reveal key={material.titel} delay={i * 50}>
                <div className="border-t border-border pt-5">
                  <p className="font-heading text-lg text-primary">{material.titel}</p>
                  <p className="mt-2 text-sm text-foreground-muted">{material.text}</p>
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
