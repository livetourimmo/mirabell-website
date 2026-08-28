import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { PROJEKTBETEILIGTE, STAND, VERANTWORTLICHE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum zur Website des Neubauprojekts Mirabell in Uetliburg. Verantwortlich: Salus Fidelity GmbH, Schindellegi.",
};

export default function ImpressumPage() {
  return (
    <>
      <Nav overPhoto={false} />
      <main className="flex-1">
        <section className="shell py-section-mobile md:py-section">
          <div className="max-w-3xl">
            <Eyebrow>Rechtliches</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl text-primary md:text-5xl">Impressum</h1>
            <p className="mt-5 text-foreground-muted">
              Angaben zum Betreiber dieser Website für das Neubauprojekt Mirabell,
              Ottenhofenstrasse 53 + 55, 8738 Uetliburg.
            </p>

            <div className="mt-12 flex flex-col gap-10">
              <Block titel="Verantwortlich für diese Website">
                {/* Das Logo der Bauherrschaft steht bewusst über der Adresse: es
                    identifiziert die verantwortliche Stelle auf einen Blick. */}
                <Image
                  src="/images/salus-fidelity-logo.png"
                  alt={VERANTWORTLICHE.name}
                  width={363}
                  height={126}
                  className="mb-6 h-11 w-auto"
                />
                <p>
                  {VERANTWORTLICHE.name}
                  <br />
                  {VERANTWORTLICHE.strasse}
                  <br />
                  {VERANTWORTLICHE.plz} {VERANTWORTLICHE.ort}
                  <br />
                  {VERANTWORTLICHE.land}
                </p>
                <dl className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">
                  <dt className="font-medium text-primary">Telefon</dt>
                  <dd>
                    <a href={VERANTWORTLICHE.telefonHref} className="hover:text-primary">
                      {VERANTWORTLICHE.telefon}
                    </a>
                  </dd>
                  <dt className="font-medium text-primary">E-Mail</dt>
                  <dd>
                    <a href={`mailto:${VERANTWORTLICHE.email}`} className="hover:text-primary">
                      {VERANTWORTLICHE.email}
                    </a>
                  </dd>
                  <dt className="font-medium text-primary">Website</dt>
                  <dd>
                    {/* Kein noreferrer: der Referrer soll die Partnerseite erreichen. */}
                    <a
                      href={VERANTWORTLICHE.websiteHref}
                      target="_blank"
                      rel="noopener"
                      className="underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                    >
                      {VERANTWORTLICHE.website}
                    </a>
                  </dd>
                  <dt className="font-medium text-primary">UID</dt>
                  <dd>{VERANTWORTLICHE.uid}</dd>
                  <dt className="font-medium text-primary">Handelsregister</dt>
                  <dd>{VERANTWORTLICHE.handelsregister}</dd>
                </dl>
              </Block>

              <Block titel="Haftung für Inhalte">
                <p>
                  Die Inhalte dieser Website wurden mit grosser Sorgfalt erstellt. Für
                  Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit
                  der Informationen wird jedoch keine Gewähr übernommen.
                </p>
                <p className="mt-4">
                  Visualisierungen, Grundrisse, Flächenangaben, Materialisierungen und
                  Preise dienen der Veranschaulichung und sind unverbindlich. Massgebend
                  sind ausschliesslich die Angaben im Kaufvertrag und in den zugehörigen
                  Vertragsdokumenten. Änderungen aufgrund von Projektierung, behördlichen
                  Auflagen oder Bauablauf bleiben ausdrücklich vorbehalten. Möblierungen
                  auf Visualisierungen sind nicht Bestandteil des Kaufgegenstands.
                </p>
                <p className="mt-4">
                  Haftungsansprüche gegen die {VERANTWORTLICHE.name} wegen Schäden
                  materieller oder immaterieller Art, die aus dem Zugriff auf die
                  veröffentlichten Informationen, aus deren Nutzung oder Nichtnutzung, aus
                  Missbrauch der Verbindung oder aus technischen Störungen entstehen,
                  werden ausgeschlossen. Alle Angebote sind freibleibend. Die{" "}
                  {VERANTWORTLICHE.name} behält sich ausdrücklich vor, Teile der Seiten
                  oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu
                  ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig
                  einzustellen.
                </p>
              </Block>

              <Block titel="Haftung für Links">
                <p>
                  Verweise und Links auf Websites Dritter liegen ausserhalb unseres
                  Verantwortungsbereichs. Für deren Inhalte wird jede Verantwortung
                  abgelehnt. Zugriff und Nutzung solcher Websites erfolgen auf eigene
                  Gefahr der Nutzerin oder des Nutzers. Das gilt auch für die auf dieser
                  Website eingebundenen Inhalte Dritter, namentlich den virtuellen
                  Rundgang, die Umgebungskarte und den Immobiliennavigator.
                </p>
              </Block>

              <Block titel="Urheberrechte">
                <p>
                  Die Urheber- und alle weiteren Rechte an Inhalten, Bildern,
                  Visualisierungen, Videos, Plänen und sonstigen Dateien auf dieser
                  Website stehen ausschliesslich der {VERANTWORTLICHE.name} oder den
                  jeweils besonders bezeichneten Rechteinhabern zu. Für die Reproduktion
                  oder Weiterverwendung jeglicher Elemente ist die vorgängige schriftliche
                  Zustimmung der Rechteinhaber einzuholen.
                </p>
              </Block>

              <Block titel="Datenschutz">
                <p>
                  Angaben zur Bearbeitung von Personendaten auf dieser Website finden Sie
                  in der{" "}
                  <Link
                    href="/datenschutz"
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </Block>

              <Block titel="Projektbeteiligte">
                <div className="mt-2 grid gap-7 sm:grid-cols-2">
                  {PROJEKTBETEILIGTE.map((partner) => (
                    <div key={partner.rolle} className="border-t border-border pt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                        {partner.rolle}
                      </p>
                      {/* Der Firmenname ist der Link — er trägt den aussagekräftigsten
                          Ankertext für den Verweis auf die Partnerseite. */}
                      <p className="mt-2 font-medium text-primary">
                        {partner.domain ? (
                          <a
                            href={`https://${partner.domain}`}
                            target="_blank"
                            rel="noopener"
                            className="underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                          >
                            {partner.name}
                          </a>
                        ) : (
                          partner.name
                        )}
                      </p>
                      <p className="mt-1 text-left! text-sm">
                        {partner.adresse.map((zeile) => (
                          <span key={zeile} className="block">
                            {zeile}
                          </span>
                        ))}
                      </p>
                      <p className="mt-1.5 flex flex-col text-left! text-sm">
                        {partner.email && (
                          <a
                            href={`mailto:${partner.email}`}
                            className="w-fit hover:text-primary"
                          >
                            {partner.email}
                          </a>
                        )}
                        {partner.domain && (
                          <a
                            href={`https://${partner.domain}`}
                            target="_blank"
                            rel="noopener"
                            className="w-fit hover:text-primary"
                          >
                            {partner.domain}
                          </a>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </Block>
            </div>

            <p className="mt-14 border-t border-border pt-6 text-sm text-foreground-muted">
              Stand: {STAND}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Block({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-xl text-primary md:text-2xl">{titel}</h2>
      <div className="mt-3 text-foreground-muted">{children}</div>
    </section>
  );
}
