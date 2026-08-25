/**
 * Einzige Quelle für Rechtsangaben und eingebundene Drittdienste.
 *
 * Impressum, Datenschutzerklärung, Cookie-Banner und die Consent-Schranken vor
 * den Embeds lesen alle aus dieser Datei. So kann die Auflistung in der
 * Datenschutzerklärung nicht auseinanderlaufen mit dem, was tatsächlich
 * blockiert bzw. freigegeben wird.
 */

export const VERANTWORTLICHE = {
  name: "Visto Immobilien AG",
  strasse: "Einsiedlerstrasse 21",
  plz: "8834",
  ort: "Schindellegi",
  land: "Schweiz",
  telefon: "+41 44 593 96 05",
  telefonHref: "tel:+41445939605",
  email: "info@visto-immobilien.ch",
  website: "visto-immobilien.ch",
  websiteHref: "https://visto-immobilien.ch",
  uid: "CHE-303.098.818",
  handelsregister: "CH-130.3.026.974-8",
} as const;

export const PROJEKTBETEILIGTE = [
  {
    rolle: "Bauherrschaft & Realisation",
    name: "Visto Immobilien AG",
    zeilen: ["Einsiedlerstrasse 21", "8834 Schindellegi"],
  },
  {
    rolle: "Verkauf & Beratung",
    name: "Keller ImmoVermarktung GmbH",
    zeilen: ["Lindenstrasse 35", "8738 Uetliburg", "info@keller-immovermarktung.ch"],
  },
  {
    rolle: "Architektur",
    name: "Hasler Limacher Architekten GmbH",
    zeilen: ["Werner-Kälin-Strasse 3", "8840 Einsiedeln", "info@hasler-limacher.ch"],
  },
  {
    rolle: "Baumanagement",
    name: "Lienert Partner AG",
    zeilen: ["Mühlestrasse 3", "8840 Einsiedeln"],
  },
  {
    rolle: "Konzept & Realisierung Website",
    name: "liveTour Immobilienmarketing GmbH",
    zeilen: ["Wellhauserweg 41a", "8500 Frauenfeld", "www.livetour.ch"],
  },
] as const;

/* ========================================================================== */
/* Auftragsbearbeiter — laufen ohne Einwilligung, weil für den Betrieb nötig   */
/* ========================================================================== */

export const AUFTRAGSBEARBEITER = [
  {
    name: "Vercel Inc.",
    sitz: "Vereinigte Staaten",
    zweck:
      "Hosting und Auslieferung der Website. Die Auslieferung erfolgt über den Standort Frankfurt (fra1); die Serverfunktion für das Kontaktformular wird ebenfalls in Frankfurt ausgeführt.",
    daten: "IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser- und Gerätekennung (Server-Logs)",
    datenschutz: "https://vercel.com/legal/privacy-policy",
  },
  {
    name: "Resend (Plus Five Five, Inc.)",
    sitz: "Vereinigte Staaten",
    zweck: "Technischer Versand der E-Mail, die aus dem Kontaktformular erzeugt wird.",
    daten: "Alle im Kontaktformular eingegebenen Angaben sowie Absender- und Empfängeradresse",
    datenschutz: "https://resend.com/legal/privacy-policy",
  },
  {
    name: "liveTour Immobilienmarketing GmbH",
    sitz: "Schweiz",
    zweck:
      "Betrieb und Betreuung der Website sowie Entgegennahme und Weiterleitung der Anfragen aus dem Kontaktformular.",
    daten: "Alle im Kontaktformular eingegebenen Angaben",
    datenschutz: "https://www.livetour.ch",
  },
] as const;

/* ========================================================================== */
/* Einwilligungspflichtige Embeds                                             */
/* ========================================================================== */

export type EmbedId = "navigator" | "rundgang" | "karte";

export interface EmbedDienst {
  id: EmbedId;
  /** Bezeichnung im Banner, in den Einstellungen und in der Datenschutzerklärung. */
  titel: string;
  anbieter: string;
  sitz: string;
  /** Host, der beim Laden kontaktiert wird. */
  host: string;
  zweck: string;
  /** Was der Dienst nachweislich nachlädt — im August 2026 im Browser geprüft. */
  drittdienste: string;
  setztCookies: boolean;
  datenschutz: string;
}

export const EMBEDS: Record<EmbedId, EmbedDienst> = {
  navigator: {
    id: "navigator",
    titel: "Immobiliennavigator",
    anbieter: "liveTour Immobilienmarketing GmbH",
    sitz: "Schweiz",
    host: "lvt-gamma.vercel.app",
    zweck:
      "Interaktive Übersicht der 13 Wohnungen mit Gebäudeansicht, Filter und Detailangaben.",
    drittdienste:
      "Lädt keine Werbe- oder Analysedienste nach. Die Daten stammen aus einer Datenbank im EU-Raum (Irland).",
    setztCookies: false,
    datenschutz: "https://www.livetour.ch",
  },
  rundgang: {
    id: "rundgang",
    titel: "Virtueller Rundgang (360°)",
    anbieter: "CloudPano LLC",
    sitz: "Vereinigte Staaten",
    host: "app.cloudpano.com",
    zweck: "360°-Begehung der Musterwohnung.",
    drittdienste:
      "Bindet beim Laden zusätzlich Google Tag Manager, Google Analytics, DoubleClick (Google-Werbenetzwerk), den Facebook-Pixel (Meta), PostHog, Sentry und Cloudflare-Analysen ein.",
    setztCookies: true,
    datenschutz: "https://www.cloudpano.com/privacy-policy",
  },
  karte: {
    id: "karte",
    titel: "Interaktive Umgebungskarte",
    anbieter: "Atlist (Atlist Inc.)",
    sitz: "Vereinigte Staaten",
    host: "my.atlist.com",
    zweck: "Karte mit dem Standort von Mirabell und Punkten in der Umgebung.",
    drittdienste:
      "Bindet beim Laden zusätzlich Google Maps, Google Tag Manager, Google Analytics, DoubleClick (Google-Werbenetzwerk), Segment, Heap Analytics und Sentry ein. Die Karte kann ausserdem den Standort des Geräts abfragen — das geschieht nur, wenn Sie die Abfrage im Browser ausdrücklich erlauben.",
    setztCookies: true,
    datenschutz: "https://www.atlist.com/privacy",
  },
};

export const EMBED_LISTE = Object.values(EMBEDS);

/** Datum der letzten inhaltlichen Überarbeitung der Rechtstexte. */
export const STAND = "August 2026";
