import Image from "next/image";
import { contactItems } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "./ContactForm";

function ContactCard({ icon, iconSize, label, children }: { icon: string; iconSize: number; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 xl:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-light">
        <Image src={icon} alt="" width={iconSize} height={iconSize} />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 text-sm leading-6 xl:gap-1">
        <span className="text-ink">{label}</span>
        {children}
      </span>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-[60px] xl:py-[100px]">
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col gap-8 xl:w-[480px] xl:gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Contact</Eyebrow>
            <h2
              id="contact-title"
              className="font-display text-[32px] leading-9 font-extrabold tracking-[-0.8px] text-ink xl:text-5xl xl:leading-[56px] xl:tracking-[-1.2px]"
            >
              Get in touch
            </h2>
            <p className="text-sm leading-6 text-muted xl:text-lg xl:leading-7">
              Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team
              or interested in teaching with Luma, we’d love to hear from you.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <ContactCard icon="/icons/mail.svg" iconSize={24} label="Email">
              <a href={`mailto:${contactItems.email}`} className="break-all text-brand underline-offset-2 hover:underline">
                {contactItems.email}
              </a>
            </ContactCard>
            <ContactCard icon="/icons/clock.svg" iconSize={20} label="Response Time">
              <span className="text-subtle">{contactItems.responseTime}</span>
            </ContactCard>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
