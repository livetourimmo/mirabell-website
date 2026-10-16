export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    mirabellGaInitialized?: boolean;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function disableGoogleAnalytics() {
  if (!GA_ID) return;
  window[`ga-disable-${GA_ID}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  // Remove this property's first-party cookies, including parent-domain cookies.
  const domains = ["", ...window.location.hostname.split(".").map((_, i, parts) => parts.slice(i).join(".")).filter((d) => d.includes("."))];
  for (const name of ["_ga", `_ga_${GA_ID.slice(2)}`]) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
    }
  }
}
