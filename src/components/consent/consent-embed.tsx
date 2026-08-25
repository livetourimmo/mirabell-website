"use client";

import { Lock } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { EMBEDS, type EmbedId } from "@/lib/legal";
import { useConsent } from "@/components/consent/consent-provider";

interface ConsentEmbedProps {
  id: EmbedId;
  /** Wird erst gerendert, wenn eine Einwilligung vorliegt — vorher existiert kein iframe. */
  children: ReactNode;
  /** Zusätzliche Klassen für den Platzhalter, damit er dieselbe Fläche einnimmt. */
  className?: string;
}

/**
 * Sperrt ein Embed, bis eingewilligt wurde.
 *
 * Entscheidend: children wird nicht bloss ausgeblendet, sondern gar nicht erst
 * gerendert. Ein per CSS verstecktes iframe würde trotzdem laden und damit
 * genau die Datenübermittlung auslösen, die verhindert werden soll.
 */
export function ConsentEmbed({ id, children, className = "" }: ConsentEmbedProps) {
  const { bereit, darfLaden, einmaligLaden, alleAkzeptieren } = useConsent();
  const dienst = EMBEDS[id];

  // Vor dem Auslesen des Speichers nichts anzeigen — sonst blitzt der
  // Platzhalter bei bereits erteilter Einwilligung kurz auf.
  if (!bereit) {
    return <div className={className} aria-hidden="true" />;
  }

  if (darfLaden(id)) {
    return <>{children}</>;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 border border-dashed border-border bg-secondary/20 p-8 text-center ${className}`}
    >
      <Lock className="size-6 text-foreground-muted" strokeWidth={1.5} aria-hidden="true" />
      <div className="max-w-[56ch]">
        <p className="font-heading text-lg text-primary">{dienst.titel}</p>
        <p className="mt-2 text-left! text-sm text-foreground-muted sm:text-center!">
          {dienst.zweck} Zum Anzeigen wird eine Verbindung zu {dienst.anbieter} (
          {dienst.sitz}) aufgebaut. Dabei wird Ihre IP-Adresse übermittelt
          {dienst.setztCookies ? " und der Anbieter setzt eigene Cookies" : ""}.
        </p>
        <p className="mt-2 text-left! text-xs text-foreground-muted sm:text-center!">
          {dienst.drittdienste}
        </p>
      </div>
      <div className="mt-1 flex flex-col items-center gap-3 sm:flex-row">
        <Button variant="primary" size="sm" onClick={() => einmaligLaden(id)}>
          Einmalig laden
        </Button>
        <Button variant="secondary" size="sm" onClick={alleAkzeptieren}>
          Externe Inhalte immer erlauben
        </Button>
      </div>
      <a
        href={dienst.datenschutz}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-foreground-muted underline underline-offset-2 hover:text-primary"
      >
        Datenschutzerklärung von {dienst.anbieter}
      </a>
    </div>
  );
}
