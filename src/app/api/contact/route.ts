import { Resend } from "resend";
import { MOCK_UNITS } from "@/lib/mock-data";
import { buildContactEmail } from "@/lib/contact-email";

// Ohne diese Angabe lief die Funktion in iad1 (Washington), d. h. die
// Formulardaten wurden in den USA verarbeitet. fra1 (Frankfurt) haelt die
// Bearbeitung im EWR und deckt sich mit der Datenschutzerklaerung.
export const preferredRegion = "fra1";

// Das Select sendet die Unit-ID (z. B. "a-eg-1") — in der E-Mail soll die
// gleiche Bezeichnung stehen wie im Formular (z. B. "Haus A · Wohnung 1").
function interesseLabel(value: string) {
  return MOCK_UNITS.find((unit) => unit.id === value)?.bezeichnung ?? value;
}

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot — für Menschen unsichtbares Feld, Bots füllen es meist aus.
  // Wird geloggt, damit ein Fehlalarm in den Vercel-Logs auffällt, statt still
  // eine echte Anfrage zu verschlucken.
  if (String(data.get("kontakt_ref") ?? "").length > 0) {
    console.warn(
      "Kontaktformular: Honeypot ausgelöst, Anfrage verworfen.",
      `name=${String(data.get("vorname") ?? "")} ${String(data.get("nachname") ?? "")}`,
      `email=${String(data.get("email") ?? "")}`
    );
    return Response.json({ ok: true });
  }

  const vorname = String(data.get("vorname") ?? "").trim();
  const nachname = String(data.get("nachname") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const strasse = String(data.get("strasse") ?? "").trim();
  const plz = String(data.get("plz") ?? "").trim();
  const ort = String(data.get("ort") ?? "").trim();
  const interesse = interesseLabel(String(data.get("interesse") ?? "").trim());
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
  });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
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

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);
    return Response.json(
      { ok: false, error: "Der Versand ist fehlgeschlagen." },
      { status: 500 }
    );
  }
}
