import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { SectionDivider } from "@/components/mountain-mark";

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
          <Image
            src="/images/drohne-uetliburg.JPG"
            alt="Luftaufnahme Uetliburg mit Blick Richtung Obersee"
            fill
            priority
            className="object-cover"
          />
        </section>

        <section className="shell pt-14 pb-section-mobile md:pt-20 md:pb-section">
          <Eyebrow>Lage</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[1.02] text-primary md:text-6xl">
            Im Dorfkern von Uetliburg
          </h1>
          <p className="mt-6 max-w-[52ch] text-foreground-muted">
            Ottenhofenstrasse 53 und 55 — ruhig gelegen und dennoch mitten im Dorf,
            mit Blick über das Hügelland Richtung Obersee.
          </p>
          <p className="mt-6 max-w-[52ch] text-foreground-muted">
            Die folgende Karte zeigt Mirabell im Zusammenhang mit der unmittelbaren
            Umgebung — von Einkaufsmöglichkeiten über Schulen bis zu
            Naherholungsgebieten am See.
          </p>
        </section>

        {/* INTERAKTIVE KARTE (ATLIST) */}
        <section className="shell pb-section-mobile md:pb-section">
          <Reveal>
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
          </div>
        </section>

        {/* MIKROEBENE */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <Eyebrow>Unmittelbare Umgebung</Eyebrow>
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

        <SectionDivider />
      </main>
      <Footer />
    </>
  );
}
