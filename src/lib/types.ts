export type UnitStatus = "verfuegbar" | "reserviert" | "verkauft";

export interface Unit {
  id: string;
  bezeichnung: string;
  haus: "Haus A" | "Haus B";
  geschoss: string;
  zimmer: number;
  wohnflaeche: number;
  sitzplatzBalkon: number;
  preis: number;
  status: UnitStatus;
  grundrissPdfUrl: string | null;
}

export interface DownloadItem {
  id: string;
  titel: string;
  beschreibung: string;
  dateityp: string;
  dateigroesse: string;
  url: string | null;
}
