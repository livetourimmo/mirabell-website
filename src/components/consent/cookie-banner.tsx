"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { EMBED_LISTE } from "@/lib/legal";
import { useConsent } from "@/components/consent/consent-provider";

/**
 * Cookie-/Einwilligungsbanner.
 *
 * Bewusst gleichwertige Buttons: "Alle akzeptieren" und "Nur notwendige"
 * stehen nebeneinander und sind gleich gross. Eine optisch abgeschwächte
 * Ablehnung wäre keine freiwillige Einwilligung.
 */
export function CookieBanner() {
  const {
    bereit,
    offen,
    externeMedienErlaubt,
    alleAkzeptieren,
    nurNotwendige,
    einstellungenOeffnen,
    einstellungenOffen,
    einstellungenSchliessen,
  } = useConsent();

  if (!bereit) return null;

  return (
    <>
      {offen && !einstellungenOffen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="consent-titel"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface shadow-[0_-8px_30px_rgba(44,58,66,0.10)]"
        >
          <div className="shell flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[68ch]">
              <p id="consent-titel" className="font-heading text-lg text-primary">
                Externe Inhalte
              </p>
              <p className="mt-1.5 text-left! text-sm text-foreground-muted">
                Diese Website funktioniert ohne Cookies. Für den virtuellen Rundgang, die
                Umgebungskarte und den Immobiliennavigator binden wir Inhalte von
                Drittanbietern ein. Beim Laden erhalten diese Ihre IP-Adresse; Rundgang
                und Karte setzen zudem eigene Cookies und laden Analyse- und
                Werbedienste nach. Das geschieht nur mit Ihrer Einwilligung.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" onClick={alleAkzeptieren} className="sm:order-2">
                Alle akzeptieren
              </Button>
              <Button variant="secondary" onClick={nurNotwendige} className="sm:order-1">
                Nur notwendige
              </Button>
              <button
                type="button"
                onClick={einstellungenOeffnen}
                className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-70 sm:order-3"
              >
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      )}

      {einstellungenOffen && (
        <Einstellungen
          externeMedienErlaubt={externeMedienErlaubt}
          alleAkzeptieren={alleAkzeptieren}
          nurNotwendige={nurNotwendige}
          schliessen={einstellungenSchliessen}
        />
      )}
    </>
  );
}

interface EinstellungenProps {
  externeMedienErlaubt: boolean;
  alleAkzeptieren: () => void;
  nurNotwendige: () => void;
  schliessen: () => void;
}

function Einstellungen({
  externeMedienErlaubt,
  alleAkzeptieren,
  nurNotwendige,
  schliessen,
}: EinstellungenProps) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
    };
    window.addEventListener("keydown", onKey);
    // Hintergrund nicht mitscrollen lassen, solange der Dialog offen ist.
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = vorher;
    };
  }, [schliessen]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground/40 p-0 sm:items-center sm:p-6">
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-einstellungen-titel"
        tabIndex={-1}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[var(--radius-lg)] bg-surface p-7 outline-none sm:rounded-[var(--radius-lg)] md:p-9"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Datenschutz
        </p>
        <h2
          id="consent-einstellungen-titel"
          className="mt-2 font-heading text-2xl text-primary md:text-3xl"
        >
          Einstellungen zu externen Inhalten
        </h2>

        <div className="mt-7 rounded-[var(--radius-base)] border border-border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-heading text-lg text-primary">Notwendig</p>
              <p className="mt-1 text-left! text-sm text-foreground-muted">
                Auslieferung der Seite, Sicherheit und das Kontaktformular. Diese Website
                setzt dafür keine Cookies. Der Hosting-Anbieter protokolliert jeden
                Zugriff technisch mit (IP-Adresse, Zeitpunkt, aufgerufene Seite).
              </p>
            </div>
            <span className="shrink-0 rounded-[var(--radius-pill)] bg-secondary/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground">
              Immer aktiv
            </span>
          </div>
        </div>

        <div className="mt-4 rounded-[var(--radius-base)] border border-border p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-heading text-lg text-primary">Externe Inhalte</p>
              <p className="mt-1 text-left! text-sm text-foreground-muted">
                Ohne Einwilligung bleiben diese Inhalte gesperrt und es wird keine
                Verbindung zu den Anbietern aufgebaut. Sie können jedes Element auch
                einzeln und nur für den aktuellen Besuch laden.
              </p>
            </div>
            <span
              className={`shrink-0 rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                externeMedienErlaubt
                  ? "bg-primary/15 text-primary"
                  : "bg-foreground/10 text-foreground-muted"
              }`}
            >
              {externeMedienErlaubt ? "Erlaubt" : "Gesperrt"}
            </span>
          </div>

          <ul className="mt-5 flex flex-col gap-4 border-t border-border pt-5">
            {EMBED_LISTE.map((dienst) => (
              <li key={dienst.id}>
                <p className="text-sm font-semibold text-primary">{dienst.titel}</p>
                <p className="mt-0.5 text-left! text-xs text-foreground-muted">
                  {dienst.anbieter} · {dienst.sitz} · {dienst.host} ·{" "}
                  {dienst.setztCookies ? "setzt Cookies" : "setzt keine Cookies"}
                </p>
                <p className="mt-1 text-left! text-xs text-foreground-muted">
                  {dienst.drittdienste}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="primary" onClick={alleAkzeptieren} className="sm:order-2">
            Alle akzeptieren
          </Button>
          <Button variant="secondary" onClick={nurNotwendige} className="sm:order-1">
            Nur notwendige
          </Button>
          <button
            type="button"
            onClick={schliessen}
            className="text-sm font-medium text-foreground-muted underline underline-offset-4 hover:text-primary sm:order-3"
          >
            Schliessen
          </button>
        </div>

        <p className="mt-5 text-left! text-xs text-foreground-muted">
          Ihre Entscheidung wird lokal in Ihrem Browser gespeichert und verlässt das
          Gerät nicht. Sie können sie jederzeit ändern. Weitere Angaben in der{" "}
          <Link
            href="/datenschutz"
            onClick={schliessen}
            className="underline underline-offset-2 hover:text-primary"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
