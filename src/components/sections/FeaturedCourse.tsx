import Image from "next/image";
import { featuredCourse } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export function FeaturedCourse() {
  return (
    <section
      id="featured-course"
      aria-labelledby="featured-title"
      className="on-brand bg-brand py-[60px] xl:py-[100px]"
    >
      <Container className="grid items-center gap-10 xl:grid-cols-2 xl:gap-[60px]">
        <div className="relative">
          <div className="relative h-[280px] overflow-hidden rounded-2xl xl:h-[408px]">
            <Image
              src="/images/featured-course.png"
              alt="A student working on interface designs for the product design course"
              fill
              sizes="(min-width: 1280px) 538px, (min-width: 768px) 688px, 100vw"
              className="object-cover"
            />
          </div>
          <span className="absolute -top-3 -left-3 rounded-md bg-sun px-3 py-1.5 text-xs leading-4 font-semibold tracking-[1.44px] text-ink uppercase">
            Featured Course
          </span>
        </div>

        <div className="flex flex-col">
          <Eyebrow className="text-white">{featuredCourse.eyebrow}</Eyebrow>
          <h2
            id="featured-title"
            className="max-w-[536px] pt-4 font-display text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-white xl:text-5xl xl:leading-[56px] xl:tracking-[-1.2px]"
          >
            {featuredCourse.title}
          </h2>
          <p className="max-w-[536px] pt-5 text-sm leading-6 text-white xl:text-base xl:leading-7">
            {featuredCourse.description}
          </p>
          <p className="pt-6 text-sm leading-6 text-white xl:text-base xl:leading-7">{featuredCourse.instructor}</p>

          <ul className="flex flex-wrap gap-3 pt-6">
            {featuredCourse.meta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line px-3.5 py-1.5 text-sm leading-6 text-night-soft xl:text-white"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-start">
            <ButtonLink href="#contact" variant="accent">
              View course
            </ButtonLink>
            <ButtonLink href="#courses" variant="ghost-light">
              Browse all courses
              <Image src="/icons/arrow-light.svg" alt="" width={20} height={20} />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
