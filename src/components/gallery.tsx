"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  alt: string;
  src: string;
  className: string;
}

const IMAGES: GalleryImage[] = [
  { id: "referenz", alt: "Referenzansicht Abendstimmung", src: "/images/hero-platzhalter.jpg", className: "md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { id: "interieur", alt: "Offener Wohn- und Kochbereich mit Seesicht", src: "/images/v1_Innen1.jpg", className: "md:col-span-2 aspect-[4/3]" },
  { id: "aussenansicht", alt: "Architektur-Visualisierung Mirabell, Aussenansicht Haus A und Haus B", src: "/images/aussen1-v7.png", className: "md:col-span-2 aspect-[4/3]" },
  { id: "wohnen-dining", alt: "Wohn- und Essbereich mit Zugang zur Terrasse", src: "/images/v1_Innen2.jpg", className: "md:col-span-2 aspect-[4/3]" },
  { id: "wohnen-kueche", alt: "Wohnbereich mit offener Küche und Balkonzugang", src: "/images/v1_Innen3.jpg", className: "md:col-span-2 aspect-[4/3]" },
  { id: "terrasse", alt: "Sitzplatz auf der Terrasse mit Blick in den Wohnbereich", src: "/images/v1_Innen6.jpg", className: "md:col-span-2 aspect-[4/3]" },
  { id: "schlafzimmer", alt: "Schlafzimmer mit direktem Zugang zum Bad", src: "/images/v4_Innen4.jpg", className: "md:col-span-6 aspect-[21/9]" },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;

  const showNext = () => setActiveIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
  const showPrev = () => setActiveIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const active = activeIndex !== null ? IMAGES[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {IMAGES.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[var(--radius-base)] text-left focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(next) => !next && setActiveIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-5xl border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-5xl"
        >
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-base)] bg-black">
              <button
                type="button"
                onClick={showNext}
                aria-label="Nächstes Bild"
                className="absolute inset-0 z-10 cursor-pointer"
              />
              <Image
                key={active.id}
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
                aria-label="Schliessen"
                className="absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                ✕
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Vorheriges Bild"
                className="absolute top-1/2 left-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft className="size-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Nächstes Bild"
                className="absolute top-1/2 right-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight className="size-5" strokeWidth={1.5} />
              </button>

              <p className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.1em] text-white/80">
                {activeIndex !== null ? activeIndex + 1 : 0} / {IMAGES.length}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
