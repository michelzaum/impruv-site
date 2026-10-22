import type { SVGProps } from "react";

/**
 * Hand-drawn icon set: one consistent stroke language
 * (24px grid, 1.75 stroke, round caps) for the whole page.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/** A customer's voice arriving */
export function MessageBubbleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Svg>
  );
}

/** Sorting signal from noise */
export function FunnelIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M10.3 21a1 1 0 0 1-1.7-.6V13l-5-8.4A1 1 0 0 1 4.3 3h15.4a1 1 0 0 1 .8 1.6L14.9 13v5.4a1 1 0 0 1-.6.9l-4 1.7Z" />
    </Svg>
  );
}

/** Feedback becoming improvement: the Impruv arrow */
export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Svg>
  );
}

/** The public feedback page */
export function BrowserIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M3 8.5h18" />
      <path d="M6.2 6.3h.01M8.8 6.3h.01" />
    </Svg>
  );
}

/** One workspace containing projects */
export function OrganizationIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M10 10h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
    </Svg>
  );
}

/** A kanban board per project */
export function BoardIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M9.5 3v18" />
      <path d="M15 3v18" />
    </Svg>
  );
}

/** People, their roles */
export function TeamIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M2.7 19.8c.6-3.3 3.1-5.2 6.3-5.2s5.7 1.9 6.3 5.2" />
      <circle cx="17.2" cy="9.2" r="2.7" />
      <path d="M16.4 14.7c2.7.2 4.5 1.9 5 4.8" />
    </Svg>
  );
}

/** Navigation that adapts to the role */
export function SidebarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M9.5 3v18" />
      <path d="M5.8 7.5h1.8M5.8 10.5h1.8" />
    </Svg>
  );
}

/** The loop, closed */
export function CheckCircleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.4 2.6 2.6 4.8-5.4" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </Svg>
  );
}

export function UpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m6 14 6-6 6 6" />
    </Svg>
  );
}
