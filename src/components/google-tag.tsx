import { GA_ID, GA_ID_GUELTIG } from "@/lib/google-analytics";

/**
 * Google-Tag im Einwilligungsmodus (Consent Mode v2).
 *
 * Das Tag steht immer im <head>, damit Google es findet. Bevor es lädt, gilt
 * für alle Speicherarten "denied": ohne Zustimmung setzt Google keine Cookies
 * und sendet nur cookielose Signale. Hat der Besucher früher «Alle
 * akzeptieren» gewählt, wird das hier sofort aus dem gespeicherten Entscheid
 * übernommen, damit der erste Seitenaufruf nicht verloren geht. Spätere
 * Änderungen meldet components/google-analytics.tsx.
 *
 * Speicherschlüssel, Format und Version müssen zu
 * components/consent/consent-provider.tsx passen (mirabell-consent, Version 2,
 * externeMedien). Der Entscheid hat dort kein Ablaufdatum.
 *
 * Werbefunktionen bleiben immer abgelehnt; die Seite nutzt keine Google-Werbung.
 */
export function GoogleTag() {
  if (!GA_ID_GUELTIG) return null;

  const einrichten = `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
var statistik=false;
try{var c=JSON.parse(localStorage.getItem('mirabell-consent'));statistik=!!(c&&c.version===2&&c.externeMedien===true);}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:statistik?'granted':'denied',wait_for_update:500});
gtag('js',new Date());
gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:${60 * 60 * 24 * 365}});`;

  return (
    <>
      <script id="mirabell-google-tag-einwilligung" dangerouslySetInnerHTML={{ __html: einrichten }} />
      <script async id="mirabell-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
    </>
  );
}
