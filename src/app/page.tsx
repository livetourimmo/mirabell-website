import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Gallery } from "@/components/gallery";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";

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

        <section className="shell grid gap-12 pt-14 pb-20 md:grid-cols-12 md:items-center md:gap-10 md:pt-20 md:pb-28">
          <div className="md:col-span-7">
            <h1 className="font-heading text-5xl leading-[1.02] text-primary md:text-[3.6rem]">
              Mirabell
            </h1>
            <p className="mt-3 font-heading text-xl text-primary/80 md:text-2xl">
              Wo Seesicht und Weitblick zuhause sind.
            </p>
            <p className="mt-5 max-w-[52ch] text-foreground-muted">
              13 charaktervolle Eigentumswohnungen (3.5 &amp; 4.5 Zimmer) mit
              grosszügiger Autoeinstellhalle inklusive E-Mobilität.
            </p>
            <p className="mt-6 max-w-[52ch] font-heading italic text-primary">
              Erleben Sie das Privileg des Wohnens in Uetliburg.
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

          {/* Signature: die beiden Hausnummern wie ein Türschild */}
          <div className="md:col-span-5 md:pl-6">
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
        <section id="einleitung" className="shell py-10 md:py-16">
          <Reveal className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-3">
              <p className="font-heading text-2xl leading-relaxed text-primary md:text-4xl">
                Eine Symbiose aus Architektur und Panorama.
              </p>
              <p className="mt-8 max-w-[56ch] text-foreground-muted">
                Mirabell verbindet charaktervolle Architektur mit einer
                aussergewöhnlichen Aussichtslage. Grosszügige Grundrisse, Seesicht
                und Weitblick schaffen ein Wohngefühl, das Raum und Umgebung
                miteinander verbindet.
              </p>
              <p className="mt-8 max-w-[56ch] text-foreground-muted">
                Uetliburg bietet dazu die besondere Kombination aus naturnahem,
                ruhigem Wohnen und guter Erreichbarkeit. Einkaufsmöglichkeiten,
                Schulen und die regionalen Zentren liegen in kurzer Distanz.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ÜBER DAS PROJEKT */}
        <section id="projekt" className="shell py-section-mobile md:py-section">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-base)]">
                <Image
                  src="/images/aussen1-v2.png"
                  alt="Architektur-Visualisierung Mirabell, Aussenansicht Haus A und Haus B"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="md:pl-4">
              <Eyebrow>Architektur</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Charakter, der bleibt. Aussicht, die begeistert.
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Mirabell verbindet zeitlose Gestaltung mit grosszügigen
                Grundrissen und einem durchdachten Zusammenspiel von Innen- und
                Aussenräumen. Klare Formen, sorgfältig abgestimmte Materialien
                und lichtdurchflutete Wohnbereiche schaffen ein elegantes und
                zugleich behagliches Ambiente. Die grosszügigen Loggien
                erweitern den Wohnraum nach aussen und schaffen einen
                fliessenden Übergang zur Umgebung. Seesicht und Weitblick
                vollenden ein Wohngefühl, das Mirabell seinen unverwechselbaren
                Charakter verleiht.
              </p>
              <Link
                href="/angebot#materialisierung"
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
              <Eyebrow>Lage</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Zwischen Natur, Weitblick und urbaner Nähe.
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Mirabell liegt dort, wo Ruhe, Natur und Lebensqualität
                selbstverständlich zusammenfinden. Wälder, Wiesen und
                vielfältige Freizeitmöglichkeiten prägen die Umgebung von
                Uetliburg und schaffen Raum für Erholung und Bewegung direkt
                vor der Haustür. Gleichzeitig sind Einkaufsmöglichkeiten,
                Schulen und die wichtigen regionalen Zentren auf kurzen Wegen
                erreichbar. So vereint Mirabell naturnahes Wohnen,
                eindrucksvollen Weitblick und die Annehmlichkeiten des
                täglichen Lebens zu einer Lage mit besonderer Lebensqualität.
              </p>
              <Link
                href="/lage"
                className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline"
              >
                Lage &amp; Umgebung entdecken <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </Reveal>
            <Reveal delay={100} className="order-1 md:order-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-base)]">
                <Image
                  src="/images/drohne-uetliburg.JPG"
                  alt="Luftaufnahme Uetliburg mit Blick Richtung Obersee"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ANGEBOT TEASER — Fakten statt generischer CTA-Banner */}
        <section className="bg-primary text-background">
          <div className="shell grid gap-10 py-section-mobile md:grid-cols-12 md:py-section">
            <Reveal className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-background/60">Wohnungsspiegel</p>
              <dl className="mt-5 divide-y divide-background/15 border-y border-background/15">
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-background/75">4.5-Zimmerwohnungen</dt>
                  <dd className="font-heading text-2xl tabular-nums text-background md:text-3xl">7</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-background/75">3.5-Zimmerwohnungen</dt>
                  <dd className="font-heading text-2xl tabular-nums text-background md:text-3xl">6</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <dt className="text-background/75">Tiefgaragenplätze</dt>
                  <dd className="font-heading text-2xl tabular-nums text-background md:text-3xl">24</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-background/50">
                13 Wohnungen in zwei Häusern
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-7 md:col-start-6">
              <Eyebrow tone="inverted">Attraktiver Mix</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-background md:text-4xl">
                Offen, hell und grosszügig gestaltet
              </h2>
              <p className="mt-6 max-w-[52ch] text-background/75">
                Die Wohnungen von Mirabell überzeugen mit offenen Wohn-, Ess-
                und Küchenbereichen, die das Herzstück des Zuhauses bilden.
                Grosszügig konzipiert und lichtdurchflutet schaffen sie Raum
                für gemeinsames Kochen, Geniessen und Zusammensein.
              </p>
              <p className="mt-4 max-w-[52ch] text-background/75">
                Grosszügige, teilweise raumhohe Fensterflächen sorgen für viel
                Tageslicht und schaffen eine natürliche Verbindung zwischen
                Innenraum und Aussenraum. Terrassen, Loggien und je nach
                Wohnung private Gartenflächen erweitern den persönlichen
                Lebensraum und bieten attraktive Rückzugsorte zum Entspannen
                und Geniessen.
              </p>
              <Button asChild variant="accent" size="lg" className="mt-8">
                <Link href="/angebot">Zum Angebot</Link>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* AUSSTATTUNG */}
        <section className="bg-secondary/25">
          <div className="shell py-section-mobile md:py-section">
            <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-base)]">
                  <Image
                    src="/images/v1_Innen6.jpg"
                    alt="Sitzplatz auf der Terrasse mit raumhohen Fenstern"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={100} className="md:pl-4">
                <Eyebrow>Ausstattung</Eyebrow>
                <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                  Qualität mit Raum für Individualität.
                </h2>
                <p className="mt-6 max-w-[48ch] text-foreground-muted">
                  Für Mirabell wurde eine sorgfältig abgestimmte Auswahl an
                  Materialien und Ausstattungen definiert, die eine harmonische
                  und zeitlose Gestaltung ermöglicht. Je nach Bereich stehen
                  unterschiedliche Varianten zur Verfügung. Abhängig vom
                  jeweiligen Baufortschritt können Käufer darüber hinaus eigene
                  Wünsche und individuelle Materialisierungen einbringen. So
                  bietet Mirabell den Freiraum, dem eigenen Zuhause eine
                  persönliche und unverwechselbare Handschrift zu verleihen.
                </p>
                <Button asChild variant="primary" size="lg" className="mt-8">
                  <Link href="/angebot#materialisierung">Materialisierung &amp; Baubeschrieb</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* GALERIE */}
        <section className="shell py-section-mobile md:py-section">
          <Reveal>
            <Eyebrow>Galerie</Eyebrow>
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
