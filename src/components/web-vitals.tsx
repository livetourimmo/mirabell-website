"use client";

import { useReportWebVitals } from "next/web-vitals";

type WebVitalsMeldung = Parameters<typeof useReportWebVitals>[0];

const GEMESSEN = new Set(["LCP", "INP", "CLS", "FCP", "TTFB"]);

/**
 * Sendet die Core Web Vitals echter Besuche als GA4-Ereignisse. Nur über das
 * vorhandene Google-Tag (components/google-tag.tsx): ohne gültige Mess-ID gibt
 * es kein window.gtag, dann wird nichts gesendet. Die Ereignisse unterliegen
 * demselben Consent Mode v2 wie alle übrigen GA-Aufrufe (vor Zustimmung cookielos).
 * Ausserhalb der Komponente, damit die Referenz stabil bleibt (sonst doppelte Meldungen).
 */
const melden: WebVitalsMeldung = (metric) => {
  if (!GEMESSEN.has(metric.name)) return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", metric.name, {
    // GA erwartet ganze Zahlen; CLS ist ein Bruchteil und wird daher mit 1000 multipliziert.
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
    non_interaction: true,
  });
};

export function WebVitals() {
  useReportWebVitals(melden);
  return null;
}
