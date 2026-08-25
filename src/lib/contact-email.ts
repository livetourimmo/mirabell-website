/**
 * Anfrage-E-Mail im Design der Website.
 *
 * Aufbau bewusst konservativ: Tabellen statt Flex/Grid, ausschliesslich
 * Inline-Styles, feste 600 px Breite mit width-Attribut für Outlook. Damit
 * bleibt die E-Mail in Outlook (Word-Renderer), Gmail, Apple Mail und den
 * gängigen Webmailern lesbar. Die Farb- und Schriftwerte stammen aus
 * globals.css — PT Serif/PT Sans sind in Mailprogrammen nicht verfügbar,
 * deshalb jeweils mit Systemfallbacks (Georgia bzw. Helvetica/Arial).
 */

const COLOR = {
  primary: "#3f6580", // Bergseeblau
  accent: "#9c7726", // Altgold
  background: "#f4f1ea", // Leinenweiss
  surface: "#ffffff",
  foreground: "#2c3a42", // Tiefsee
  foregroundMuted: "#68757c", // Tiefsee auf 65 % Deckkraft, ausgerechnet
  border: "#dbe2e5", // Steingrau auf 55 % Deckkraft, ausgerechnet
} as const;

const FONT_HEADING = "'PT Serif', Georgia, 'Times New Roman', serif";
const FONT_BODY = "'PT Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  strasse: string;
  plz: string;
  ort: string;
  interesse: string;
  message: string;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Eine Zeile der Datentabelle — leere Felder werden gar nicht erst gerendert. */
function row(label: string, value: string, options: { href?: string; last?: boolean } = {}) {
  if (!value) return "";
  const borderBottom = options.last ? "none" : `1px solid ${COLOR.border}`;
  const inner = options.href
    ? `<a href="${escapeHtml(options.href)}" style="color:${COLOR.primary};text-decoration:underline;">${escapeHtml(value)}</a>`
    : escapeHtml(value);

  // Auf schmalen Screens rutscht der Wert unter das Label (siehe .mb-stack im
  // <style>-Block); Outlook Desktop ignoriert Media Queries und behält die
  // zweispaltige Variante — beides ist lesbar.
  return `
    <tr>
      <td class="mb-stack mb-stack-label" style="padding:12px 0;border-bottom:${borderBottom};font-family:${FONT_BODY};font-size:12px;line-height:18px;letter-spacing:0.08em;text-transform:uppercase;color:${COLOR.foregroundMuted};vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
      <td class="mb-stack" style="padding:12px 0 12px 24px;border-bottom:${borderBottom};font-family:${FONT_BODY};font-size:16px;line-height:24px;color:${COLOR.foreground};vertical-align:top;word-break:break-word;">${inner}</td>
    </tr>`;
}

