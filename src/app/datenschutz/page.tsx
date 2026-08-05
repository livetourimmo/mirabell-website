import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav overPhoto={false} />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-section-mobile md:py-section">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Rechtliches</p>
          <h1 className="mt-3 font-heading text-4xl text-primary">Datenschutzerklärung</h1>

          <div className="mt-10 flex flex-col gap-8 text-foreground-muted">
            <p>
              Diese Datenschutzerklärung informiert über die Bearbeitung von
              Personendaten beim Besuch dieser Website gemäss dem revidierten
              Schweizer Bundesgesetz über den Datenschutz (DSG).
            </p>

            <div>
              <h2 className="font-heading text-xl text-primary">Verantwortliche Stelle</h2>
              <p className="mt-2">
                Visto Immobilien AG<br />
                [Platzhalter: Strasse Nr., PLZ Ort]<br />
                [Platzhalter: E-Mail-Adresse]
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Bearbeitete Daten</h2>
              <p className="mt-2">
                Beim Ausfüllen des Kontaktformulars werden Name, E-Mail-Adresse,
                Telefonnummer, Nachricht sowie optional das Interesse an einer
                bestimmten Wohnung erhoben und zur Bearbeitung Ihrer Anfrage
                gespeichert. [Platzhalter: Speicherdauer und technische Details
                folgen]
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Zweck der Bearbeitung</h2>
              <p className="mt-2">
                Die Daten dienen ausschliesslich der Beantwortung Ihrer Anfrage
                sowie der Verkaufsberatung im Zusammenhang mit dem Projekt Mirabell.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Ihre Rechte</h2>
              <p className="mt-2">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                Herausgabe Ihrer Personendaten im Rahmen der gesetzlichen
                Bestimmungen. Wenden Sie sich dazu an die oben genannte
                verantwortliche Stelle.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-primary">Hosting &amp; Datenspeicherung</h2>
              <p className="mt-2">
                [Platzhalter: Angaben zu Hosting-Anbieter, Serverstandort und
                eingesetzten Dienstleistern (z. B. Supabase) folgen, sobald das
                Backend final eingerichtet ist.]
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
