"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { EmbedId } from "@/lib/legal";

/**
 * Einwilligungsverwaltung.
 *
 * Grundsatz: Externe Embeds werden erst geladen, wenn eine Einwilligung
 * vorliegt. Ein Banner, der erst zustimmt, nachdem die Tracker längst geladen
 * sind, wäre wirkungslos — deshalb hängt das Rendern der iframes am Zustand
 * hier und nicht bloss an einem Hinweistext.
 *
 * Gespeichert wird ausschliesslich lokal im Browser (localStorage), nicht in
 * einem Cookie: Die Entscheidung muss den Browser nie verlassen.
 */

/** Hochzählen, wenn sich die eingebundenen Dienste ändern — fragt erneut nach. */
const CONSENT_VERSION = 1;
const STORAGE_KEY = "mirabell-consent";

interface StoredConsent {
  version: number;
  externeMedien: boolean;
  zeitpunkt: string;
}

interface ConsentContextValue {
  /** false, solange localStorage noch nicht gelesen wurde (SSR und erster Frame). */
  bereit: boolean;
  /** true, wenn noch nie entschieden wurde — dann zeigt der Banner. */
  offen: boolean;
  externeMedienErlaubt: boolean;
  /** Einzeln freigegebene Embeds ("nur dieses eine laden"), gilt bis zum Reload. */
  einzelfreigaben: Set<EmbedId>;
  darfLaden: (id: EmbedId) => boolean;
  alleAkzeptieren: () => void;
  nurNotwendige: () => void;
  einmaligLaden: (id: EmbedId) => void;
  /** Öffnet die Einstellungen erneut, z. B. über den Link im Footer. */
  einstellungenOeffnen: () => void;
  einstellungenOffen: boolean;
  einstellungenSchliessen: () => void;
  zeitpunkt: string | null;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

function lesen(): StoredConsent | null {
  try {
    const roh = window.localStorage.getItem(STORAGE_KEY);
    if (!roh) return null;
    const wert = JSON.parse(roh) as StoredConsent;
    // Bei geänderter Version verfällt die alte Einwilligung bewusst.
    if (wert.version !== CONSENT_VERSION) return null;
    return wert;
  } catch {
    // Privater Modus oder blockierter Speicher: wie "noch nicht entschieden"
    // behandeln — im Zweifel wird nichts geladen.
    return null;
  }
}

function schreiben(wert: StoredConsent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wert));
  } catch {
    // Nicht speicherbar: Die Entscheidung gilt dann nur für diese Sitzung.
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [bereit, setBereit] = useState(false);
  const [gespeichert, setGespeichert] = useState<StoredConsent | null>(null);
  const [einzelfreigaben, setEinzelfreigaben] = useState<Set<EmbedId>>(new Set());
  const [einstellungenOffen, setEinstellungenOffen] = useState(false);

  useEffect(() => {
    setGespeichert(lesen());
    setBereit(true);
  }, []);

  const setzen = useCallback((externeMedien: boolean) => {
    const wert: StoredConsent = {
      version: CONSENT_VERSION,
      externeMedien,
      zeitpunkt: new Date().toISOString(),
    };
    schreiben(wert);
    setGespeichert(wert);
    setEinstellungenOffen(false);
  }, []);

  const alleAkzeptieren = useCallback(() => setzen(true), [setzen]);
  const nurNotwendige = useCallback(() => {
    // Widerruf muss auch die Einzelfreigaben zurücknehmen, sonst bliebe ein
    // bereits geladenes Embed trotz "Nur notwendige" weiter sichtbar.
    setEinzelfreigaben(new Set());
    setzen(false);
  }, [setzen]);

  const einmaligLaden = useCallback((id: EmbedId) => {
    setEinzelfreigaben((vorher) => new Set(vorher).add(id));
  }, []);

  const externeMedienErlaubt = gespeichert?.externeMedien === true;

  const darfLaden = useCallback(
    (id: EmbedId) => externeMedienErlaubt || einzelfreigaben.has(id),
    [externeMedienErlaubt, einzelfreigaben]
  );

  const wert = useMemo<ConsentContextValue>(
    () => ({
      bereit,
      offen: bereit && gespeichert === null,
      externeMedienErlaubt,
      einzelfreigaben,
      darfLaden,
      alleAkzeptieren,
      nurNotwendige,
      einmaligLaden,
      einstellungenOeffnen: () => setEinstellungenOffen(true),
      einstellungenOffen,
      einstellungenSchliessen: () => setEinstellungenOffen(false),
      zeitpunkt: gespeichert?.zeitpunkt ?? null,
    }),
    [
      bereit,
      gespeichert,
      externeMedienErlaubt,
      einzelfreigaben,
      darfLaden,
      alleAkzeptieren,
      nurNotwendige,
      einmaligLaden,
      einstellungenOffen,
    ]
  );

  return <ConsentContext.Provider value={wert}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent muss innerhalb von <ConsentProvider> verwendet werden.");
  return ctx;
}
