"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { navItems } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu with Escape and give focus back to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // The desktop navigation takes over from the lg breakpoint: reset the menu.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="relative border-b border-line bg-cream">
      <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 md:px-10 lg:h-[70px] xl:px-20">
        <Link href="/" aria-label="Luma, home" className="shrink-0 rounded-sm">
          <Image src="/icons/logo.svg" alt="" width={54} height={17} priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm leading-6 text-muted motion-safe:transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="#contact" variant="ghost">
            Log in
          </ButtonLink>
          <ButtonLink href="#courses" variant="primary" className="px-5! py-2.5!">
            Start learning
          </ButtonLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-1.5 rounded-md p-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="#171b2c" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <Image src="/icons/menu.svg" alt="" width={24} height={24} />
          )}
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-b border-line bg-cream shadow-[0_12px_16px_rgba(23,27,44,0.06)] lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1280px] px-5 pt-2 pb-6 md:px-10">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block border-b border-line py-3.5 text-base leading-6 text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <ButtonLink href="#contact" variant="secondary" fullWidth onClick={close}>
              Log in
            </ButtonLink>
            <ButtonLink href="#courses" variant="primary" fullWidth onClick={close}>
              Start learning
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
