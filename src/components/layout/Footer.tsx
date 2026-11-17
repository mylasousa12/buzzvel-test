import Image from "next/image";
import { footerColumns } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-night pt-[60px] pb-5 xl:pt-20 xl:pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-10 xl:px-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-[2fr_1fr_1fr_1fr] xl:gap-x-8">
          <div className="col-span-2 md:col-span-1">
            <Image src="/icons/logo-footer.svg" alt="Luma" width={54} height={17} />
            <p className="pt-3 text-sm leading-6 text-night-muted xl:max-w-[240px]">
              Practical learning for curious people.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs leading-4 font-semibold tracking-[1.44px] text-night-soft uppercase">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-3 pt-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-6 text-night-muted motion-safe:transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-muted pt-6 xl:mt-16">
          <p className="text-center text-[13px] leading-[19.5px] text-white xl:text-left xl:text-night-soft">
            © 2026 Luma Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
