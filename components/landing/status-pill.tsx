import { CheckIcon } from "./icons";

export type FeedbackStatus = "new" | "review" | "planned" | "shipped";

export const statusLabels: Record<FeedbackStatus, string> = {
  new: "Novo",
  review: "Em análise",
  planned: "Planejado",
  shipped: "Entregue",
};

const pillStyles: Record<FeedbackStatus, string> = {
  new: "border-line bg-ink/[0.04] text-muted",
  review: "border-review/25 bg-review/10 text-review",
  planned: "border-planned/25 bg-planned/10 text-planned",
  shipped: "border-transparent bg-accent text-on-accent",
};

/**
 * A triage status, in the system's voice: mono, uppercase, tracked.
 * Green exists here for exactly one reason: it shipped.
 */
export function StatusPill({
  status,
  label = statusLabels[status],
  className = "",
}: {
  status: FeedbackStatus;
  /** Defaults to the canonical (pt-BR) label for the status. */
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-[3px] font-mono text-[11px] font-medium tracking-[0.07em] uppercase ${pillStyles[status]} ${className}`}
    >
      {status === "shipped" ? (
        <CheckIcon className="size-3" />
      ) : (
        <span className="size-1 rounded-full bg-current" />
      )}
      {label}
    </span>
  );
}
