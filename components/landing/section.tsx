import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-20 py-24 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-balance text-ink sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
