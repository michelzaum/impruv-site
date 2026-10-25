import Image from "next/image";
import logo from "../../app/logo.svg";

/**
 * The Impruv logo. The full wordmark lives in app/logo.svg —
 * no extra text is needed next to it.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Impruv"
      priority
      className={`h-8 w-auto ${className}`}
    />
  );
}
