import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PlaceholderMediaProps {
  label: string;
  className?: string;
  aspect?: string;
}

/**
 * Sichtbarer Platzhalter für Assets, die noch nicht geliefert wurden
 * (Visualisierungen, Lageplan, Grundrisse etc.) — bewusst zurückhaltend,
 * kein defektes Bild-Icon-Chaos.
 */
export function PlaceholderMedia({ label, className, aspect = "aspect-[4/3]" }: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        aspect,
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-base)] border border-dashed border-border bg-[color-mix(in_srgb,var(--color-secondary)_18%,var(--color-background))] text-center",
        className
      )}
    >
      <ImageIcon className="size-6 text-foreground-muted" strokeWidth={1.25} />
      <span className="max-w-[70%] text-xs font-semibold tracking-[0.08em] text-foreground-muted uppercase">
        {label}
      </span>
    </div>
  );
}
