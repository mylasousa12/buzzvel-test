import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Tailwind text colour class. Defaults to the brand blue. */
  className?: string;
}

/** Small uppercase label that sits above section headings. */
export function Eyebrow({ children, className = "text-brand" }: EyebrowProps) {
  return <p className={`text-xs leading-4 font-semibold tracking-[1.44px] uppercase ${className}`}>{children}</p>;
}
