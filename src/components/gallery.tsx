"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlaceholderMedia } from "@/components/placeholder-media";
import { ImageIcon } from "lucide-react";

interface GalleryImage {
  id: string;
  alt: string;
  src: string | null;
  className: string;
}

const IMAGES: GalleryImage[] = [
  { id: "referenz", alt: "Referenzansicht Abendstimmung", src: "/images/hero-platzhalter.jpg", className: "md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { id: "aussen-b", alt: "Aussenansicht Haus B", src: null, className: "md:col-span-2 aspect-[4/3]" },
  { id: "interieur", alt: "Eichenparkett, Wohnbereich", src: null, className: "md:col-span-2 aspect-[4/3]" },
  { id: "aussicht", alt: "Blick Richtung Obersee", src: null, className: "md:col-span-3 aspect-[16/10]" },
  { id: "fassade", alt: "Fassadendetail, Grobputz", src: null, className: "md:col-span-3 aspect-[16/10]" },
];

export function Gallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {IMAGES.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActive(image)}
            className={`group relative overflow-hidden rounded-[var(--radius-base)] text-left focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] ${image.className}`}
          >
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <PlaceholderMedia label="Platzhalter" className="h-full w-full" aspect="" />
            )}
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active?.src ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-base)]">
              <Image src={active.src} alt={active.alt} fill className="object-cover" />
            </div>
          ) : (
            active && (
              <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-base)] bg-surface">
                <ImageIcon className="size-8 text-foreground-muted" strokeWidth={1.25} />
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground-muted">
                  Platzhalter
                </p>
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
