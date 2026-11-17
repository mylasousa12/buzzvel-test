import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

const avatars = ["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png"];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Image key={i} src="/icons/star.svg" alt="" width={14} height={14} />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-cream py-[60px] xl:py-[100px]">
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-[60px]">
        {/* Visual: first on mobile, last on desktop */}
        <div className="relative order-first mx-auto h-[380px] w-full max-w-[420px] xl:order-last xl:mx-0 xl:h-[520px] xl:max-w-none xl:w-[500px] xl:shrink-0">
          <div
            aria-hidden="true"
            className="absolute top-6 left-[100px] h-[342px] w-[272px] rounded-2xl bg-peach xl:left-[450px] xl:h-[468px] xl:w-[89px]"
          />
          <div
            aria-hidden="true"
            className="absolute top-[304px] -left-2.5 size-16 rounded-full bg-brand-light xl:top-[403px] xl:-left-11 xl:size-[106px]"
          />
          <div className="absolute inset-y-0 right-2 left-2 overflow-hidden rounded-2xl bg-brand-light xl:inset-x-0 xl:rounded-3xl">
            <Image
              src="/images/hero.png"
              alt="A learner focused on a lesson on their laptop"
              fill
              priority
              sizes="(min-width: 1280px) 500px, (min-width: 420px) 404px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute top-1.5 left-0 flex w-max items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] xl:top-4 xl:-left-[22px]">
            <span className="flex h-8 items-center justify-center rounded-lg bg-brand-light px-1 text-sm leading-6 font-bold text-brand">
              120+
            </span>
            <span className="text-sm leading-6 whitespace-nowrap text-ink">expert-led courses</span>
          </div>

          <div className="absolute top-[296px] left-[164px] flex w-max items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] xl:top-[436px] xl:left-[348px]">
            <Stars />
            <span className="text-sm leading-6 whitespace-nowrap text-ink">4.9 avg rating</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <Eyebrow>Learn at your own pace</Eyebrow>
          <h1
            id="hero-title"
            className="pt-4 font-display text-[40px] leading-[44px] font-extrabold tracking-[-1px] text-ink md:text-[52px] md:leading-[58px] md:tracking-[-1.3px] xl:text-[64px] xl:leading-[70px] xl:tracking-[-1.6px]"
          >
            Build skills that actually move you forward.
          </h1>
          <p className="max-w-[480px] pt-6 text-base leading-[26px] text-muted xl:text-lg xl:leading-7">
            Practical courses taught by people who do the work every day. Learn design, technology, business and
            more — one focused lesson at a time.
          </p>

          <div className="flex flex-col gap-3 pt-8 sm:flex-row">
            <ButtonLink href="#courses">Explore courses</ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>

          <div className="flex items-center justify-center gap-3 pt-8 xl:justify-start">
            <div className="flex" aria-hidden="true">
              {avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className={`size-8 rounded-full border-2 border-cream bg-brand-light object-cover ${i > 0 ? "-ml-2" : ""}`}
                />
              ))}
            </div>
            <p className="text-sm leading-6 text-muted">
              <strong className="font-bold text-ink">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
