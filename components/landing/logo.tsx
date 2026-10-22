/**
 * The Impruv wordmark. The accent-green "u" is deliberate:
 * improve + you, the customer whose voice starts the loop.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-accent text-on-accent">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="size-[18px]"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          <path d="M9.4 13 14 8.4" />
          <path d="M10.6 8.4H14v3.4" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        Impr<span className="text-accent">u</span>v
      </span>
    </span>
  );
}
