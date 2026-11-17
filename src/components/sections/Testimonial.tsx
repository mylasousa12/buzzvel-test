import Image from "next/image";
import { stats, testimonial } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Testimonial() {
  return (
    <section id="testimonial" aria-label="What learners say" className="bg-white py-[60px] xl:py-[100px]">
      <Container className="flex flex-col gap-[60px] xl:flex-row xl:items-center xl:justify-between">
        <figure className="max-w-[600px] xl:flex-1">
          <Image src="/icons/quote.svg" alt="" width={24} height={22} />
          <blockquote className="pt-4 font-display text-xl leading-8 font-semibold text-ink xl:text-[30px] xl:leading-[44px] xl:tracking-[-0.75px]">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="flex items-center gap-4 pt-8">
            <Image
              src="/images/alex-morgan.png"
              alt={`Portrait of ${testimonial.name}`}
              width={48}
              height={48}
              className="size-12 rounded-full bg-brand-light object-cover"
            />
            <span>
              <span className="block text-base leading-7 font-bold text-ink">{testimonial.name}</span>
              <span className="block text-sm leading-6 text-muted">{testimonial.role}</span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4 xl:flex xl:w-[401px] xl:shrink-0 xl:flex-col xl:gap-5 xl:border-l xl:border-line xl:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 pt-1 text-sm leading-6 text-subtle">{stat.label}</dt>
              <dd className="order-1 font-display text-[40px] leading-[44px] font-extrabold tracking-[-1px] text-brand xl:text-[64px] xl:leading-[70px] xl:tracking-[-1.6px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
