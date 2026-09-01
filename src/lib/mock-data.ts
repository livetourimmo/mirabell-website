import { DownloadItem, Unit } from "./types";

/**
 * Platzhalterdaten — bis zum Supabase-Import aus angebotsliste.xlsx.
 * Struktur entspricht 1:1 der geplanten Tabelle `units`.
 */
export const MOCK_UNITS: Unit[] = [
  { id: "a-eg-1", bezeichnung: "Haus A · Wohnung 1", haus: "Haus A", geschoss: "Erdgeschoss", zimmer: 3.5, wohnflaeche: 88, sitzplatzBalkon: 24, preis: 870000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "a-eg-2", bezeichnung: "Haus A · Wohnung 2", haus: "Haus A", geschoss: "Erdgeschoss", zimmer: 2.5, wohnflaeche: 68, sitzplatzBalkon: 18, preis: 690000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "a-og-1", bezeichnung: "Haus A · Wohnung 3", haus: "Haus A", geschoss: "Obergeschoss", zimmer: 4.5, wohnflaeche: 104, sitzplatzBalkon: 14, preis: 980000, status: "reserviert", grundrissPdfUrl: null },
  { id: "a-og-2", bezeichnung: "Haus A · Wohnung 4", haus: "Haus A", geschoss: "Obergeschoss", zimmer: 3.5, wohnflaeche: 90, sitzplatzBalkon: 12, preis: 890000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "a-og-3", bezeichnung: "Haus A · Wohnung 5", haus: "Haus A", geschoss: "Obergeschoss", zimmer: 2.5, wohnflaeche: 66, sitzplatzBalkon: 10, preis: 670000, status: "verkauft", grundrissPdfUrl: null },
  { id: "a-dg-1", bezeichnung: "Haus A · Wohnung 6", haus: "Haus A", geschoss: "Dachgeschoss", zimmer: 4.5, wohnflaeche: 112, sitzplatzBalkon: 20, preis: 1050000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "a-dg-2", bezeichnung: "Haus A · Wohnung 7", haus: "Haus A", geschoss: "Dachgeschoss", zimmer: 3.5, wohnflaeche: 95, sitzplatzBalkon: 16, preis: 940000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "b-eg-1", bezeichnung: "Haus B · Wohnung 8", haus: "Haus B", geschoss: "Erdgeschoss", zimmer: 3.5, wohnflaeche: 89, sitzplatzBalkon: 26, preis: 880000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "b-eg-2", bezeichnung: "Haus B · Wohnung 9", haus: "Haus B", geschoss: "Erdgeschoss", zimmer: 2.5, wohnflaeche: 67, sitzplatzBalkon: 19, preis: 685000, status: "reserviert", grundrissPdfUrl: null },
  { id: "b-og-1", bezeichnung: "Haus B · Wohnung 10", haus: "Haus B", geschoss: "Obergeschoss", zimmer: 3.5, wohnflaeche: 90, sitzplatzBalkon: 13, preis: 890000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "b-og-2", bezeichnung: "Haus B · Wohnung 11", haus: "Haus B", geschoss: "Obergeschoss", zimmer: 4.5, wohnflaeche: 106, sitzplatzBalkon: 15, preis: 990000, status: "verfuegbar", grundrissPdfUrl: null },
  { id: "b-dg-1", bezeichnung: "Haus B · Wohnung 12", haus: "Haus B", geschoss: "Dachgeschoss", zimmer: 4.5, wohnflaeche: 114, sitzplatzBalkon: 22, preis: 1070000, status: "verkauft", grundrissPdfUrl: null },
  { id: "b-dg-2", bezeichnung: "Haus B · Wohnung 13", haus: "Haus B", geschoss: "Dachgeschoss", zimmer: 3.5, wohnflaeche: 96, sitzplatzBalkon: 17, preis: 950000, status: "verfuegbar", grundrissPdfUrl: null },
];

export const MOCK_DOWNLOADS: DownloadItem[] = [
  { id: "kurzbaubeschrieb", titel: "Kurzbaubeschrieb", beschreibung: "Konstruktion, Materialisierung und Ausstattung.", dateityp: "PDF", dateigroesse: "495 KB", url: "/downloads/Mirabell-Kurzbaubeschrieb.pdf" },
  { id: "grundrisse", titel: "Grundrisse", beschreibung: "Alle 13 Wohnungen, Haus A und Haus B.", dateityp: "PDF", dateigroesse: "6.2 MB", url: "/downloads/Mirabell-Grundrisse.pdf" },
  { id: "situationsplan", titel: "Situationsplan", beschreibung: "Lage der Baukörper auf dem Grundstück.", dateityp: "PDF", dateigroesse: "2.6 MB", url: "/downloads/Mirabell-Situationsplan.pdf" },
  { id: "untergeschoss", titel: "Untergeschoss", beschreibung: "Einstellhalle, Kellerabteile und Technikräume.", dateityp: "PDF", dateigroesse: "943 KB", url: "/downloads/Mirabell-Untergeschoss.pdf" },
  { id: "empfehlungsschreiben", titel: "Empfehlungsschreiben", beschreibung: "Finanzierungsempfehlung der Bank zum Projekt.", dateityp: "PDF", dateigroesse: "397 KB", url: "/Empfehlungsschreiben%20Ottenhofenstrasse.pdf" },
];

export function formatChf(value: number) {
  return `CHF ${value.toLocaleString("de-CH")}.–`;
}

export const STATUS_LABEL: Record<Unit["status"], string> = {
  verfuegbar: "Verfügbar",
  reserviert: "Reserviert",
  verkauft: "Verkauft",
};
