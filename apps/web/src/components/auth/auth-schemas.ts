import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address."),
});

export const signupSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(1, "Confirm password is required."),
    fullName: z.string().trim().min(1, "Full name is required."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export const resetPasswordSchema = z
  .object({
    confirmPassword: z.string().min(1, "Confirm password is required."),
    newPassword: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must be at least 8 characters."),
  })
  .refine((values) => values.newPassword === values.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function getFieldErrors<TFieldName extends string>(
  fieldErrors: Partial<Record<TFieldName, string[] | undefined>>,
) {
  return Object.fromEntries(
    Object.entries(fieldErrors).map(([fieldName, messages]) => [
      fieldName,
      messages?.[0] ?? "",
    ]),
  ) as Partial<Record<TFieldName, string>>;
}

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type LoginValues = z.infer<typeof loginSchema>;
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
export type SignupValues = z.infer<typeof signupSchema>;
