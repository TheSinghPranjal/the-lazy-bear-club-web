import { cn } from "@/lib/utils";
import { STATUS_LABEL, type AppStatus } from "@/lib/apps";

const styles: Record<AppStatus, string> = {
  live: "bg-brand-green/10 text-brand-green",
  coming_soon: "bg-brand-gold/25 text-brand-accent",
  in_review: "bg-brand-gold/25 text-brand-accent",
  draft: "bg-brand-muted/15 text-brand-muted",
  archived: "bg-brand-muted/10 text-brand-muted",
};

export function StatusBadge({ status }: { status: AppStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        styles[status],
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
