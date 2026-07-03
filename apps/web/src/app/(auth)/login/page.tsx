import Link from "next/link";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthDivider } from "@/components/auth/auth-divider";
import { AuthIcon } from "@/components/auth/auth-icons";
import { PasswordInput } from "@/components/auth/password-input";

export default function LoginPage() {
  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex w-full max-w-[440px] flex-col items-center rounded-lg border border-[#27272a] bg-[#0c0c0e] p-8">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-[#3f3f46] bg-[#353437] text-emerald-400">
            <AuthIcon className="size-7" name="shield" />
          </div>
          <h1 className="mb-1 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
            ChainGuard AI
          </h1>
          <p className="text-sm leading-5 text-[#bbcabf]">
            Enterprise Security Protocol
          </p>
        </div>

        <div className="mb-6 w-full text-center">
          <h2 className="text-xl font-semibold leading-7 text-[#e5e1e4]">
            Sign in to your account
          </h2>
        </div>

        <form className="flex w-full flex-col">
          <div className="mb-4 flex flex-col gap-2">
            <label
              className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full rounded border border-[#27272a] bg-[#09090b] px-4 py-2 text-sm text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              id="email"
              placeholder="admin@enterprise.com"
              type="email"
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
              label="Password"
              labelClassName="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#bbcabf]"
              name="password"
              placeholder="••••••••••••"
              showLeadingIcon={false}
            />
          </div>

          <AuthButton className="mb-6 hover:bg-emerald-600" href="/authenticated">
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
      </div>

      <footer className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
          © 2024 ChainGuard AI. Secure Audit Protocol.
        </p>
        <div className="flex gap-4">
          <Link
            className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <span className="text-[#27272a]">•</span>
          <Link
            className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
            href="/terms"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}
