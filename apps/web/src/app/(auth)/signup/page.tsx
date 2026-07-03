import Link from "next/link";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthDivider } from "@/components/auth/auth-divider";
import { AuthIcon } from "@/components/auth/auth-icons";
import { AuthLogo } from "@/components/auth/auth-logo";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignUpPage() {
  return (
    <AuthCard>
      <div className="mb-8 text-center">
        <AuthLogo />
        <h1 className="mb-2 mt-4 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
          Create your account
        </h1>
        <p className="text-sm leading-5 text-[#bbcabf]">
          Join ChainGuard AI for secure enterprise audit protocol.
        </p>
      </div>

      <SignupForm />

      <div className="my-6">
        <AuthDivider label="Or sign up with" />
      </div>

      <div className="space-y-3">
        <AuthButton variant="secondary">
          <AuthIcon className="size-4 opacity-70" name="google" />
          Continue with Google
        </AuthButton>
        <AuthButton href="/connect-wallet" variant="secondary">
          <AuthIcon className="size-[18px] text-[#bbcabf]" name="wallet" />
          Connect Wallet
        </AuthButton>
      </div>

      <div className="mt-8 space-y-4 text-center">
        <p className="text-sm leading-5 text-[#bbcabf]">
          Already have an account?{" "}
          <Link
            className="text-emerald-400 transition-all hover:underline"
            href="/login"
          >
            Sign In
          </Link>
        </p>

        <p className="mx-auto max-w-xs text-[10px] font-semibold uppercase leading-relaxed tracking-[0.05em] text-[#86948a]">
          By clicking &quot;Create Account&quot;, you agree to our{" "}
          <Link
            className="text-[#e5e1e4] transition-colors hover:text-emerald-400"
            href="/terms"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="text-[#e5e1e4] transition-colors hover:text-emerald-400"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </AuthCard>
  );
}
