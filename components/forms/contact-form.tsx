"use client";

import { AlertTriangle, ArrowRight, Check, Loader2 } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { SelectField, TextAreaField, TextField } from "@/components/ui/field";
import { trackEvent } from "@/lib/analytics/events";
import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  contactSchema,
  flattenContactErrors,
  type ContactFieldErrors,
  type ContactInput,
} from "@/lib/validation/contact";

type Status = "idle" | "submitting" | "success" | "error";

const emptyForm: ContactInput = {
  name: "",
  email: "",
  company: "",
  service: SERVICE_OPTIONS[0],
  budget: BUDGET_OPTIONS[0],
  timeline: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  function update(field: string, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    // Clear a field's error as soon as the visitor starts correcting it.
    if (errors[field as keyof ContactInput]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const fieldErrors = flattenContactErrors(parsed.error);
      setErrors(fieldErrors);
      setStatus("idle");

      // Move focus to the first control that failed.
      const firstField = Object.keys(fieldErrors)[0];
      if (firstField) {
        document.getElementById(firstField)?.focus();
      }
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string; errors?: ContactFieldErrors }
        | null;

      if (!response.ok || !payload?.ok) {
        // Server-side validation failures come back field-keyed.
        if (payload?.errors) setErrors(payload.errors);

        setStatus("error");
        setFormError(
          payload?.message ??
            "We couldn't send your message. Please try again, or email us directly.",
        );
        errorSummaryRef.current?.focus();
        return;
      }

      setStatus("success");
      setValues({ ...emptyForm, service: "", budget: "" });
      trackEvent("contact_form_submitted", {
        service: parsed.data.service,
        budget: parsed.data.budget,
      });
    } catch {
      setStatus("error");
      setFormError(
        "Something went wrong on the way to our server. Please try again, or email us directly.",
      );
      errorSummaryRef.current?.focus();
    }
  }

  if (status === "success") {
    return <SuccessPanel onReset={() => setStatus("idle")} />;
  }

  const isSubmitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {formError ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/[0.06] p-4 text-sm text-red-200"
        >
          <AlertTriangle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          <p>{formError}</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id="name"
          label="Full name"
          autoComplete="name"
          placeholder="Jane Okafor"
          value={values.name}
          error={errors.name}
          disabled={isSubmitting}
          onChange={(event) => update("name", event.target.value)}
        />

        <TextField
          id="email"
          label="Work email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="jane@company.com"
          value={values.email}
          error={errors.email}
          disabled={isSubmitting}
          onChange={(event) => update("email", event.target.value)}
        />
      </div>

      <TextField
        id="company"
        label="Company"
        optional
        autoComplete="organization"
        placeholder="Company name"
        value={values.company}
        error={errors.company}
        disabled={isSubmitting}
        onChange={(event) => update("company", event.target.value)}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          id="service"
          label="Service required"
          placeholder="Select a service"
          options={SERVICE_OPTIONS}
          value={values.service}
          error={errors.service}
          disabled={isSubmitting}
          onChange={(event) => update("service", event.target.value)}
        />

        <SelectField
          id="budget"
          label="Budget range"
          placeholder="Select a range"
          options={BUDGET_OPTIONS}
          value={values.budget}
          error={errors.budget}
          hint="An approximate range is enough — it helps us scope realistically."
          disabled={isSubmitting}
          onChange={(event) => update("budget", event.target.value)}
        />
      </div>

      <SelectField
        id="timeline"
        label="Timeline"
        optional
        placeholder="Select a timeline"
        options={TIMELINE_OPTIONS}
        value={values.timeline}
        error={errors.timeline}
        disabled={isSubmitting}
        onChange={(event) => update("timeline", event.target.value)}
      />

      <TextAreaField
        id="message"
        label="Project details"
        placeholder="What are you trying to achieve? What exists today, and what's getting in the way?"
        value={values.message}
        error={errors.message}
        hint="The more specific you are, the more useful our first reply will be."
        disabled={isSubmitting}
        onChange={(event) => update("message", event.target.value)}
      />

      {/* Honeypot — hidden from users and from assistive technology. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2
                size={17}
                aria-hidden="true"
                className="animate-spin"
              />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
              />
            </>
          )}
        </Button>

        <p className="text-xs leading-relaxed text-fg-faint sm:max-w-xs sm:text-right">
          We use your details only to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <div
      role="status"
      className="rounded-xl border border-mint-400/25 bg-mint-400/[0.05] p-8 text-center sm:p-10"
    >
      <span className="mx-auto grid size-12 place-items-center rounded-full bg-mint-400/12 text-mint-400 ring-1 ring-inset ring-mint-400/30">
        <Check size={22} strokeWidth={2.2} aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-medium text-fg">Enquiry received</h3>

      <p className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-fg-muted">
        Thanks — we&apos;ve got the details. Someone from the team will reply within
        one business day, usually with a couple of specific questions rather
        than a brochure.
      </p>

      <Button variant="secondary" className="mt-7" onClick={onReset}>
        Send another enquiry
      </Button>
    </div>
  );
}
