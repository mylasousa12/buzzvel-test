import Image from "next/image";
import { categories } from "@/data/content";
import type { Category } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={category.href}
      className="group flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-line bg-white p-6 motion-safe:transition-[border-color,box-shadow] hover:border-brand hover:shadow-[0_12px_16px_rgba(23,27,44,0.06)] xl:min-h-[260px] xl:p-7"
    >
      <div>
        <span className="mt-0.5 inline-flex rounded-md bg-brand-light px-2 py-1 text-xs leading-4 font-semibold tracking-[1.44px] text-brand uppercase">
          {category.number}
        </span>
        <h3 className="pt-4 font-display text-xl leading-7 font-bold text-ink xl:leading-8">{category.title}</h3>
        <p className="pt-3 text-sm leading-6 text-subtle">{category.description}</p>
      </div>
      <span className="flex items-center gap-2 pt-6 text-sm leading-6 font-bold text-ink">
        Explore
        <Image
          src="/icons/arrow.svg"
          alt=""
          width={20}
          height={20}
          className="motion-safe:transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}

export function Categories() {
  return (
    <section id="courses" aria-labelledby="categories-title" className="bg-white py-[60px] xl:py-[100px]">
      <Container className="flex flex-col gap-10">
        <div className="max-w-[560px]">
          <Eyebrow>Find your next skill</Eyebrow>
          <h2
            id="categories-title"
            className="pt-4 font-display text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-5xl xl:leading-[56px] xl:tracking-[-1.2px]"
          >
            Learn something worth knowing.
          </h2>
          <p className="pt-4 text-base leading-[26px] text-muted xl:text-lg xl:leading-7">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
