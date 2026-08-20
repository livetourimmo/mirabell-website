import { Resend } from "resend";
import { MOCK_UNITS } from "@/lib/mock-data";

// Das Select sendet die Unit-ID (z. B. "a-eg-1") — in der E-Mail soll die
// gleiche Bezeichnung stehen wie im Formular (z. B. "Haus A · Wohnung 1").
function interesseLabel(value: string) {
  return MOCK_UNITS.find((unit) => unit.id === value)?.bezeichnung ?? value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot — für Menschen unsichtbares Feld, Bots füllen es meist aus.
  if (String(data.get("website") ?? "").length > 0) {
    return Response.json({ ok: true });
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const interesse = interesseLabel(String(data.get("interesse") ?? "").trim());
  const message = String(data.get("message") ?? "").trim();

  if (!name || !email || !message) {
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

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${interesse ? `<p><strong>Interesse an:</strong> ${escapeHtml(interesse)}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
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
