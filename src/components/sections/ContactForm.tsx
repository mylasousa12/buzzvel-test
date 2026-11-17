"use client";

import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { buttonClasses } from "@/components/ui/Button";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please tell us a bit more (at least 10 characters).";
  return errors;
}

const inputClasses =
  "w-full rounded-lg border bg-cream px-4 py-3 text-sm leading-6 text-ink placeholder:text-subtle motion-safe:transition-colors focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30";

export function ContactForm() {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const fieldId = (field: Field) => `${id}-${field}`;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus("idle");

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus();
      return;
    }

    // Mock submission: there is no backend in this challenge.
    setStatus("sending");
    window.setTimeout(() => {
      formRef.current?.reset();
      setStatus("sent");
    }, 700);
  }

  function renderField(field: Field, label: string, props: { type?: string; placeholder: string; autoComplete?: string }) {
    const error = errors[field];
    const errorId = `${fieldId(field)}-error`;
    const shared = {
      id: fieldId(field),
      name: field,
      placeholder: props.placeholder,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId : undefined,
      "aria-required": true,
      className: `${inputClasses} ${error ? "border-red-600" : "border-line"}`,
    } as const;

    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={fieldId(field)} className="text-sm leading-6 font-bold text-ink">
          {label}
        </label>
        {field === "message" ? (
          <textarea {...shared} rows={4} className={`${shared.className} min-h-[100px] resize-y xl:min-h-[120px]`} />
        ) : (
          <input {...shared} type={props.type ?? "text"} autoComplete={props.autoComplete} />
        )}
        {error && (
          <p id={errorId} className="text-sm leading-5 text-red-700">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-labelledby={`${id}-title`}
      className="flex flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-[0_12px_16px_rgba(23,27,44,0.04)] xl:w-[540px] xl:shrink-0 xl:p-10"
    >
      <div className="flex flex-col gap-2">
        <h3 id={`${id}-title`} className="font-display text-xl leading-8 font-bold text-ink">
          Contact us
        </h3>
        <p className="text-sm leading-6 text-muted">Fill out the fields and we will get in touch.</p>
      </div>

      <div className="flex flex-col gap-5">
        {renderField("name", "Full name", { placeholder: "Your name", autoComplete: "name" })}
        {renderField("email", "Email", { type: "email", placeholder: "youremail@example.com", autoComplete: "email" })}
        {renderField("message", "Your question", { placeholder: "Tell us how we can help..." })}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${buttonClasses("primary", true)} disabled:cursor-not-allowed disabled:opacity-70`}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p role="status" aria-live="polite" className={status === "sent" ? "text-sm leading-6 font-bold text-green-700" : "sr-only"}>
        {status === "sent" ? "Thanks! Your message was sent. We will reply within 24 hours on business days." : ""}
      </p>
    </form>
  );
}
