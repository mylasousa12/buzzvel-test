import Image from "next/image";
import { collageColumns } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";

export function People() {
  return (
    <section id="community" aria-labelledby="people-title" className="bg-cream py-[60px] xl:py-[100px]">
      <Container className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-[60px]">
        <div className="flex flex-col items-start gap-6 xl:flex-1 xl:gap-8">
          <div className="flex flex-col gap-2">
            <Eyebrow>The people</Eyebrow>
            <h2
              id="people-title"
              className="font-display text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-5xl xl:leading-[56px] xl:tracking-[-1.2px]"
            >
              Meet international students &amp; teachers
            </h2>
          </div>
          <p className="text-base leading-[26px] text-ink xl:text-lg xl:leading-7 xl:text-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget
            commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
            aenean lorem faucibus integer.
          </p>
          <ButtonLink href="#contact" variant="secondary">
            Explore teachers and students
          </ButtonLink>
        </div>

        <div
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-between xl:mx-0 xl:flex-1 xl:justify-center xl:gap-4"
          role="group"
          aria-label="Portraits of Luma students and teachers"
        >
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light xl:size-[500px]"
          />
          {collageColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`relative flex shrink-0 flex-col gap-2 xl:gap-[12.84px] ${column.className}`}
            >
              {column.images.map((image) => (
                <div
                  key={image.src}
                  className={`relative shrink-0 rounded-[5px] shadow-[0_4px_6px_rgba(0,0,0,0.1),0_0_4px_rgba(0,0,0,0.07)] xl:rounded-[4px] ${image.size}`}
                >
                  <Image
                    src={image.src}
                    alt="Portrait of a Luma community member"
                    fill
                    sizes="(min-width: 1280px) 140px, 94px"
                    className="rounded-[inherit] object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
