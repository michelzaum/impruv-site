import type { ReactNode } from "react";
import { isExternal, NEW_TAB_PROPS } from "./links";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const variants = {
  // Ink by default; the accent is reserved for what it means.
  // Hovering a primary button is the pitch in miniature:
  // feedback (ink) becomes improvement (green).
  primary: "bg-ink text-paper hover:bg-accent hover:text-on-accent",
  secondary: "border border-line-strong text-ink hover:bg-ink/[0.04]",
} as const;

const sizes = {
  sm: "h-9 gap-1.5 rounded-full px-4 text-sm",
  md: "h-11 gap-2 rounded-full px-6 text-[15px]",
  lg: "h-12 gap-2 rounded-full px-7 text-base",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(isExternal(href) ? NEW_TAB_PROPS : {})}
      className={`inline-flex items-center justify-center font-medium whitespace-nowrap transition duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
