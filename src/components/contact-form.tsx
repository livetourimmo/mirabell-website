"use client";

import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UNIT_OPTIONS, unitOptionValue } from "@/lib/unit-options";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

/**
 * Pflichtfelder in der Reihenfolge, in der sie im Formular stehen — daraus
 * ergibt sich, welches Feld bei einer unvollständigen Eingabe den Fokus bekommt.
 * Das Formular trägt bewusst `noValidate` (die nativen Browser-Blasen passen
 * nicht zum Erscheinungsbild), deshalb prüfen wir hier selbst. Die API prüft
 * dieselben Felder ein zweites Mal.
 */
const PFLICHTFELDER = [
  { name: "vorname", label: "Vorname" },
  { name: "nachname", label: "Name" },
  { name: "email", label: "E-Mail" },
  { name: "strasse", label: "Strasse" },
  { name: "plz", label: "PLZ" },
  { name: "ort", label: "Ort" },
  { name: "message", label: "Nachricht" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [fehlendeFelder, setFehlendeFelder] = useState<string[]>([]);
  const fehlt = (name: string) => fehlendeFelder.includes(name);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Den Honeypot wertet ausschliesslich die API aus. Früher brach das Formular
    // hier still ab — bei einem Fehlalarm (Passwortmanager füllt das versteckte
    // Feld aus) verschwand die Anfrage dadurch spurlos, ohne jede Rückmeldung.
    const fehlend = PFLICHTFELDER.filter(
      (feld) => !String(data.get(feld.name) ?? "").trim()
    );
    setFehlendeFelder(fehlend.map((feld) => feld.name));
    if (!privacyChecked) setPrivacyError(true);
    if (fehlend.length > 0) {
      form.querySelector<HTMLElement>(`[name="${fehlend[0].name}"]`)?.focus();
      return;
    }
    if (!privacyChecked) {
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Der Versand ist fehlgeschlagen.");
      }

      setStatus("success");
      toast.success("Nachricht gesendet", {
        description: "Wir melden uns in Kürze bei Ihnen zurück.",
      });
      form.reset();
      setPrivacyChecked(false);
      setFehlendeFelder([]);
    } catch {
      setStatus("error");
      toast.error("Etwas ist schiefgelaufen", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/*
        Honeypot — für Menschen unsichtbar, Bots füllen es meist aus.
        Der Feldname darf nach nichts Bekanntem klingen: hiess das Feld "website",
        trugen Passwortmanager dort eine URL ein und die Anfrage galt als Bot.
        Die data-*-Attribute halten 1Password, LastPass, Bitwarden und Dashlane fern.
      */}
      <input
        type="text"
        name="kontakt_ref"
        tabIndex={-1}
        autoComplete="off"
        data-1p-ignore
        data-lpignore="true"
        data-bwignore
        data-form-type="other"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {/* Vor- und Nachname bewusst in zwei Feldern: so lassen sich die
          Kontaktangaben ohne Nachbearbeitung ins CRM übernehmen. */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="vorname">Vorname *</Label>
          <Input id="vorname" name="vorname" required aria-invalid={fehlt("vorname")} autoComplete="given-name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nachname">Name *</Label>
          <Input id="nachname" name="nachname" required aria-invalid={fehlt("nachname")} autoComplete="family-name" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input id="email" name="email" type="email" required aria-invalid={fehlt("email")} autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      {/* Adresse: Strasse nimmt auf jeder Breite die volle Zeile, PLZ und Ort
          teilen sich darunter die Reihe. Alle drei sind Pflicht — wie bei
          Homegate, damit jede Anfrage eine vollständige Postadresse mitbringt. */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        <div className="col-span-2 flex flex-col gap-2">
          <Label htmlFor="strasse">Strasse *</Label>
          <Input id="strasse" name="strasse" required aria-invalid={fehlt("strasse")} autoComplete="street-address" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="plz">PLZ *</Label>
          <Input id="plz" name="plz" required aria-invalid={fehlt("plz")} inputMode="numeric" autoComplete="postal-code" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ort">Ort *</Label>
          <Input id="ort" name="ort" required aria-invalid={fehlt("ort")} autoComplete="address-level2" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="interesse">Interesse an</Label>
        <Select name="interesse">
          <SelectTrigger id="interesse" className="w-full">
            <SelectValue placeholder="Wohnung auswählen (optional)" />
          </SelectTrigger>
          <SelectContent>
            {UNIT_OPTIONS.map((gruppe) => (
              <SelectGroup key={gruppe.haus}>
                <SelectLabel>{gruppe.haus}</SelectLabel>
                {gruppe.wohnungen.map((wohnung) => (
                  <SelectItem key={wohnung} value={unitOptionValue(gruppe.haus, wohnung)}>
                    Wohnung {wohnung}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea id="message" name="message" required aria-invalid={fehlt("message")} rows={5} />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="privacy"
          checked={privacyChecked}
          onCheckedChange={(checked) => {
            setPrivacyChecked(checked === true);
            if (checked) setPrivacyError(false);
          }}
          aria-invalid={privacyError}
        />
        {/* block statt des Label-Defaults flex: sonst werden die Textknoten und
            der Link zu einzelnen Flex-Elementen und der Satz bricht auf dem
            Handy in schmale Spalten auseinander. */}
        <Label htmlFor="privacy" className="block text-sm font-normal leading-snug text-foreground-muted">
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-primary">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
        </Label>
      </div>
      {fehlendeFelder.length > 0 && (
        <p role="alert" className="text-sm text-destructive">
          Bitte füllen Sie alle Pflichtfelder aus:{" "}
          {PFLICHTFELDER.filter((feld) => fehlt(feld.name))
            .map((feld) => feld.label)
            .join(", ")}
          .
        </p>
      )}
      {privacyError && (
        <p role="alert" className="text-sm text-destructive">
          Bitte bestätigen Sie die Datenschutzerklärung, um fortzufahren.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="mt-2 w-fit">
        {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
      </Button>
    </form>
  );
}
