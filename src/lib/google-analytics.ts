export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
/** Nur eine echte GA4-Mess-ID wird eingesetzt (auch als Schutz im Inline-Skript). */
export const GA_ID_GUELTIG = /^G-[A-Z0-9]+$/.test(GA_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Meldet Google den Statistik-Entscheid (Consent Mode v2). Werbespeicher
 * bleiben unverändert "denied" aus dem Standard im Inline-Skript.
 */
export function setAnalyticsConsent(granted: boolean) {
  if (!GA_ID_GUELTIG || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", { analytics_storage: granted ? "granted" : "denied" });
}

/**
 * Widerruf: Analytics-Speicher ablehnen und die Cookies dieser Property löschen.
 *
 * Bewusst ohne window['ga-disable-<ID>']: Das würde auch die cookielosen
 * Signale des Einwilligungsmodus unterdrücken. Mit analytics_storage "denied"
 * setzt Google keine Cookies mehr, und die vorhandenen werden hier entfernt.
 */
export function disableGoogleAnalytics() {
  if (!GA_ID_GUELTIG) return;
  setAnalyticsConsent(false);
  deleteAnalyticsCookies();
}

/** Entfernt _ga und _ga_<ID> auf der aktuellen Domain und ihren Oberdomains. */
export function deleteAnalyticsCookies() {
  if (!GA_ID_GUELTIG) return;
  const domains = ["", ...window.location.hostname.split(".").map((_, i, parts) => parts.slice(i).join(".")).filter((d) => d.includes("."))];
  for (const name of ["_ga", `_ga_${GA_ID.slice(2)}`]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
    }
  }
}
