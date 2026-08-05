import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-[var(--color-background)]">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Kontakt</p>
          <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">
            Wir zeigen Ihnen die Wohnungen — persönlich vor Ort.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80} className="flex flex-col gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Bauherrschaft</p>
              <p className="mt-2 font-heading text-xl text-white">Visto Immobilien AG</p>
              <p className="mt-1 text-sm text-white/70">Ottenhofenstrasse 53 &amp; 55, 8730 Uetliburg</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/images/mirabell-logo.jpeg"
                  alt="Portraitplatzhalter Kontaktperson"
                  fill
                  className="object-cover opacity-70"
                />
              </div>
              <div>
                <p className="font-heading text-lg text-white">[Name Kontaktperson]</p>
                <p className="text-sm text-white/70">Verkaufsberatung Mirabell</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-white/85">
              <a href="tel:+41000000000" className="flex items-center gap-3 hover:text-white">
                <Phone className="size-4" strokeWidth={1.5} />
                +41 00 000 00 00
              </a>
              <a href="mailto:verkauf@mirabell-uetliburg.ch" className="flex items-center gap-3 hover:text-white">
                <Mail className="size-4" strokeWidth={1.5} />
                verkauf@mirabell-uetliburg.ch
              </a>
            </div>

            <div className="flex gap-6 border-t border-white/15 pt-8 text-sm text-white/70">
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-background)] p-8 text-foreground md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <p className="mt-20 text-xs text-white/40">© {new Date().getFullYear()} Mirabell, Uetliburg — ein Projekt der Visto Immobilien AG.</p>
      </div>
    </footer>
  );
}
