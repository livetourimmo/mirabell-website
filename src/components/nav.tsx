"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "/#projekt", label: "Projekt" },
  { href: "/angebot", label: "Angebot" },
  { href: "/lage", label: "Lage" },
  { href: "/#kontakt", label: "Kontakt" },
];

interface NavProps {
  /** true, wenn die Seite mit einem vollflächigen Hero-Bild direkt unter der Nav startet. */
  overPhoto?: boolean;
}

export function Nav({ overPhoto = true }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overPhoto && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open || !overPhoto
          ? "bg-[var(--nav-bg-scrolled)] backdrop-blur-md border-b border-[var(--nav-border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="shell flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <Image
            src="/images/mirabell-logo.jpeg"
            alt="Mirabell"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
            priority
          />
          <span
            className={cn(
              "font-heading text-2xl transition-colors duration-500",
              light ? "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]" : "text-primary"
            )}
          >
            Mirabell
          </span>
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.95rem] font-medium tracking-wide transition-colors duration-500",
                light
                  ? "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] hover:opacity-80"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant={light ? "accent" : "primary"}>
            <Link href="/#kontakt">Wohnung anfragen</Link>
          </Button>
        </nav>

        <button
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn("md:hidden", light ? "text-white" : "text-foreground")}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="shell flex flex-col gap-1 border-t border-[var(--nav-border)] bg-[var(--nav-bg-scrolled)] pb-6 pt-2 backdrop-blur-md md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="primary" className="mt-2 w-full">
            <Link href="/#kontakt" onClick={() => setOpen(false)}>
              Wohnung anfragen
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
