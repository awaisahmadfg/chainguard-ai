"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthButton } from "./auth-button";
import { AuthIcon } from "./auth-icons";
import { AuthInput } from "./auth-input";
import { PasswordInput } from "./password-input";
import {
  getFieldErrors,
  signupSchema,
  type SignupValues,
} from "./auth-schemas";

type SignupErrors = Partial<Record<keyof SignupValues, string>>;

const initialValues: SignupValues = {
  confirmPassword: "",
  email: "",
  fullName: "",
  password: "",
};

export function SignupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState<SignupValues>(initialValues);

  const isSubmitDisabled =
    !values.fullName || !values.email || !values.password || !values.confirmPassword;

  function updateValue(field: keyof SignupValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: "" }));
  }

  function validateForm() {
    const result = signupSchema.safeParse(values);

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
    <form className="space-y-4" noValidate onSubmit={handleSubmit}>
      <AuthInput
        autoComplete="name"
        error={errors.fullName}
        icon="user"
        label="Full Name"
        name="fullName"
        onChange={(value) => updateValue("fullName", value)}
        placeholder="Enter your full name"
        required
        value={values.fullName}
      />
      <AuthInput
        autoComplete="email"
        error={errors.email}
        icon="mail"
        label="Email Address"
        name="email"
        onChange={(value) => updateValue("email", value)}
        placeholder="name@company.com"
        required
        type="email"
        value={values.email}
      />
      <PasswordInput
        autoComplete="new-password"
        error={errors.password}
        icon="lock"
        label="Password"
        name="password"
        onChange={(value) => updateValue("password", value)}
        placeholder="Create a secure password"
        required
        value={values.password}
      />
      <PasswordInput
        autoComplete="new-password"
        error={errors.confirmPassword}
        icon="refresh"
        label="Confirm Password"
        name="confirmPassword"
        onChange={(value) => updateValue("confirmPassword", value)}
        placeholder="Confirm your password"
        required
        value={values.confirmPassword}
      />

      <div className="pt-2">
        <AuthButton
          disabled={isSubmitDisabled}
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
