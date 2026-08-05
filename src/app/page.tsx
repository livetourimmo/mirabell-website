import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Gallery } from "@/components/gallery";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/eyebrow";
import { MirabelleAccent } from "@/components/mirabelle-accent";

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
              Exklusives Wohnen zwischen Natur und Weitblick
            </h1>
            <p className="mt-6 max-w-[52ch] text-foreground-muted">
              Willkommen im Neubau Mirabell. Mirabell steht für eine Wohnqualität,
              die weit über den klassischen Neubau hinausgeht. Offene Grundrisse,
              eine hochwertige Architektur und grosszügige Käuferbudgets schaffen
              ein Zuhause für Menschen mit hohen Ansprüchen.
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
                Ein Wohnort für alle, die die Natur und eine atemberaubende Aussicht
                lieben, ohne auf eine gute Erreichbarkeit verzichten zu wollen.
              </p>
              <p className="mt-8 max-w-[56ch] text-foreground-muted">
                Uetliburg gehört zur Gemeinde Gommiswald und kombiniert diverse
                Vorzüge. Besonders die naturnahe Umgebung mit viel Ruhe und
                gleichzeitig kurzen Wegen zu Einkaufsmöglichkeiten, Schulen und den
                regionalen Zentren.
              </p>
            </div>
            <div className="col-span-2 hidden items-start justify-center md:flex">
              <Image
                src="/images/mirabelle-single.png"
                alt=""
                width={540}
                height={480}
                unoptimized
                aria-hidden="true"
                className="h-auto w-36 opacity-50 lg:w-44"
              />
            </div>
          </Reveal>
        </section>

        {/* ÜBER DAS PROJEKT */}
        <section id="projekt" className="shell py-section-mobile md:py-section">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-24">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-base)]">
                <Image
                  src="/images/aussen1.png"
                  alt="Architektur-Visualisierung Mirabell, Aussenansicht Haus A und Haus B"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="md:pl-4">
              <Eyebrow>Architektur</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Charmante Architektur mit Sicht auf den See
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Die Architektur orientiert sich an einer warmen und natürlichen
                Gestaltung. Grosszügige Aussenräume, harmonische Materialien und
                eine sorgfältig abgestimmte Umgebung schaffen ein Wohnensemble, das
                sich gut in die Landschaft einfügt. Die beiden Gebäude bieten
                Privatsphäre, viel Freiraum und ein angenehmes Wohngefühl für alle
                Generationen.
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
                Naturnahes Wohnen mit guten Anbindungen
              </h2>
              <p className="mt-6 max-w-[48ch] text-foreground-muted">
                Hügel, Wälder und Wanderwege beginnen praktisch vor der Haustüre und
                laden zu Spaziergängen, Velotouren oder sportlichen Aktivitäten ein.
                Gleichzeitig erreichen Sie Uznach, Rapperswil oder Zürich bequem in
                kurzer Zeit.
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
              <p className="font-heading text-[5.5rem] leading-none text-background md:text-[7.5rem]">13</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-background/70">
                Sieben 4.5-Zimmerwohnungen · Sechs 3.5-Zimmerwohnungen · 24 Tiefgaragenplätze
              </p>
            </Reveal>
            <Reveal delay={80} className="md:col-span-7 md:col-start-6">
              <Eyebrow tone="inverted">Attraktiver Mix</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-background md:text-4xl">
                Offen, hell und grosszügig geschnitten
              </h2>
              <p className="mt-6 max-w-[52ch] text-background/75">
                Die Wohnungen von Mirabell überzeugen mit offenen Wohn-, Ess- und
                Küchenbereichen, die das Herzstück jeder Wohnung bilden und einen
                Ort schaffen, an dem gemeinsam gekocht, gelacht und gelebt wird.
              </p>
              <p className="mt-4 max-w-[52ch] text-background/75">
                Grosszügige, raumhohe Fensterflächen mit 3-fach-Verglasung holen
                viel Tageslicht ins Innere und verbinden den Wohnraum über ein
                Hebeschiebefenster mit Terrasse, Balkon oder Loggia. Je nach
                Wohnung geniessen Sie zudem einen privaten Garten oder einen
                geschützten Aussenbereich.
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
            <Reveal className="mx-auto max-w-[56ch] text-center">
              <Eyebrow className="justify-center">Ausstattung</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-primary md:text-5xl">
                Hochwertig ausgestattet mit Raum für Ihre Wünsche
              </h2>
              <p className="mt-6 text-foreground-muted">
                Im Mirabell erwartet Sie ein moderner Ausbaustandard mit
                hochwertigen Materialien, zeitloser Gestaltung und
                grosszügigen Budgets, um Ihr neues Zuhause ganz nach Ihren
                Vorstellungen zu gestalten.
              </p>
              <Button asChild variant="primary" size="lg" className="mt-8">
                <Link href="/angebot#materialisierung">Materialisierung &amp; Baubeschrieb</Link>
              </Button>
            </Reveal>
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
