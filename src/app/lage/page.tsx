import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { ConsentEmbed } from "@/components/consent/consent-embed";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Lage",
  description: "Mirabell im Dorfkern von Uetliburg — Region, unmittelbare Umgebung und interaktive Karte.",
};

const MAKRO = [
  {
    titel: "Lage & Umgebung",
    text: "Uetliburg gehört zur Gemeinde Gommiswald im Kanton St. Gallen und liegt in der attraktiven Region zwischen Zürichsee und Voralpen. Die Lage verbindet den ländlichen Charakter des Ortes mit der Nähe zu den regionalen Zentren und schafft damit einen vielseitigen Ausgangspunkt für Wohnen, Arbeiten und Freizeit.",
  },
  {
    titel: "Verkehr",
    text: "Die Bushaltestelle Uetliburg SG, Ottenhofen befindet sich direkt vor der Haustüre und bietet eine komfortable Anbindung an den öffentlichen Verkehr. Rapperswil-Jona, Wattwil, Glarus Nord, Wetzikon und Zürich sowie der angrenzende Kanton Schwyz sind mit dem Auto oder den öffentlichen Verkehrsmitteln gut erreichbar.",
  },
  {
    titel: "Naherholung",
    text: "Die idyllische Landschaft rund um Uetliburg bietet ideale Voraussetzungen für eine aktive Freizeitgestaltung. Wander- und Velowege, weitläufige Wälder sowie die Nähe zum Obersee laden das ganze Jahr über zu Ausflügen und vielfältigen Naturerlebnissen ein.",
  },
];

const REGIONALE_ZENTREN = [
  { name: "Wattwil", km: "11.6 km", oev: "35 Min.", auto: "16 Min." },
  { name: "Rapperswil-Jona", km: "21.7 km", oev: "29 Min.", auto: "27 Min." },
  { name: "Glarus Nord", km: "20.8 km", oev: "70 Min.", auto: "24 Min." },
  { name: "Wetzikon", km: "32.5 km", oev: "50 Min.", auto: "34 Min." },
  { name: "Zürich", km: "61.0 km", oev: "70 Min.", auto: "50 Min." },
];

type Mikro = {
  kategorie: string;
  name: string;
  meter: number;
  fuss: number;
  oev: number | null;
  auto: number | null;
  velo: number | null;
};

const MIKRO: Mikro[] = [
  { kategorie: "ÖV", name: "Bushaltestelle Uetliburg SG, Ottenhofen", meter: 9, fuss: 1, oev: null, auto: null, velo: null },
  { kategorie: "Einkaufen", name: "Coop Supermarkt Gommiswald", meter: 1800, fuss: 22, oev: 8, auto: 3, velo: 6 },
  { kategorie: "Bildung", name: "Primarschule Gommiswald", meter: 2200, fuss: 30, oev: 8, auto: 4, velo: 9 },
  { kategorie: "Gesundheit", name: "Familienpraxis Gommiswald", meter: 1700, fuss: 23, oev: 10, auto: 3, velo: 6 },
  { kategorie: "Freizeit & Natur", name: "Badi Gommiswald", meter: 1700, fuss: 23, oev: 11, auto: 3, velo: 6 },
];

export default function LagePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Video, Titel & Informationen darunter statt darauf.
            H.264/MP4 mit faststart, 1080p, ohne Tonspur (das Video läuft ohnehin
            stumm). Das Poster steht sofort, während das Video noch lädt — ohne
            es bliebe der Hero beim ersten Aufruf für einen Moment leer. */}
        <section className="relative h-screen w-full overflow-hidden bg-primary">
          <video
            src="/videos/lage-hero.mp4"
            poster="/videos/lage-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </section>

        <section className="shell pt-14 pb-section-mobile md:pt-20 md:pb-section">
          <div>
            <Eyebrow>Lage</Eyebrow>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
              Wohnen im Herzen von Uetliburg
            </h1>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              An der Ottenhofenstrasse 53 und 55 geniesst Mirabell eine ruhige
              Lage mitten im Dorf. Der Blick in Richtung Obersee und die
              naturnahe Umgebung verleihen dem Standort seine besondere
              Wohnqualität und verbinden Ruhe, Aussicht und Dorfleben auf
              angenehme Weise.
            </p>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Die nachfolgende Karte zeigt die Lage von Mirabell und die
              unmittelbare Umgebung.
            </p>
          </div>
        </section>

        {/* INTERAKTIVE KARTE (ATLIST) */}
        <section className="shell pb-section-mobile md:pb-section">
          <Reveal>
            <ConsentEmbed id="karte" className="min-h-[420px] rounded-[var(--radius-base)]">
              <div className="overflow-hidden rounded-[var(--radius-base)] border border-border">
                <iframe
                  src="https://my.atlist.com/map/8ab23f36-b8e8-441a-9f3e-facb99afe6d7?share=true"
                  allow="geolocation 'self' https://my.atlist.com"
                  width="100%"
                  height="700"
                  loading="lazy"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  id="atlist-embed"
                  className="block w-full"
                />
              </div>
            </ConsentEmbed>
          </Reveal>
        </section>

        {/* MAKROEBENE */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <Reveal>
              <Eyebrow>Region</Eyebrow>
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

            <Reveal delay={180} className="mt-12">
              <p className="font-heading text-lg text-primary">Regionale Zentren</p>
              <div className="mt-4 overflow-hidden rounded-[var(--radius-base)] border border-border bg-surface">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ort</TableHead>
                      <TableHead>Distanz</TableHead>
                      <TableHead>ÖV</TableHead>
                      <TableHead>Auto</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {REGIONALE_ZENTREN.map((ort) => (
                      <TableRow key={ort.name}>
                        <TableCell className="font-medium text-primary">{ort.name}</TableCell>
                        <TableCell className="text-foreground-muted">{ort.km}</TableCell>
                        <TableCell className="text-foreground-muted">{ort.oev}</TableCell>
                        <TableCell className="text-foreground-muted">{ort.auto}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MIKROEBENE */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <Eyebrow>Unmittelbare Umgebung</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl text-primary md:text-4xl">Mikroebene</h2>
            <p className="mt-4 max-w-[52ch] text-sm text-foreground-muted">
              Distanz und Fahrzeit ab Ottenhofenstrasse 53 + 55, 8738 Uetliburg.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-10 overflow-hidden rounded-[var(--radius-base)] border border-border bg-surface">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kategorie</TableHead>
                  <TableHead>Ort</TableHead>
                  <TableHead>Meter</TableHead>
                  <TableHead>Zu Fuss</TableHead>
                  <TableHead>ÖV</TableHead>
                  <TableHead>Auto</TableHead>
                  <TableHead>Velo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MIKRO.map((item) => (
                  <TableRow key={item.kategorie}>
                    <TableCell className="font-medium text-primary">{item.kategorie}</TableCell>
                    <TableCell className="whitespace-normal text-foreground-muted">{item.name}</TableCell>
                    <TableCell className="text-foreground-muted">{item.meter} m</TableCell>
                    <TableCell className="text-foreground-muted">{item.fuss} Min.</TableCell>
                    <TableCell className="text-foreground-muted">{item.oev !== null ? `${item.oev} Min.` : "–"}</TableCell>
                    <TableCell className="text-foreground-muted">{item.auto !== null ? `${item.auto} Min.` : "–"}</TableCell>
                    <TableCell className="text-foreground-muted">{item.velo !== null ? `${item.velo} Min.` : "–"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
