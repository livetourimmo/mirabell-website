import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <Nav overPhoto={false} />
      <main className="flex-1">
        <section className="shell py-section-mobile md:py-section">
         <div className="max-w-3xl">
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="mt-3 font-heading text-4xl text-primary">Impressum</h1>

          <div className="mt-10 flex flex-col gap-8 text-foreground-muted">
            <div>
              <h2 className="font-heading text-xl text-primary">Verantwortlich für den Inhalt</h2>
              <p className="mt-2">
                Salus Fidelity GmbH<br />
                Einsiedlerstrasse 21<br />
                8834 Schindellegi<br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Kontakt</h2>
              <p className="mt-2">
                Telefon: 044 593 96 05<br />
                E-Mail: info@salusfidelity.ch
              </p>
            </div>


            <div>
              <h2 className="font-heading text-xl text-primary">Haftungsausschluss</h2>
              <p className="mt-2">
                Alle Angaben auf dieser Website erfolgen ohne Gewähr. Änderungen an
                Grundrissen, Materialisierung, Preisen und Verfügbarkeit vorbehalten.
                [Platzhalter: vollständiger Haftungsausschluss folgt]
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Konzept &amp; Realisierung</h2>
              <p className="mt-2">
                liveTour Immobilienmarketing GmbH<br />
                Wellhauserweg 41a<br />
                8500 Frauenfeld<br />
                <a href="https://www.livetour.ch" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  www.livetour.ch
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Projektbeteiligte</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-primary">Bauherrschaft / Realisation</p>
                  <p className="mt-1">
                    Salus Fidelity GmbH<br />
                    Einsiedlerstrasse 21<br />
                    8834 Schindellegi
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Verkauf</p>
                  <p className="mt-1">
                    Keller ImmoVermarktung GmbH<br />
                    Lindenstrasse 35<br />
                    8738 Uetliburg
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Architektur</p>
                  <p className="mt-1">
                    Hasler Limacher Architekten GmbH<br />
                    Werner-Kälin-Strasse 3<br />
                    8840 Einsiedeln<br />
                    info@hasler-limacher.ch
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary">Baumanagement</p>
                  <p className="mt-1">
                    Lienert Partner AG<br />
                    Mühlestrasse 3<br />
                    8840 Einsiedeln
                  </p>
                </div>
              </div>
            </div>
          </div>
         </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
