"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/consent-provider";
import { deleteAnalyticsCookies, setAnalyticsConsent } from "@/lib/google-analytics";

/**
 * Consent Mode v2: Das Google-Tag lädt components/google-tag.tsx immer im
 * <head>, standardmässig ohne Cookies. Diese Komponente meldet Google nur den
 * aktuellen Entscheid. Ohne Einwilligung (auch bei verfallener Version)
 * werden allfällige Analytics-Cookies entfernt.
 */
export function GoogleAnalytics() {
  const { bereit, externeMedienErlaubt } = useConsent();

  useEffect(() => {
    if (!bereit) return;
    setAnalyticsConsent(externeMedienErlaubt);
    if (!externeMedienErlaubt) deleteAnalyticsCookies();
  }, [bereit, externeMedienErlaubt]);

  return null;
}
