"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthButton } from "./auth-button";
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from "./auth-schemas";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";

export function ForgotPasswordForm() {
  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<ForgotPasswordValues>({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    resolver: zodResolver(forgotPasswordSchema),
  });
  const [successMessage, setSuccessMessage] = useState("");

  async function onSubmit() {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    setSuccessMessage("Reset link sent. Check your inbox.");
  }

  return (
    <form className="flex flex-col gap-6" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <AuthInput
            autoComplete="email"
            error={errors.email?.message}
            icon="mail"
            label="Email Address"
            name={field.name}
            onChange={(value) => {
              field.onChange(value);
              setSuccessMessage("");
            }}
            placeholder="operator@chainguard.ai"
            required
            type="email"
            value={field.value}
          />
        )}
      />

      {successMessage ? (
        <p className="text-sm leading-5 text-emerald-300">{successMessage}</p>
      ) : null}

      <div className="mt-2">
        <AuthButton
          className="rounded-md py-2.5 font-bold hover:bg-emerald-300"
          disabled={!isValid}
          isLoading={isSubmitting}
          loadingLabel="Sending link..."
          type="submit"
        >
          Send Reset Link
          <AuthIcon className="size-[18px]" name="arrow-right" />
        </AuthButton>
      </div>
    </form>
  );
}
