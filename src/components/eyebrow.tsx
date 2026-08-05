import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "inverted";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-heading text-base italic",
        tone === "default" ? "text-primary" : "text-white/90",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
      {children}
    </p>
  );
}
