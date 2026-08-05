import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-[var(--color-background)]">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <Eyebrow tone="inverted">Kontakt</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">
            Wir zeigen Ihnen die Wohnungen — persönlich vor Ort.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80} className="flex h-full flex-col gap-8">
            <div className="flex flex-1 flex-col justify-center rounded-[var(--radius-lg)] border border-white/15 bg-white/5 p-7">
              <p className="font-heading text-lg italic text-white/55">[Platzhalter: Verkauf]</p>

              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-14 w-24 shrink-0 items-center justify-center rounded-[var(--radius-base)] border border-dashed border-white/25">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40">Logo</span>
                </div>
                <div>
                  <p className="font-heading text-lg text-white">[Name Kontaktperson]</p>
                  <p className="text-sm text-white/70">Verkaufsberatung Mirabell</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/85">
                <a href="tel:+41000000000" className="flex items-center gap-3 hover:text-white">
                  <Phone className="size-4" strokeWidth={1.5} />
                  +41 00 000 00 00
                </a>
                <a href="mailto:verkauf@mirabell-uetliburg.ch" className="flex items-center gap-3 hover:text-white">
                  <Mail className="size-4" strokeWidth={1.5} />
                  verkauf@mirabell-uetliburg.ch
                </a>
              </div>
            </div>

            <div className="flex gap-6 text-sm text-white/70">
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

        <p className="mt-20 text-xs text-white/40">© {new Date().getFullYear()} Mirabell, Uetliburg.</p>
      </div>
    </footer>
  );
}
