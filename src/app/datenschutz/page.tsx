import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Eyebrow } from "@/components/eyebrow";
import { ConsentEinstellungenLink } from "@/components/consent/consent-settings-link";
import {
  AUFTRAGSBEARBEITER,
  EMBED_LISTE,
  STAND,
  VERANTWORTLICHE,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung zur Website des Neubauprojekts Mirabell in Uetliburg: bearbeitete Personendaten, eingebundene Drittdienste und Rechte betroffener Personen.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Nav overPhoto={false} />
      <main className="flex-1">
        <section className="shell py-section-mobile md:py-section">
          <div className="max-w-3xl">
            <Eyebrow>Rechtliches</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl text-primary md:text-5xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-5 text-foreground-muted">
              Mit dieser Datenschutzerklärung informieren wir darüber, welche Personendaten
              wir im Zusammenhang mit dieser Website zum Neubauprojekt Mirabell bearbeiten
              — wofür, wie, wo und wie lange. Ausserdem informieren wir über die Rechte
              der Personen, deren Daten wir bearbeiten.
            </p>
            <p className="mt-4 text-foreground-muted">
              Wir unterliegen dem schweizerischen Datenschutzrecht, insbesondere dem
              Bundesgesetz über den Datenschutz (DSG) und der Datenschutzverordnung (DSV),
              sowie allenfalls anwendbarem ausländischem Recht wie der
              Datenschutz-Grundverordnung (DSGVO) der Europäischen Union. Die Europäische
              Kommission anerkennt, dass das schweizerische Datenschutzrecht einen
              angemessenen Datenschutz gewährleistet.
            </p>

            <div className="mt-14 flex flex-col gap-12">
              <Abschnitt nummer="1" titel="Verantwortliche Stelle">
                <p>Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist:</p>
                <p className="mt-4">
                  {VERANTWORTLICHE.name}
                  <br />
                  {VERANTWORTLICHE.strasse}
                  <br />
                  {VERANTWORTLICHE.plz} {VERANTWORTLICHE.ort}
                  <br />
                  {VERANTWORTLICHE.land}
                  <br />
                  <a href={`mailto:${VERANTWORTLICHE.email}`} className="hover:text-primary">
                    {VERANTWORTLICHE.email}
                  </a>
                  <br />
                  <a href={VERANTWORTLICHE.telefonHref} className="hover:text-primary">
                    {VERANTWORTLICHE.telefon}
                  </a>
                </p>
                <p className="mt-4">
                  Für Fragen zum Datenschutz und zur Ausübung Ihrer Rechte wenden Sie sich
                  bitte an diese Adresse.
                </p>
              </Abschnitt>

              <Abschnitt nummer="2" titel="Grundsätze und Rechtsgrundlagen">
                <p>
                  Personendaten sind alle Angaben, die sich auf eine bestimmte oder
                  bestimmbare natürliche Person beziehen. Bearbeiten umfasst jeden Umgang
                  mit Personendaten, unabhängig von den angewandten Mitteln und Verfahren
                  — etwa das Erheben, Speichern, Verwenden, Bekanntgeben, Aufbewahren und
                  Löschen.
                </p>
                <p className="mt-4">
                  Wir bearbeiten nur jene Personendaten, die für den jeweiligen Zweck
                  erforderlich sind, und nur so lange, wie es für diesen Zweck oder
                  gesetzlich nötig ist. Daten, deren Bearbeitung nicht mehr erforderlich
                  ist, werden gelöscht oder anonymisiert.
                </p>
                <p className="mt-4">
                  Soweit die DSGVO anwendbar ist, stützen wir die Bearbeitung auf
                  mindestens eine der folgenden Rechtsgrundlagen:
                </p>
                <Liste>
                  <li>
                    <strong className="font-medium text-primary">Art. 6 Abs. 1 lit. b DSGVO</strong>{" "}
                    — Bearbeitung zur Durchführung vorvertraglicher Massnahmen auf Ihre
                    Anfrage hin, insbesondere bei Kaufinteresse an einer Wohnung.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Art. 6 Abs. 1 lit. a DSGVO</strong>{" "}
                    — Ihre Einwilligung, namentlich für das Laden der eingebundenen
                    Inhalte Dritter.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Art. 6 Abs. 1 lit. f DSGVO</strong>{" "}
                    — unsere berechtigten Interessen am sicheren, zuverlässigen und
                    nutzerfreundlichen Betrieb der Website sowie am Schutz vor Missbrauch.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Art. 6 Abs. 1 lit. c DSGVO</strong>{" "}
                    — Erfüllung rechtlicher Verpflichtungen, etwa gesetzlicher
                    Aufbewahrungspflichten.
                  </li>
                </Liste>
              </Abschnitt>

              <Abschnitt nummer="3" titel="Aufruf der Website (Server-Logs)">
                <p>
                  Bei jedem Aufruf dieser Website werden technisch bedingt Daten an unseren
                  Hosting-Anbieter übermittelt und dort protokolliert. Erfasst werden
                  insbesondere: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
                  Seite, übertragene Datenmenge, HTTP-Statuscode, Browsertyp und -version,
                  Betriebssystem sowie gegebenenfalls die zuvor besuchte Seite (Referrer).
                </p>
                <p className="mt-4">
                  Diese Bearbeitung ist erforderlich, um die Website überhaupt ausliefern,
                  ihre Stabilität sichern und Missbrauch erkennen zu können. Eine
                  Zuordnung dieser Daten zu einer bestimmten Person nehmen wir nicht vor.
                </p>
                <Hinweis>
                  Diese Website setzt selbst keine Cookies und verwendet keine
                  Analyse-, Statistik- oder Werbedienste. Es findet weder eine Messung von
                  Reichweite oder Nutzerverhalten noch ein geräteübergreifendes Tracking
                  statt.
                </Hinweis>
              </Abschnitt>

              <Abschnitt nummer="4" titel="Kontaktformular">
                <p>
                  Wenn Sie das Kontaktformular nutzen, bearbeiten wir die von Ihnen
                  eingegebenen Angaben, um Ihre Anfrage zu beantworten und Sie im
                  Zusammenhang mit dem Projekt Mirabell zu beraten.
                </p>
                <p className="mt-4">Erhoben werden:</p>
                <Liste>
                  <li>
                    <strong className="font-medium text-primary">Pflichtangaben:</strong> Name,
                    E-Mail-Adresse und Nachricht.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Freiwillige Angaben:</strong>{" "}
                    Telefonnummer, Strasse, Postleitzahl, Ort sowie die Wohnung, für die
                    Sie sich interessieren.
                  </li>
                </Liste>
                <p className="mt-4">
                  Aus diesen Angaben wird eine E-Mail erzeugt und an die für den Verkauf
                  zuständige Stelle übermittelt. Ihre E-Mail-Adresse wird dabei als
                  Antwortadresse gesetzt, damit wir Ihnen direkt antworten können. Eine
                  Nutzung für Werbung oder eine Weitergabe zu anderen Zwecken findet nicht
                  statt.
                </p>
                <p className="mt-4">
                  Die Angaben werden nicht in einer Datenbank dieser Website gespeichert,
                  sondern ausschliesslich per E-Mail übermittelt. Wir bewahren die Anfrage
                  so lange auf, wie es für die Bearbeitung und allfällige Anschlussfragen
                  erforderlich ist, längstens jedoch bis zum Abschluss der Vermarktung des
                  Projekts, und darüber hinaus, soweit gesetzliche Aufbewahrungspflichten
                  bestehen.
                </p>
                <p className="mt-4">
                  Zum Schutz vor automatisierten Einsendungen enthält das Formular ein für
                  Menschen unsichtbares Feld. Wird dieses ausgefüllt, verwerfen wir die
                  Einsendung. Dabei werden Name und E-Mail-Adresse zur Fehlersuche
                  kurzzeitig in den Server-Logs vermerkt.
                </p>
              </Abschnitt>

              <Abschnitt nummer="5" titel="Eingebundene Inhalte Dritter">
                <p>
                  Auf dieser Website binden wir Inhalte ein, die von Drittanbietern
                  bereitgestellt werden. Diese Inhalte werden{" "}
                  <strong className="font-medium text-primary">
                    erst geladen, nachdem Sie eingewilligt haben
                  </strong>
                  . Ohne Ihre Einwilligung wird keine Verbindung zu den Anbietern
                  aufgebaut und es werden keine Daten an sie übermittelt.
                </p>
                <p className="mt-4">
                  Beim Laden erhält der jeweilige Anbieter technisch zwingend Ihre
                  IP-Adresse und Angaben zu Ihrem Browser. Anbieter mit Sitz ausserhalb
                  der Schweiz und des Europäischen Wirtschaftsraums bearbeiten diese Daten
                  in ihrem Sitzstaat. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1
                  lit. a DSGVO; Art. 17 DSG).
                </p>

                <div className="mt-7 flex flex-col gap-5">
                  {EMBED_LISTE.map((dienst) => (
                    <div
                      key={dienst.id}
                      className="rounded-[var(--radius-base)] border border-border bg-surface p-5"
                    >
                      <p className="font-heading text-lg text-primary">{dienst.titel}</p>
                      <dl className="mt-3 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-[10rem_1fr]">
                        <dt className="font-medium text-primary">Anbieter</dt>
                        <dd>
                          {dienst.anbieter}, {dienst.sitz}
                        </dd>
                        <dt className="font-medium text-primary">Aufgerufener Host</dt>
                        <dd>{dienst.host}</dd>
                        <dt className="font-medium text-primary">Zweck</dt>
                        <dd>{dienst.zweck}</dd>
                        <dt className="font-medium text-primary">Cookies</dt>
                        <dd>
                          {dienst.setztCookies
                            ? "Der Anbieter setzt eigene Cookies und speichert Daten im Browser."
                            : "Der Anbieter setzt keine Cookies."}
                        </dd>
                        <dt className="font-medium text-primary">Weitere Dienste</dt>
                        <dd>{dienst.drittdienste}</dd>
                        <dt className="font-medium text-primary">Datenschutz</dt>
                        <dd>
                          <a
                            href={dienst.datenschutz}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:text-primary"
                          >
                            Erklärung des Anbieters
                          </a>
                        </dd>
                      </dl>
                    </div>
                  ))}
                </div>

                <Hinweis>
                  Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                  ändern oder widerrufen: <ConsentEinstellungenLink /> Bereits erfolgte
                  Bearbeitungen bleiben davon unberührt. Cookies, die ein Anbieter bereits
                  gesetzt hat, löschen Sie über die Einstellungen Ihres Browsers.
                </Hinweis>
              </Abschnitt>

              <Abschnitt nummer="6" titel="Auftragsbearbeiter und Empfänger">
                <p>
                  Für den Betrieb dieser Website ziehen wir spezialisierte Dienstleister
                  bei. Diese bearbeiten Personendaten ausschliesslich in unserem Auftrag
                  und nach unseren Weisungen. Diese Dienste sind für den Betrieb der
                  Website erforderlich und laufen deshalb unabhängig von einer
                  Einwilligung.
                </p>
                <div className="mt-6 flex flex-col gap-5">
                  {AUFTRAGSBEARBEITER.map((dienst) => (
                    <div key={dienst.name} className="border-t border-border pt-4">
                      <p className="font-medium text-primary">
                        {dienst.name} <span className="font-normal">· {dienst.sitz}</span>
                      </p>
                      <p className="mt-1.5 text-left! text-sm">{dienst.zweck}</p>
                      <p className="mt-1.5 text-left! text-sm">
                        <span className="font-medium text-primary">Daten:</span> {dienst.daten}
                      </p>
                      <a
                        href={dienst.datenschutz}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-block text-sm underline underline-offset-2 hover:text-primary"
                      >
                        Datenschutzerklärung des Anbieters
                      </a>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  Darüber hinaus geben wir Personendaten an die am Projekt beteiligten
                  Stellen weiter, soweit dies zur Beantwortung Ihrer Anfrage und zur
                  Verkaufsberatung erforderlich ist — namentlich an die mit dem Verkauf
                  beauftragte Keller ImmoVermarktung GmbH, Uetliburg.
                </p>
              </Abschnitt>

              <Abschnitt nummer="7" titel="Bekanntgabe ins Ausland">
                <p>
                  Wir bearbeiten Personendaten grundsätzlich in der Schweiz und im
                  Europäischen Wirtschaftsraum. Die Website wird über den Standort
                  Frankfurt ausgeliefert; auch die Serverfunktion des Kontaktformulars
                  wird dort ausgeführt.
                </p>
                <p className="mt-4">
                  Eine Bekanntgabe in die Vereinigten Staaten findet statt beim
                  technischen Versand der Kontaktformular-E-Mail über Resend sowie —
                  sofern Sie einwilligen — beim Laden des virtuellen Rundgangs und der
                  Umgebungskarte. Die Vereinigten Staaten verfügen nach Einschätzung des
                  Schweizerischen Bundesrates und der Europäischen Kommission über keinen
                  generell angemessenen Datenschutz. Wir stützen solche Übermittlungen
                  daher auf Standarddatenschutzklauseln beziehungsweise auf Ihre
                  ausdrückliche Einwilligung. Auf Anfrage geben wir gerne Auskunft über
                  die getroffenen Garantien.
                </p>
              </Abschnitt>

              <Abschnitt nummer="8" titel="Datensicherheit">
                <p>
                  Wir treffen angemessene technische und organisatorische Massnahmen, um
                  die Vertraulichkeit, Verfügbarkeit und Integrität der bearbeiteten
                  Personendaten zu schützen. Der Zugriff auf diese Website erfolgt
                  ausschliesslich über eine verschlüsselte Verbindung (HTTPS mit
                  TLS). Eine absolute Sicherheit kann bei der Übermittlung von Daten über
                  das Internet jedoch nicht gewährleistet werden.
                </p>
              </Abschnitt>

              <Abschnitt nummer="9" titel="Ihre Rechte">
                <p>
                  Sie haben im Rahmen des anwendbaren Datenschutzrechts insbesondere
                  folgende Rechte:
                </p>
                <Liste>
                  <li>
                    <strong className="font-medium text-primary">Auskunft</strong> darüber, ob
                    und welche Personendaten wir über Sie bearbeiten, samt den zur
                    Wahrnehmung Ihrer Rechte nötigen Angaben.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Berichtigung</strong>{" "}
                    unrichtiger und Vervollständigung unvollständiger Daten.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Löschung</strong> Ihrer Daten
                    sowie <strong className="font-medium text-primary">Einschränkung</strong>{" "}
                    der Bearbeitung.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Widerspruch</strong> gegen die
                    Bearbeitung mit Wirkung für die Zukunft.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Datenherausgabe und
                    -übertragung</strong> in einem gängigen elektronischen Format.
                  </li>
                  <li>
                    <strong className="font-medium text-primary">Widerruf einer
                    Einwilligung</strong> jederzeit mit Wirkung für die Zukunft.
                  </li>
                </Liste>
                <p className="mt-4">
                  Wenden Sie sich zur Ausübung dieser Rechte an die unter Ziffer 1
                  genannte Adresse. Wir sind verpflichtet, Ihre Identität mit angemessenen
                  Mitteln zu prüfen, und bitten Sie um Mitwirkung. Im rechtlich zulässigen
                  Rahmen können wir die Ausübung von Rechten einschränken oder verweigern,
                  etwa gestützt auf gesetzliche Aufbewahrungspflichten oder den Schutz
                  Dritter.
                </p>
                <p className="mt-4">
                  Sie haben zudem das Recht, Ihre Ansprüche auf dem Rechtsweg
                  durchzusetzen oder sich bei einer Aufsichtsbehörde zu beschweren.
                  Zuständige Behörde in der Schweiz ist der Eidgenössische Datenschutz-
                  und Öffentlichkeitsbeauftragte (EDÖB). Soweit die DSGVO anwendbar ist,
                  können Sie sich an die Datenschutz-Aufsichtsbehörde Ihres
                  Aufenthaltsstaates im Europäischen Wirtschaftsraum wenden.
                </p>
              </Abschnitt>

              <Abschnitt nummer="10" titel="Änderungen">
                <p>
                  Wir können diese Datenschutzerklärung jederzeit anpassen und ergänzen,
                  insbesondere wenn sich die eingesetzten Dienste ändern. Massgebend ist
                  die jeweils auf dieser Seite veröffentlichte Fassung. Ändern sich die
                  einwilligungspflichtigen Inhalte, holen wir Ihre Einwilligung erneut
                  ein.
                </p>
              </Abschnitt>
            </div>

            <p className="mt-14 border-t border-border pt-6 text-sm text-foreground-muted">
              Stand: {STAND} ·{" "}
              <Link href="/impressum" className="underline underline-offset-2 hover:text-primary">
                Impressum
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Abschnitt({
  nummer,
  titel,
  children,
}: {
  nummer: string;
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl text-primary md:text-2xl">
        <span className="text-accent">{nummer}.</span> {titel}
      </h2>
      <div className="mt-3 text-foreground-muted">{children}</div>
    </section>
  );
}

function Liste({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 flex list-disc flex-col gap-2.5 pl-5 marker:text-accent">{children}</ul>
  );
}

function Hinweis({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-[3px] border-primary bg-secondary/20 px-5 py-4">
      <p className="text-left! text-sm text-foreground">{children}</p>
    </div>
  );
}
