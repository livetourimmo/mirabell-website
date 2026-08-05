import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { UnitsTable } from "@/components/units-table";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { MOCK_DOWNLOADS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebot",
  description: "Alle 13 Wohnungen im Überblick: Grundrisse, Flächen, Preise und Downloads zum Neubauprojekt Mirabell in Uetliburg.",
};

const MATERIALS = [
  { titel: "Böden", text: "Eichenparkett in Wohn- und Schlafräumen, Feinsteinzeug in Nasszellen." },
  { titel: "Fassade", text: "Mineralischer Grobputz, Satteldach mit Ziegeleindeckung." },
  { titel: "Fenster", text: "Holz-Metall-Fenster mit Dreifachverglasung." },
  { titel: "Heizung", text: "Erdsonden-Wärmepumpe für beide Häuser." },
  { titel: "Küche", text: "[Platzhalter: Küchenhersteller und Ausstattung folgt]" },
  { titel: "Bad", text: "[Platzhalter: Sanitärausstattung folgt]" },
];

export default function AngebotPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf */}
        <section className="relative h-screen w-full">
          <PlaceholderMedia
            label="Platzhalter: Visualisierung Angebotsseite"
            className="h-full w-full"
            aspect=""
          />
        </section>

        <section className="shell pt-14 pb-16 md:pt-20 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Angebot</p>
          <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
            Dreizehn Wohnungen im Detail
          </h1>
          <p className="mt-6 max-w-[52ch] text-foreground-muted">
            Grundrisse, Flächen und Preise für Haus A und Haus B — filterbar nach
            Geschoss und Zimmerzahl, inklusive Baubeschrieb und Plänen zum Download.
          </p>
        </section>

        {/* EINLEITUNG */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal className="max-w-[62ch]">
            <p className="text-foreground-muted">
              Vom 2.5-Zimmer-Erstbezug bis zur grosszügigen 4.5-Zimmer-Wohnung im
              Dachgeschoss: Der Navigator unten zeigt den aktuellen Stand aller
              Wohnungen in Haus A und Haus B, inklusive Status und direktem Zugriff
              auf die jeweiligen Grundrisse.
            </p>
          </Reveal>
        </section>

        {/* NAVIGATOR / ANGEBOTSLISTE */}
        <section id="navigator" className="shell pb-section-mobile md:pb-section">
          <Reveal>
            <UnitsTable />
          </Reveal>
        </section>

        {/* DOWNLOADS */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Unterlagen</p>
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
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Materialisierung</p>
            <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Ausbau &amp; Materialien</h2>
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
