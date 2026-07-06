"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthButton } from "./auth-button";
import { AuthDivider } from "./auth-divider";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";
import {
  getFieldErrors,
  loginSchema,
  type LoginValues,
} from "./auth-schemas";

type LoginErrors = Partial<Record<keyof LoginValues, string>>;

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const isSubmitDisabled = !values.email || !values.password;

  function updateValue(field: keyof LoginValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: "" }));
  }

  function validateForm() {
    const result = loginSchema.safeParse(values);

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
      router.push("/authenticated");
    }, 600);
  }

  return (
    <form className="flex w-full flex-col" noValidate onSubmit={handleSubmit}>
      <div className="mb-4">
        <AuthInput
          autoComplete="email"
          error={errors.email}
          icon="mail"
          label="Email Address"
          labelClassName="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
          name="email"
          onChange={(value) => updateValue("email", value)}
          placeholder="admin@enterprise.com"
          required
          type="email"
          value={values.email}
        />
      </div>

      <div className="mb-6">
        <PasswordInput
          action={
            <Link
              className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-emerald-500 transition-colors hover:text-emerald-300"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          }
          autoComplete="current-password"
          error={errors.password}
          label="Password"
          labelClassName="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
          name="password"
          onChange={(value) => updateValue("password", value)}
          placeholder="••••••••••••"
          required
          showLeadingIcon={false}
          value={values.password}
        />
      </div>

      <AuthButton
        className="mb-6 hover:bg-emerald-600"
        disabled={isSubmitDisabled}
        isLoading={isSubmitting}
        loadingLabel="Signing in..."
        type="submit"
      >
        Sign In
        <AuthIcon className="size-[18px]" name="arrow-right" />
      </AuthButton>

      <div className="mb-6">
        <AuthDivider label="Or continue with" />
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <AuthButton variant="secondary">
          <AuthIcon className="size-5" name="google" />
          Continue with Google
        </AuthButton>
        <AuthButton href="/connect-wallet" variant="secondary">
          <AuthIcon className="size-5 text-[#bbcabf]" name="wallet" />
          Connect Wallet
        </AuthButton>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm leading-5 text-[#bbcabf]">
          Don&apos;t have an account?{" "}
          <Link
            className="font-medium text-emerald-500 transition-colors hover:text-emerald-300"
            href="/signup"
          >
            Create Account
          </Link>
        </p>
      </div>
    </form>
  );
}
