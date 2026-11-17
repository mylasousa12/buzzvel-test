import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const avatars = ["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png", "/images/avatar-4.png"];

/** Decorative shapes, positioned on the 1280px desktop frame. Hidden below xl, as in the mobile design. */
const shapes = [
  "left-[22px] top-4 size-[108px] rounded-full border-2 border-peach",
  "left-14 top-[373px] size-[120px] rounded-full bg-peach",
  "left-[1064px] top-[468px] size-10 rounded-full bg-peach",
  "left-[1144px] top-[-24px] size-[115px] rotate-12 rounded-lg bg-peach",
  "left-[-33px] top-[230px] size-14 rotate-12 rounded-lg bg-peach",
  "left-[1208px] top-[429px] size-8 rounded-full border-2 border-peach",
  "left-[877px] top-[43px] size-8 rounded-full border-2 border-peach",
  "left-[317px] top-[42px] size-14 rotate-12 rounded-lg border border-peach",
];

const icons = [
  { src: "/icons/deco-1.svg", className: "left-[281px] top-[369px] size-[82px] rotate-[15deg]" },
  { src: "/icons/deco-2.svg", className: "left-[1080px] top-[180px] size-[160px]" },
  { src: "/icons/deco-3.svg", className: "left-[141px] top-[214px] size-8" },
  { src: "/icons/deco-4.svg", className: "left-[1016px] top-[82px] size-[61px]" },
  { src: "/icons/deco-5.svg", className: "left-[963px] top-[381px] size-12" },
];

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-sun-light py-[60px] xl:py-[100px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1280px] -translate-x-1/2 xl:block">
        {shapes.map((className) => (
          <span key={className} className={`absolute ${className}`} />
        ))}
        {icons.map((icon) => (
          <Image key={icon.src} src={icon.src} alt="" width={160} height={160} className={`absolute ${icon.className}`} />
        ))}
      </div>

      <Container className="relative flex max-w-[720px] flex-col items-center text-center">
        <div className="flex justify-center" aria-hidden="true">
          {avatars.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={40}
              height={40}
              className={`size-10 rounded-full border-2 border-sun bg-brand-light object-cover ${i > 0 ? "-ml-2" : ""}`}
            />
          ))}
        </div>
        <h2
          id="cta-title"
          className="pt-8 font-display text-4xl leading-10 font-extrabold tracking-[-0.9px] text-ink xl:text-[56px] xl:leading-16 xl:tracking-[-1.4px]"
        >
          What will you learn next?
        </h2>
        <p className="pt-4 text-base leading-[26px] text-muted xl:text-lg xl:leading-7">
          Start with one course. Build from there.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 pt-10 sm:w-auto sm:flex-row">
          <ButtonLink href="#courses">Explore all courses</ButtonLink>
          <ButtonLink href="#contact" variant="secondary">
            Join Luma
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
