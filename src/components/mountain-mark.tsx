import { cn } from "@/lib/utils";

/**
 * Signatur-Icon: reduzierte Bergspitzen — Motiv aus dem Logo, als
 * wiederkehrender Trenner zwischen Seitenabschnitten.
 */
export function MountainMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      className={cn("text-primary", className)}
      aria-hidden="true"
    >
      <path
        d="M5,50 L30,15 L50,38 L70,10 L95,50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("shell flex items-center justify-center py-12 md:py-16", className)}>
      <MountainMark className="h-5 w-auto" />
    </div>
  );
}
