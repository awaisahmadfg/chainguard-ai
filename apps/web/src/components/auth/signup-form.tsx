"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthButton } from "./auth-button";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";
import {
  signupSchema,
  type SignupValues,
} from "./auth-schemas";

export function SignupForm() {
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm<SignupValues>({
    defaultValues: {
      confirmPassword: "",
      email: "",
      fullName: "",
      password: "",
    },
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit() {
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    router.push("/authenticated");
  }

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => (
          <AuthInput
            autoComplete="name"
            error={errors.fullName?.message}
            icon="user"
            label="Full Name"
            name={field.name}
            onChange={field.onChange}
            placeholder="Enter your full name"
            required
            value={field.value}
          />
        )}
      />
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
            onChange={field.onChange}
            placeholder="name@company.com"
            required
            type="email"
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <PasswordInput
            autoComplete="new-password"
            error={errors.password?.message}
            icon="lock"
            label="Password"
            name={field.name}
            onChange={field.onChange}
            placeholder="Create a secure password"
            required
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <PasswordInput
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            icon="refresh"
            label="Confirm Password"
            name={field.name}
            onChange={field.onChange}
            placeholder="Confirm your password"
            required
            value={field.value}
          />
        )}
      />

      <div className="pt-2">
        <AuthButton
          disabled={!isValid}
          isLoading={isSubmitting}
          loadingLabel="Creating account..."
          type="submit"
        >
          Create Account
          <AuthIcon className="size-[18px]" name="arrow-right" />
        </AuthButton>
      </div>
    </form>
  );
}
