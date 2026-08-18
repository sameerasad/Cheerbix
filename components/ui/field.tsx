"use client";

import { AlertCircle, ChevronDown } from "lucide-react";
import type { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

/**
 * Form field primitives.
 *
 * Each control is bound to a real <label>, and errors are wired through
 * aria-invalid + aria-describedby with role="alert", so a screen reader
 * announces the specific problem rather than a generic failure.
 */

const controlBase =
  "w-full rounded-lg border bg-ink-900/70 px-3.5 text-[0.9375rem] text-fg " +
  "placeholder:text-fg-faint/70 transition-[border-color,box-shadow,background-color] duration-200 " +
  "focus:border-brand-500/60 focus:bg-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-500/25 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

function stateClasses(hasError: boolean) {
  return hasError
    ? "border-red-500/50 focus:border-red-500/70 focus:ring-red-500/25"
    : "border-line-strong hover:border-line-strong/80";
}

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
};

export function FieldShell({
  id,
  label,
  error,
  hint,
  optional,
  children,
  className,
}: FieldShellProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="flex items-baseline gap-2 text-sm text-fg">
        {label}
        {optional ? (
          <span className="text-xs text-fg-faint">Optional</span>
        ) : null}
      </label>

      {children}

      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-fg-faint">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-start gap-1.5 text-xs text-red-300"
        >
          <AlertCircle size={13} aria-hidden="true" className="mt-px shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
};

export function TextField({
  id,
  label,
  error,
  hint,
  optional,
  className,
  ...props
}: TextFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      hint={hint}
      optional={optional}
      className={className}
    >
      <input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlBase, stateClasses(Boolean(error)), "h-11")}
        {...props}
      />
    </FieldShell>
  );
}

type SelectFieldProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "id" | "children"
> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  placeholder: string;
  options: readonly string[];
  className?: string;
};

export function SelectField({
  id,
  label,
  error,
  hint,
  optional,
  placeholder,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      hint={hint}
      optional={optional}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          name={id}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          className={cn(
            controlBase,
            stateClasses(Boolean(error)),
            "h-11 appearance-none pr-10",
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-fg-faint"
        />
      </div>
    </FieldShell>
  );
}

type TextAreaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "id"
> & {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
};

export function TextAreaField({
  id,
  label,
  error,
  hint,
  optional,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <FieldShell
      id={id}
      label={label}
      error={error}
      hint={hint}
      optional={optional}
      className={className}
    >
      <textarea
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(
          controlBase,
          stateClasses(Boolean(error)),
          "min-h-36 resize-y py-3 leading-relaxed",
        )}
        {...props}
      />
    </FieldShell>
  );
}
