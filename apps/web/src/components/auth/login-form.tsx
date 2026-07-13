"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton } from "./auth-button";
import { AuthDivider } from "./auth-divider";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";
import { establishClientSession } from "@/lib/auth-session";
import {
  loginSchema,
  type LoginValues,
} from "./auth-schemas";

export function LoginForm() {
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit() {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    establishClientSession();
    router.push("/authenticated");
  }

  return (
    <form className="flex w-full flex-col" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AuthInput
              autoComplete="email"
              error={errors.email?.message}
              icon="mail"
              label="Email Address"
              labelClassName="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
              name={field.name}
              onChange={field.onChange}
              placeholder="admin@enterprise.com"
              required
              type="email"
              value={field.value}
            />
          )}
        />
      </div>

      <div className="mb-6">
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
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
              error={errors.password?.message}
              label="Password"
              labelClassName="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
              name={field.name}
              onChange={field.onChange}
              placeholder="••••••••••••"
              required
              showLeadingIcon={false}
              value={field.value}
            />
          )}
        />
      </div>

      <AuthButton
        className="mb-6 hover:bg-emerald-600"
        disabled={!isValid}
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
