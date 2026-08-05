import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Rechtliches</p>
          <h1 className="mt-3 font-heading text-4xl text-primary">Impressum</h1>

          <div className="mt-10 flex flex-col gap-8 text-foreground-muted">
            <div>
              <h2 className="font-heading text-xl text-primary">Verantwortlich für den Inhalt</h2>
              <p className="mt-2">
                Visto Immobilien AG<br />
                [Platzhalter: Strasse Nr.]<br />
                [Platzhalter: PLZ Ort]<br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Kontakt</h2>
              <p className="mt-2">
                Telefon: [Platzhalter: Telefonnummer]<br />
                E-Mail: [Platzhalter: E-Mail-Adresse]
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Handelsregister</h2>
              <p className="mt-2">[Platzhalter: UID / Handelsregisternummer]</p>
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
              <p className="mt-2">[Platzhalter: Website-Realisierung]</p>
            </div>
          </div>
         </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
