"use client";

import { useConsent } from "@/components/consent/consent-provider";

/**
 * Öffnet die Einwilligungs-Einstellungen erneut. Als eigene Client-Komponente
 * ausgelagert, damit Impressum, Datenschutz und Footer serverseitig gerendert
 * bleiben können.
 */
export function ConsentEinstellungenLink({ className = "" }: { className?: string }) {
  const { einstellungenOeffnen, bereit, externeMedienErlaubt, zeitpunkt } = useConsent();

  return (
    <button
      type="button"
      onClick={einstellungenOeffnen}
      className={`underline underline-offset-2 hover:text-primary ${className}`}
    >
      Cookie-Einstellungen öffnen
      {bereit && zeitpunkt && (
        <span className="sr-only">
          {externeMedienErlaubt
            ? " — externe Inhalte sind derzeit erlaubt"
            : " — externe Inhalte sind derzeit gesperrt"}
        </span>
      )}
    </button>
  );
}
