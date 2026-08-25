import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ConsentEinstellungenLink } from "@/components/consent/consent-settings-link";
import { VERANTWORTLICHE } from "@/lib/legal";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-[var(--color-background)]">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <Eyebrow tone="inverted">Kontakt</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl text-white md:text-4xl">
            Wir beraten Sie gerne persönlich zu Ihrer neuen Wohnung.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={80} className="flex h-full flex-col gap-8">
            <div className="flex flex-1 flex-col justify-center rounded-[var(--radius-lg)] border border-white/15 bg-white/5 p-6 sm:p-7">
              <p className="font-heading text-lg italic text-white/55">Verkauf &amp; Beratung</p>

              {/* Auf schmalen Screens untereinander: nebeneinander blieben dem
                  Text neben dem Logo nur rund 120 px, was die Adresse in
                  zerrissene Zeilen zwang. */}
              <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 min-[420px]:flex-row min-[420px]:items-center">
                <div className="w-fit shrink-0 rounded-[var(--radius-base)] bg-white/90 px-3 py-2">
                  <Image
                    src="/images/Keller_ImmoVermarktung_Logo_RGB-01-Reg.png"
                    alt="Keller ImmoVermarktung GmbH"
                    width={200}
                    height={80}
                    className="h-12 w-auto"
                  />
                </div>
                {/* text-left! gegen den globalen Blocksatz — in dieser schmalen
                    Spalte riss justify die Adresse sonst auseinander. */}
                <div>
                  <p className="font-heading text-lg text-white">Carine Keller</p>
                  <p className="text-left! text-sm text-white/70">Keller ImmoVermarktung GmbH</p>
                  <p className="text-left! text-sm text-white/70">Lindenstrasse 35, 8738 Uetliburg</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/85">
                <a href="tel:+41581012230" className="flex items-center gap-3 hover:text-white">
                  <Phone className="size-4" strokeWidth={1.5} />
                  058 101 22 30
                </a>
                <a href="mailto:info@keller-immovermarktung.ch" className="flex items-center gap-3 hover:text-white">
                  <Mail className="size-4" strokeWidth={1.5} />
                  info@keller-immovermarktung.ch
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
              <ConsentEinstellungenLink className="no-underline hover:text-white!" />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-background)] p-6 text-foreground sm:p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <p className="mt-16 border-t border-white/10 pt-10 text-xs text-white/40">© {VERANTWORTLICHE.name}</p>
      </div>
    </footer>
  );
}
