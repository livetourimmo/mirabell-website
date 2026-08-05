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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MOCK_UNITS } from "@/lib/mock-data";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — für Menschen unsichtbares Feld, Bots füllen es meist aus.
    if (String(data.get("website") ?? "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!privacyChecked) {
      setPrivacyError(true);
      return;
    }

    setStatus("loading");
    try {
      // TODO: Anbindung an Supabase (Tabelle `contact_requests`), sobald Zugangsdaten vorliegen.
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      toast.success("Nachricht gesendet", {
        description: "Wir melden uns in Kürze bei Ihnen zurück.",
      });
      form.reset();
      setPrivacyChecked(false);
    } catch {
      setStatus("error");
      toast.error("Etwas ist schiefgelaufen", {
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="interesse">Interesse an</Label>
          <Select name="interesse">
            <SelectTrigger id="interesse" className="w-full">
              <SelectValue placeholder="Wohnung auswählen (optional)" />
            </SelectTrigger>
            <SelectContent>
              {MOCK_UNITS.map((unit) => (
                <SelectItem key={unit.id} value={unit.id}>
                  {unit.bezeichnung}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Nachricht *</Label>
        <Textarea id="message" name="message" required rows={5} />
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
        <Label htmlFor="privacy" className="text-sm font-normal leading-snug text-foreground-muted">
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-primary">
            Datenschutzerklärung
          </Link>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
        </Label>
      </div>
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
