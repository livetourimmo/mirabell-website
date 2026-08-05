import type { Metadata } from "next";
import Image from "next/image";
import { Download, Table as TableIcon } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { MirabelleAccent } from "@/components/mirabelle-accent";
import { MOCK_DOWNLOADS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebot",
  description: "Alle 13 Wohnungen im Überblick: Grundrisse, Flächen, Preise und Downloads zum Neubauprojekt Mirabell in Uetliburg.",
};

const MATERIALS = [
  { titel: "Böden", text: "Eichenparkett in Wohn- und Schlafräumen, Feinsteinzeug in Nasszellen." },
  { titel: "Fassade", text: "Mineralischer Grobputz, Satteldach mit Ziegeleindeckung." },
  { titel: "Fenster", text: "Holz-Metall-Fenster mit Dreifachverglasung, raumhoch mit Hebeschiebefenster zu Terrasse, Balkon oder Loggia." },
  { titel: "Heizung", text: "Erdsonden-Wärmepumpe mit acht Erdsonden à 200 m Tiefe, Fussbodenheizung mit Einzelraumregulierung." },
  { titel: "Küche", text: "Individuell wählbar, Ausbaubudget CHF 30'000–35'000." },
  { titel: "Bad", text: "Individuell wählbar, Ausbaubudget CHF 20'000–25'000. Eigener Waschturm in jeder Wohnung." },
];

export default function AngebotPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf */}
        <section className="relative h-screen w-full">
          <Image
            src="/images/aussen1.png"
            alt="Architektur-Visualisierung Mirabell, Aussenansicht Haus A und Haus B"
            fill
            priority
            className="object-cover"
          />
        </section>

        <section className="shell flex items-start justify-between gap-6 pt-14 pb-section-mobile md:pt-20 md:pb-section">
          <div>
            <Eyebrow>Angebot</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
              Mirabell in einem Blick
            </h1>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Alle Grundrisse, Flächen und Preise der dreizehn Wohnungen in
              Übersicht. Filterbar nach Geschoss und Zimmerzahl. Der Baubeschrieb
              und die Pläne stehen Ihnen als Download zur Verfügung.
            </p>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Beide Häuser verfügen über einen Lift und sind hindernisfrei
              nach SIA 500 erschlossen, ergänzt durch eine moderne Sonnerie
              mit Videokamera sowie eine Tiefgarage mit Vorbereitung für
              E-Ladestationen.
            </p>
          </div>
          <MirabelleAccent />
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
          <Reveal>
            <Eyebrow>Materialisierung</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Ausbau &amp; Materialien</h2>
            <p className="mt-4 max-w-[60ch] text-foreground-muted">
              Dank individueller Auswahlmöglichkeiten und grosszügiger
              Ausbaubudgets können Sie zahlreiche Materialien und
              Ausstattungsdetails Ihren persönlichen Vorstellungen anpassen —
              Parkett für CHF 150/m² sowie Platten für CHF 200/m².
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
