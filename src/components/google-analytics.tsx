"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/consent-provider";
import { GA_ID } from "@/lib/google-analytics";

/** Basic consent mode: no Google tag request before explicit consent. */
export function GoogleAnalytics() {
  const { bereit, externeMedienErlaubt } = useConsent();

  useEffect(() => {
    if (!/^G-[A-Z0-9]+$/.test(GA_ID) || !bereit || !externeMedienErlaubt) return;
    window[`ga-disable-${GA_ID}`] = false;
    if (window.mirabellGaInitialized) return;
    window.mirabellGaInitialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      // gtag uses an Arguments object in the dataLayer command queue.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 365,
    });
    const script = document.createElement("script");
    script.id = "mirabell-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }, [bereit, externeMedienErlaubt]);

  return null;
}
