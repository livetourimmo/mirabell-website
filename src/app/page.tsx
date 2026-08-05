import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Gallery } from "@/components/gallery";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* HERO — vollflächiges Bild, Titel & Informationen darunter statt darauf.
            Kein Text auf dem Foto → keine Verlauf-/Lesbarkeits-Kompromisse nötig. */}
        <section className="relative h-screen w-full">
          <Image
            src="/images/hero-platzhalter.jpg"
            alt="Architektur-Visualisierung Mirabell, Abendstimmung"
            fill
            priority
            className="object-cover"
          />
        </section>

        <section className="shell grid gap-10 pt-14 pb-20 md:grid-cols-12 md:gap-10 md:pt-20 md:pb-28">
          <div className="md:col-span-7">
            <h1 className="font-heading text-5xl leading-[1.02] text-primary md:text-[3.6rem]">
              Zwei Häuser am Hang von Uetliburg
            </h1>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Haus A und Haus B stehen im Dorfkern von Uetliburg, mit Satteldach und
              Fassade aus mineralischem Grobputz. Innen Eichenparkett, aussen der
              Blick über das Hügelland Richtung Obersee.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button asChild variant="primary" size="lg">
                <Link href="/angebot">Angebot ansehen</Link>
              </Button>
              <Link
                href="#einleitung"
                className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Mehr erfahren <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-6">
            {/* Signature: die beiden Hausnummern, wie ein Türschild */}
            <div className="flex items-stretch gap-5">
              <div className="border border-accent px-5 py-3 text-center">
                <div className="font-heading text-3xl tabular-nums text-primary">53</div>
                <div className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground-muted">
                  Haus A
                </div>
              </div>
              <div className="border border-accent px-5 py-3 text-center">
                <div className="font-heading text-3xl tabular-nums text-primary">55</div>
                <div className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground-muted">
                  Haus B
                </div>
              </div>
              <div className="flex flex-col justify-center border-l border-border pl-5 text-xs text-foreground-muted">
                <span>Ottenhofenstrasse</span>
                <span>13 Eigentumswohnungen</span>
              </div>
            </div>
          </div>
        </section>

        {/* EINLEITUNG */}
        <section id="einleitung" className="shell py-section-mobile md:py-section">
          <Reveal className="grid gap-6 md:grid-cols-12">
            <span
              aria-hidden
              className="col-span-2 hidden font-heading text-[6rem] leading-none text-secondary md:block"
            >
              „
            </span>
            <div className="md:col-span-8 md:col-start-3">
              <p className="font-heading text-2xl leading-relaxed text-primary md:text-4xl">
                Wohnen mit Aussicht heisst für uns: ruhige Räume, ehrliche Materialien
                und ein Blick, der sich jeden Tag neu lohnt.
              </p>
              <p className="mt-8 max-w-[56ch] text-foreground-muted">
                Mirabell entsteht im Dorfkern von Uetliburg — zwei Baukörper, dreizehn
                Wohnungen, gestaltet für Familien und Paare, die Ruhe und Aussicht suchen,
                ohne auf kurze Wege zu verzichten.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ÜBER DAS PROJEKT */}
        <section id="projekt" className="shell py-section-mobile md:py-section">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
            <Reveal>
              <PlaceholderMedia label="Platzhalter: Architektur-Visualisierung Haus A" className="w-full" aspect="aspect-[4/5]" />
            </Reveal>
            <Reveal delay={100} className="md:pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Über das Projekt</p>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Traditionelle Formensprache, zeitgemässer Ausbau
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Satteldach, Grobputz und Eichenparkett stehen für eine Architektur, die sich
                bewusst in den Ortskern von Uetliburg einfügt. Innen sorgen grosszügige
                Grundrisse, hochwertige Materialien und durchdachte Details für ein Zuhause,
                das lange trägt. Eine Erdsonden-Wärmepumpe versorgt beide Häuser energieeffizient,
                24 Parkplätze in der gemeinsamen Einstellhalle ergänzen das Angebot.
              </p>
              <Link
                href="/angebot"
                className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Materialisierung &amp; Baubeschrieb <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* LAGE TEASER */}
        <section className="shell py-section-mobile md:py-section">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
            <Reveal className="order-2 md:order-1 md:pr-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Lage</p>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Dorfkern von Uetliburg, Blick Richtung Obersee
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Uetliburg liegt eingebettet im Hügelland zwischen Zürichsee und Obersee —
                ruhig und dennoch gut angebunden. Die unmittelbare Umgebung, Einkauf,
                Schule und öffentlicher Verkehr sind auf der Lage-Seite im Detail
                dargestellt, inklusive interaktiver Karte.
              </p>
              <Link
                href="/lage"
                className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Lage &amp; Umgebung entdecken <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </Reveal>
            <Reveal delay={100} className="order-1 md:order-2">
              <PlaceholderMedia label="Platzhalter: Lageplan / Kartenausschnitt" className="w-full" aspect="aspect-[4/5]" />
            </Reveal>
          </div>
        </section>

        {/* ANGEBOT TEASER — Fakten statt generischer CTA-Banner */}
        <section className="bg-primary text-background">
          <div className="shell grid gap-10 py-section-mobile md:grid-cols-12 md:py-section">
            <Reveal className="md:col-span-4">
              <p className="font-heading text-[5.5rem] leading-none text-background md:text-[7.5rem]">13</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-background/70">Wohnungen, zwei Häuser</p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-7 md:col-start-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Angebot</p>
              <h2 className="mt-3 font-heading text-3xl text-background md:text-4xl">
                Vom Erstbezug bis zur Attika im Dachgeschoss
              </h2>
              <p className="mt-6 max-w-[52ch] text-background/75">
                Von der 2.5-Zimmer-Wohnung bis zur grosszügigen 4.5-Zimmer-Wohnung im
                Dachgeschoss — der Navigator zeigt Grundrisse, Flächen und Preise im
                Detail, filterbar nach Zimmerzahl und Geschoss.
              </p>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link href="/angebot">Zum Angebot</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* GALERIE */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Galerie</p>
            <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">Impressionen</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <Gallery />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
