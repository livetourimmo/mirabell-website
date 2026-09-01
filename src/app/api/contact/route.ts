import { Resend } from "resend";
import { buildContactEmail } from "@/lib/contact-email";

// Ohne diese Angabe lief die Funktion in iad1 (Washington), d. h. die
// Formulardaten wurden in den USA verarbeitet. fra1 (Frankfurt) haelt die
// Bearbeitung im EWR und deckt sich mit der Datenschutzerklaerung.
export const preferredRegion = "fra1";

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot — für Menschen unsichtbares Feld, Bots füllen es meist aus.
  //
  // Die Anfrage wird deswegen NICHT mehr verworfen. Passwortmanager und die
  // Browser-Autovervollständigung fuellen das Feld ebenfalls aus; die Mail ging
  // dann nie raus, waehrend das Formular "Nachricht gesendet" meldete. Eine echte
  // Anfrage still zu verlieren wiegt schwerer als eine markierte Spam-Mail.
  // Der Verdacht steht jetzt im Betreff und im Mailkopf, filtern kann man ihn dort.
  const spamVerdacht = String(data.get("kontakt_ref") ?? "").trim().length > 0;
  if (spamVerdacht) {
    console.warn(
      "Kontaktformular: Honeypot ausgelöst, Anfrage als Spam-Verdacht markiert.",
      `name=${String(data.get("vorname") ?? "")} ${String(data.get("nachname") ?? "")}`,
      `email=${String(data.get("email") ?? "")}`
    );
  }

  const vorname = String(data.get("vorname") ?? "").trim();
  const nachname = String(data.get("nachname") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const strasse = String(data.get("strasse") ?? "").trim();
  const plz = String(data.get("plz") ?? "").trim();
  const ort = String(data.get("ort") ?? "").trim();
  // Das Select sendet die fertige Bezeichnung aus dem Navigator
  // (z. B. "Haus A · Wohnung A11"), sie geht unverändert in die E-Mail.
  const interesse = String(data.get("interesse") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!vorname || !nachname || !email || !message) {
    return Response.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return Response.json(
      { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "Kontaktformular: RESEND_API_KEY, CONTACT_TO_EMAIL oder CONTACT_FROM_EMAIL ist nicht gesetzt."
    );
    return Response.json(
      { ok: false, error: "Der Versand ist derzeit nicht konfiguriert." },
      { status: 500 }
    );
  }

  const { subject, html, text } = buildContactEmail({
    vorname,
    nachname,
    email,
    phone,
    strasse,
    plz,
    ort,
    interesse,
    message,
    spamVerdacht,
  });

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return Response.json(
        { ok: false, error: "Der Versand ist fehlgeschlagen." },
        { status: 502 }
      );
    }

    console.log(
      "Kontaktformular: Mail an Resend uebergeben.",
      `id=${sent?.id ?? "unbekannt"}`,
      `to=${to}`,
      `spamVerdacht=${spamVerdacht}`
    );
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);
    return Response.json(
      { ok: false, error: "Der Versand ist fehlgeschlagen." },
      { status: 500 }
    );
  }
}
