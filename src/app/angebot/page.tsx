import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Download } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { ConsentEmbed } from "@/components/consent/consent-embed";
import { MOCK_DOWNLOADS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Angebot",
  description: "Alle 13 Wohnungen im Überblick: Grundrisse, Flächen, Preise und Downloads zum Neubauprojekt Mirabell in Uetliburg.",
};

const MATERIALS = [
  { titel: "Böden", text: "Parkett aus definierter Grundauswahl mit individuellen Wahlmöglichkeiten im Rahmen des vorgesehenen Budgets." },
  { titel: "Fassade", text: "Kompaktfassade mit mineralischer Wärmedämmung (22 cm). Sockelgeschoss weiss gestrichen, Obergeschosse mit Grobputz in zurückhaltendem Farbton." },
  { titel: "Fenster", text: "Holz-Metall-Fenster mit Dreifachverglasung, raumhoch mit Hebeschiebefenster zu Terrasse, Balkon oder Loggia." },
  { titel: "Heizung", text: "Erdsonden-Wärmepumpe mit acht Erdsonden à 200 m Tiefe, Fussbodenheizung mit Einzelraumregulierung." },
  { titel: "Küche", text: "Küchenausstattung aus definierter Grundauswahl mit individuellen Wahlmöglichkeiten im Rahmen des vorgesehenen Budgets." },
  { titel: "Bad", text: "Sanitärapparate aus definierter Grundauswahl mit individuellen Wahlmöglichkeiten im Rahmen des vorgesehenen Budgets. Eigener Waschturm in jeder Wohnung." },
];

export default function AngebotPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf */}
        <section className="relative h-screen w-full">
          <Image
            src="/images/hero-platzhalter.jpg"
            alt="Architektur-Visualisierung Mirabell, Abendstimmung"
            fill
            priority
            sizes="100vw"
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
            <ConsentEmbed id="navigator" className="min-h-[420px] rounded-[var(--radius-base)]">
              <iframe
                id="lvt-axo-mirabell"
                src="https://lvt-gamma.vercel.app/immobilie/mirabell?sort=source"
                title="Immobiliennavigator"
                style={{ width: "100%", border: 0, minHeight: 760 }}
                loading="lazy"
              />
            </ConsentEmbed>
          </Reveal>
          <Script id="lvt-axo-mirabell-resize" strategy="afterInteractive">
            {`
              (function () {
                // Das iframe existiert erst nach erteilter Einwilligung, deshalb
                // wird es bei jeder Nachricht neu gesucht statt einmal beim Start.
                window.addEventListener("message", function (event) {
                  var iframe = document.getElementById("lvt-axo-mirabell");
                  if (!iframe) return;
                  if (
                    event.source !== iframe.contentWindow ||
                    !event.data ||
                    event.data.type !== "lvt-axo-resize" ||
                    typeof event.data.height !== "number"
                  ) {
                    return;
                  }
                  iframe.style.height = Math.ceil(event.data.height) + "px";
                });
              })();
            `}
          </Script>
        </section>

        {/* DOWNLOADS */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <Reveal>
              <Eyebrow>Unterlagen</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Downloads</h2>
            </Reveal>
            {/* Auf Desktop stehen alle fünf Blöcke in einer Reihe; darunter
                bricht das Raster über 3 auf 2 Spalten sauber um. */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {MOCK_DOWNLOADS.map((item, i) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-heading text-base leading-snug text-primary">{item.titel}</p>
                      <Download className="mt-0.5 size-4 shrink-0 text-foreground-muted" strokeWidth={1.5} />
                    </div>
                    {/* text-left gegen den globalen Blocksatz — in den schmalen
                        Spalten reisst justify sonst Wortlücken auf. */}
                    <p className="mt-1.5 text-left! text-xs leading-snug text-foreground-muted">{item.beschreibung}</p>
                    <p className="mt-auto pt-3 text-left! text-[11px] font-medium uppercase tracking-wide text-foreground-muted">
                      {item.dateityp} · {item.dateigroesse}
                    </p>
                  </>
                );
                const className =
                  "flex h-full flex-col rounded-[var(--radius-base)] border border-border bg-surface p-4";
                return (
                  <Reveal key={item.id} delay={i * 60} className="h-full">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className={`${className} transition-colors hover:border-primary`}>
                        {content}
                      </a>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            {/* VIRTUELLER RUNDGANG — responsiv über das Seitenverhältnis,
                damit die Tour auf jedem Screen ohne Scrollbalken passt. */}
            <Reveal delay={120} className="mt-14">
              <Eyebrow>Virtueller Rundgang</Eyebrow>
              <h3 className="mt-3 font-heading text-2xl text-primary md:text-3xl">
                Mirabell in 360° erleben
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm text-foreground-muted">
                Bewegen Sie sich frei durch die Musterwohnung und entdecken Sie
                Räume, Ausblick und Materialisierung aus jedem Blickwinkel.
              </p>
              <ConsentEmbed
                id="rundgang"
                className="mt-6 aspect-[4/3] w-full rounded-[var(--radius-base)] sm:aspect-[16/10] lg:aspect-[16/9]"
              >
                <div className="aspect-[4/3] h-full w-full overflow-hidden rounded-[var(--radius-base)] border border-border bg-surface sm:aspect-[16/10] lg:aspect-[16/9]">
                  <iframe
                    src="https://app.cloudpano.com/tours/vAe86_sORt"
                    title="Virtueller Rundgang Mirabell"
                    loading="lazy"
                    allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                    allowFullScreen
                    className="block h-full w-full border-0"
                  />
                </div>
              </ConsentEmbed>
            </Reveal>
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
                  src="/images/innen4.jpg"
                  alt="Schlafzimmer mit direktem Zugang zum Bad"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
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
