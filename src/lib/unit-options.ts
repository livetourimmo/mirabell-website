/**
 * Wohnungsbezeichnungen exakt so, wie sie der Immobiliennavigator auf der
 * Angebotsseite ausweist. Wer dort eine Wohnung anschaut und danach das
 * Kontaktformular ausfüllt, findet im Auswahlfeld dieselbe Bezeichnung wieder.
 */
export const UNIT_OPTIONS = [
  { haus: "Haus A", wohnungen: ["A11", "A12", "A21", "A22", "A31", "A32"] },
  { haus: "Haus B", wohnungen: ["B01", "B11", "B12", "B21", "B22", "B31", "B32"] },
] as const;

/** Wert im Formular und in der E-Mail, z. B. "Haus A · Wohnung A11". */
export function unitOptionValue(haus: string, wohnung: string) {
  return `${haus} · Wohnung ${wohnung}`;
}
