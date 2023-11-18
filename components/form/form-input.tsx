"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib";
import { useFormStatus } from "react-dom";
import { Input, Label } from "@/components/ui";
import FormErrors from "./form-errors";

type FormInputProps = {
  id?: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]> | undefined;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue,
      onBlur,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700 "
            >
              {label}
            </Label>
          ) : null}
          <Input
            defaultValue={defaultValue}
            onBlur={onBlur}
            ref={ref}
            required={required}
            name={id}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={disabled || pending}
            className={cn("text-sm h-7 px-2 py-1", className)}
            aria-aria-describedby={`${id}-error`}
          />
        </div>
        <FormErrors id={id} errors={errors} />
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
