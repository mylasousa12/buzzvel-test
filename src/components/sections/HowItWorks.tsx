import { steps } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Decorative step icons, drawn with CSS exactly like the Figma shapes. */
const stepIcons = [
  <div key="1" className="relative size-14 rounded-full bg-brand-light">
    <div className="absolute top-2 left-2 size-6 rounded-md bg-brand" />
  </div>,
  <div key="2" className="relative size-14">
    <div className="absolute inset-0 size-14 rotate-12 rounded-lg bg-peach" />
    <div className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
  </div>,
  <div key="3" className="relative size-14 rounded-xl bg-sun-light">
    <div className="absolute top-7 left-2 size-5 rounded-full bg-[#e9d659]" />
  </div>,
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-cream py-[60px] xl:py-[100px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <h2
            id="how-title"
            className="pt-4 font-display text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-5xl xl:leading-[56px] xl:tracking-[-1.2px]"
          >
            Less browsing. More learning.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-[1120px] [--g:2rem] md:mt-14 xl:mt-20 xl:[--g:5rem]">
          {/* Horizontal connector between the three icons (md and up) */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-7 right-[calc((100%-2*var(--g))/3-1.75rem)] hidden h-px bg-line md:block"
          />
          <ol className="relative flex flex-col md:grid md:grid-cols-3 md:gap-[var(--g)]">
            {steps.map((step, index) => (
              <li key={step.number} className="relative pb-12 last:pb-0 md:pb-0">
                {/* Vertical connector (mobile) */}
                {index < steps.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-7 h-[50px] w-px bg-line md:hidden" />
                )}
                <div className="relative" aria-hidden="true">
                  {stepIcons[index]}
                </div>
                <p className="pt-6 text-xs leading-4 font-semibold tracking-[1.44px] text-subtle uppercase">
                  Step {step.number}
                </p>
                <h3 className="pt-2 font-display text-xl leading-7 font-bold text-ink xl:leading-8">{step.title}</h3>
                <p className="pt-3 text-sm leading-6 text-muted xl:text-base xl:leading-7">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
