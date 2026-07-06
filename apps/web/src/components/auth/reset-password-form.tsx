"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthButton } from "./auth-button";
import {
  getFieldErrors,
  resetPasswordSchema,
  type ResetPasswordValues,
} from "./auth-schemas";
import { AuthIcon } from "./auth-icons";
import { PasswordInput } from "./password-input";

type ResetPasswordErrors = Partial<Record<keyof ResetPasswordValues, string>>;

export function ResetPasswordForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<ResetPasswordErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<ResetPasswordValues>({
    confirmPassword: "",
    newPassword: "",
  });

  const isSubmitDisabled = !values.newPassword || !values.confirmPassword;

  function updateValue(field: keyof ResetPasswordValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: "" }));
  }

  function validateForm() {
    const result = resetPasswordSchema.safeParse(values);

    if (result.success) {
      setErrors({});
      return true;
    }

    setErrors(getFieldErrors(result.error.flatten().fieldErrors));
    return false;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/login");
    }, 600);
  }

  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
      <PasswordInput
        autoComplete="new-password"
        error={errors.newPassword}
        id="new-password"
        label="New Password"
        labelClassName="block text-[11px] font-semibold uppercase leading-none tracking-[0.05em] text-[#bbcabf]"
        name="newPassword"
        onChange={(value) => updateValue("newPassword", value)}
        placeholder="••••••••••••"
        required
        showLeadingIcon={false}
        value={values.newPassword}
      />
      <PasswordInput
        autoComplete="new-password"
        error={errors.confirmPassword}
        id="confirm-password"
        label="Confirm Password"
        labelClassName="block text-[11px] font-semibold uppercase leading-none tracking-[0.05em] text-[#bbcabf]"
        name="confirmPassword"
        onChange={(value) => updateValue("confirmPassword", value)}
        placeholder="••••••••••••"
        required
        showLeadingIcon={false}
        value={values.confirmPassword}
      />

      <div className="space-y-2">
        <div className="flex h-1 w-full gap-1">
          <div className="h-full w-1/4 rounded-full bg-emerald-400" />
          <div className="h-full w-1/4 rounded-full bg-emerald-400" />
          <div className="h-full w-1/4 rounded-full bg-emerald-400" />
          <div className="h-full w-1/4 rounded-full bg-[#3c4a42]/70" />
        </div>
        <p className="flex items-center gap-1 text-[10px] font-semibold uppercase leading-none tracking-[0.05em] text-emerald-400">
          <AuthIcon className="size-3" name="check-circle" />
          Entropy status: High security
        </p>
      </div>

      <AuthButton
        className="rounded-md py-3 font-bold hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        disabled={isSubmitDisabled}
        isLoading={isSubmitting}
        loadingLabel="Resetting password..."
        type="submit"
      >
        Reset Password
        <AuthIcon className="size-[18px]" name="key" />
      </AuthButton>

      <div className="pt-2 text-center">
        <Link
          className="inline-flex items-center justify-center gap-1 text-sm leading-5 text-[#bbcabf] transition-colors hover:text-emerald-300"
          href="/login"
        >
          <AuthIcon className="size-4" name="arrow-left" />
          Back to Sign In
        </Link>
      </div>
    </form>
  );
}