export function buildContactEmail(data: ContactSubmission) {
  const ortZeile = [data.plz, data.ort].filter(Boolean).join(" ");
  const message = escapeHtml(data.message).replace(/\r?\n/g, "<br />");

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="de">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>Neue Kontaktanfrage — Mirabell</title>
<style type="text/css">
  /* Nur Ergänzungen: alles Wesentliche steht inline, damit Gmail & Co. nicht
     auf diesen Block angewiesen sind. */
  body { margin:0 !important; padding:0 !important; width:100% !important; }
  table { border-collapse:collapse; }
  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:${COLOR.primary}; }
  @media only screen and (max-width:620px) {
    .mb-shell { width:100% !important; }
    .mb-pad { padding-left:24px !important; padding-right:24px !important; }
    .mb-stack { display:block !important; width:100% !important; padding-left:0 !important; }
    .mb-stack-label { padding-bottom:2px !important; border-bottom:none !important; }
    .mb-title { font-size:24px !important; line-height:32px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:${COLOR.background};">
  <!-- Preheader: Vorschautext in der Inbox, im Mailtext selbst unsichtbar. -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${COLOR.background};">
    Neue Kontaktanfrage von ${escapeHtml(data.name)}${ortZeile ? ` aus ${escapeHtml(ortZeile)}` : ""}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${COLOR.background}" style="background-color:${COLOR.background};margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:32px 16px;">

        <table role="presentation" class="mb-shell" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${COLOR.surface};border:1px solid ${COLOR.border};">

          <!-- Kopf -->
          <tr>
            <td bgcolor="${COLOR.primary}" class="mb-pad" style="background-color:${COLOR.primary};padding:36px 40px 32px 40px;">
              <p style="margin:0;font-family:${FONT_BODY};font-size:11px;line-height:16px;letter-spacing:0.22em;text-transform:uppercase;color:#c3d0da;">Mirabell &middot; Uetliburg</p>
              <p class="mb-title" style="margin:12px 0 0 0;font-family:${FONT_HEADING};font-size:30px;line-height:38px;font-weight:400;color:${COLOR.surface};">Neue Kontaktanfrage</p>
            </td>
          </tr>
          <tr>
            <td bgcolor="${COLOR.accent}" style="background-color:${COLOR.accent};font-size:0;line-height:0;height:3px;">&nbsp;</td>
          </tr>

          <!-- Absenderdaten -->
          <tr>
            <td class="mb-pad" style="padding:36px 40px 8px 40px;">
              <p style="margin:0 0 4px 0;font-family:${FONT_BODY};font-size:11px;line-height:16px;letter-spacing:0.18em;text-transform:uppercase;color:${COLOR.accent};">Absender</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                ${row("Name", data.name)}
                ${row("E-Mail", data.email, { href: `mailto:${data.email}` })}
                ${row("Telefon", data.phone, { href: `tel:${data.phone.replace(/[^\d+]/g, "")}` })}
                ${row("Strasse", data.strasse)}
                ${row("PLZ / Ort", ortZeile)}
                ${row("Interesse an", data.interesse, { last: true })}
              </table>
            </td>
          </tr>

          <!-- Nachricht -->
          <tr>
            <td class="mb-pad" style="padding:28px 40px 8px 40px;">
              <p style="margin:0 0 12px 0;font-family:${FONT_BODY};font-size:11px;line-height:16px;letter-spacing:0.18em;text-transform:uppercase;color:${COLOR.accent};">Nachricht</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <tr>
                  <td bgcolor="${COLOR.background}" style="background-color:${COLOR.background};border-left:3px solid ${COLOR.primary};padding:20px 22px;font-family:${FONT_BODY};font-size:16px;line-height:26px;color:${COLOR.foreground};word-break:break-word;">
                    ${message}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hinweis -->
          <tr>
            <td class="mb-pad" style="padding:28px 40px 36px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
                <tr>
                  <td style="border-top:1px solid ${COLOR.border};padding-top:20px;font-family:${FONT_BODY};font-size:13px;line-height:20px;color:${COLOR.foregroundMuted};">
                    Ein Klick auf «Antworten» geht direkt an
                    <a href="mailto:${escapeHtml(data.email)}" style="color:${COLOR.primary};text-decoration:underline;">${escapeHtml(data.email)}</a>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Fusszeile -->
        <table role="presentation" class="mb-shell" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">
          <tr>
            <td class="mb-pad" align="center" style="padding:20px 40px 0 40px;font-family:${FONT_BODY};font-size:12px;line-height:20px;color:${COLOR.foregroundMuted};">
              Automatisch generiert vom Kontaktformular auf
              <a href="https://www.mirabell.immobilien" style="color:${COLOR.primary};text-decoration:underline;">mirabell.immobilien</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;

  // Textversion für Clients ohne HTML-Darstellung und für Spamfilter, die
  // eine multipart/alternative-Mail erwarten.
  // null = Feld war leer und entfällt; "" = gewollte Leerzeile.
  const text = [
    "NEUE KONTAKTANFRAGE — MIRABELL, UETLIBURG",
    "",
    `Name:         ${data.name}`,
    `E-Mail:       ${data.email}`,
    data.phone ? `Telefon:      ${data.phone}` : null,
    data.strasse ? `Strasse:      ${data.strasse}` : null,
    ortZeile ? `PLZ / Ort:    ${ortZeile}` : null,
    data.interesse ? `Interesse an: ${data.interesse}` : null,
    "",
    "Nachricht:",
    data.message,
    "",
    `Antworten geht direkt an ${data.email}.`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return {
    subject: `Neue Kontaktanfrage von ${data.name}`,
    html,
    text,
  };
}
