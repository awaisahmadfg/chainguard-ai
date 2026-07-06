"use client";

import { useState } from "react";
import { AuthButton } from "./auth-button";
import { forgotPasswordSchema, getFieldErrors } from "./auth-schemas";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = forgotPasswordSchema.safeParse({ email });

    if (!result.success) {
      const fieldErrors = getFieldErrors(result.error.flatten().fieldErrors);
      setError(fieldErrors.email ?? "");
      return;
    }

    setError("");
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Reset link sent. Check your inbox.");
    }, 600);
  }

  return (
    <form className="flex flex-col gap-6" noValidate onSubmit={handleSubmit}>
      <AuthInput
        autoComplete="email"
        error={error}
        icon="mail"
        label="Email Address"
        name="email"
        onChange={(value) => {
          setEmail(value);
          setError("");
          setSuccessMessage("");
        }}
        placeholder="operator@chainguard.ai"
        required
        type="email"
        value={email}
      />

      {successMessage ? (
        <p className="text-sm leading-5 text-emerald-300">{successMessage}</p>
      ) : null}

      <div className="mt-2">
        <AuthButton
          className="rounded-md py-2.5 font-bold hover:bg-emerald-300"
          disabled={!email}
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
