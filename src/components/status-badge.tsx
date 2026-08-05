import { cn } from "@/lib/utils";
import { STATUS_LABEL } from "@/lib/mock-data";
import { UnitStatus } from "@/lib/types";

const STYLES: Record<UnitStatus, string> = {
  verfuegbar: "bg-[var(--status-verfuegbar-bg)] text-[var(--status-verfuegbar-fg)]",
  reserviert: "bg-[var(--status-reserviert-bg)] text-[var(--status-reserviert-fg)]",
  verkauft: "bg-[var(--status-verkauft-bg)] text-[var(--status-verkauft-fg)]",
};

export function StatusBadge({ status }: { status: UnitStatus }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-[var(--badge-radius)] px-3 py-1 text-xs font-semibold tracking-wide",
        STYLES[status]
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
