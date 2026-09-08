"use client";

import Image from "next/image";
import { MapPin, Play, ShieldCheck } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
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

/** Symbol pro Dienst — sagt auf einen Blick, was der Klick auslöst. */
const SYMBOLE: Partial<
  Record<EmbedId, ComponentType<{ className?: string; strokeWidth?: number }>>
> = {
  rundgang: Play,
  karte: MapPin,
};

/**
 * Sperrt ein einwilligungspflichtiges Embed, bis es freigegeben wird.
 *
 * Entscheidend: children wird nicht bloss ausgeblendet, sondern gar nicht erst
 * gerendert. Ein per CSS verstecktes iframe würde trotzdem laden und damit
 * genau die Datenübermittlung auslösen, die verhindert werden soll.
 *
 * Die Schranke zeigt bewusst ein echtes Vorschaubild und benennt die Aktion
 * ("360°-Rundgang starten") statt der Mechanik ("Einmalig laden"). Eine leere
 * Box mit technischem Button klickt nur an, wer ohnehin weiss, was dahinter
 * liegt — wer den Rundgang sucht, hielte ihn für nicht vorhanden.
 */
export function ConsentEmbed({ id, children, className = "" }: ConsentEmbedProps) {
  const { bereit, darfLaden, einmaligLaden, alleAkzeptieren } = useConsent();
  const dienst = EMBEDS[id];

  // Nicht einwilligungspflichtig: sofort rendern, ohne auf das Auslesen des
  // Speichers zu warten. Sonst bliebe die Fläche bis zum ersten Client-Frame leer.
  if (!dienst.einwilligungspflichtig) {
    return <>{children}</>;
  }

  // Vor dem Auslesen des Speichers nichts anzeigen — sonst blitzt der
  // Platzhalter bei bereits erteilter Einwilligung kurz auf.
  if (!bereit) {
    return <div className={className} aria-hidden="true" />;
  }

  if (darfLaden(id)) {
    return <>{children}</>;
  }

  const Symbol = SYMBOLE[id] ?? ShieldCheck;

  return (
    <div
      className={`relative overflow-hidden border border-border bg-foreground ${className}`}
    >
      {/* Das gedimmte Bild liegt normal über der dunklen Fläche — kein negativer
          z-index: In Kombination mit opacity komponiert Chrome die Ebene dann
          gegen den Seitenhintergrund statt gegen diese Box, und das Bild bleibt
          hell, obwohl die Deckkraft stimmt. Die 25 % sind an der hellsten Vorschau
          gemessen: Weiss muss auch auf dem aufgehellten Interieur lesbar bleiben. */}
      {dienst.vorschau && (
        <Image
          src={dienst.vorschau.src}
          alt={dienst.vorschau.alt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover opacity-25"
        />
      )}

      <div className="relative flex h-full flex-col items-center justify-center px-6 py-10 text-center">
        <div className="max-w-[52ch]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Externer Inhalt
          </p>
          <p className="mt-2 font-heading text-2xl leading-tight text-white md:text-3xl">
            {dienst.titel}
          </p>
          <p className="mt-3 text-center! text-sm leading-relaxed text-white/90">
            Wird von {dienst.anbieter} ({dienst.sitz}) geladen. Dabei erhält der
            Anbieter Ihre IP-Adresse
            {dienst.setztCookies
              ? " und setzt eigene Cookies; ausserdem werden Analyse- und Werbedienste nachgeladen"
              : ""}
            . Deshalb fragen wir vorher.
          </p>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={() => einmaligLaden(id)}
          className="mt-6 bg-surface text-primary hover:opacity-85"
        >
          <Symbol className="size-4" strokeWidth={2} />
          {dienst.aktion ?? "Inhalt laden"}
        </Button>

        <p className="mt-3 text-center! text-xs text-white/80">
          Gilt nur für diesen Inhalt und diesen Besuch.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/90">
          <button
            type="button"
            onClick={alleAkzeptieren}
            className="underline underline-offset-2 hover:text-white"
          >
            Externe Inhalte immer erlauben
          </button>
          <a
            href={dienst.datenschutz}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            Datenschutzerklärung von {dienst.anbieter}
          </a>
        </div>
      </div>
    </div>
  );
}
