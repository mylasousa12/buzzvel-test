import Link from "next/link";
import type { ComponentProps } from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "ghost-light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm leading-6 font-bold whitespace-nowrap motion-safe:transition-colors motion-safe:duration-150";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand px-7 py-3.5 text-white hover:bg-[#2446d8]",
  secondary: "border border-line bg-white px-7 py-3.5 text-ink hover:border-brand hover:text-brand",
  accent: "bg-sun px-7 py-3.5 text-ink hover:bg-[#ffe85c]",
  "ghost-light": "px-4 py-3.5 text-night-soft hover:text-white",
  ghost: "px-4 py-2.5 text-muted hover:text-ink",
};

/** Class names shared by links and native buttons that look like buttons. */
export function buttonClasses(variant: ButtonVariant = "primary", fullWidth = false) {
  return `${base} ${variants[variant]} ${fullWidth ? "w-full" : ""}`;
}

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
}

export function ButtonLink({ variant = "primary", fullWidth, className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonClasses(variant, fullWidth)} ${className}`} {...props} />;
}
