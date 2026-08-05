import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Wiederkehrendes Signatur-Element (Mirabelle) neben Sektions-Überschriften —
 * transparent freigestellt, funktioniert auf hellem wie dunklem Hintergrund.
 */
export function MirabelleAccent({ className }: { className?: string }) {
  return (
    <Image
      src="/images/mirabelle-single.png"
      alt=""
      width={540}
      height={480}
      unoptimized
      aria-hidden="true"
      className={cn("hidden h-auto w-20 shrink-0 opacity-50 md:block lg:w-24", className)}
    />
  );
}
