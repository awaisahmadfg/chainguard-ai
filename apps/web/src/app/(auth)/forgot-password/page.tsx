import Link from "next/link";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";
import { AuthInput } from "@/components/auth/auth-input";

export default function ForgotPasswordPage() {
  return (
    <div className="relative z-10 w-full max-w-[400px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]"
      />

      <div className="w-full rounded-xl border border-[#27272a] bg-[#0c0c0e] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] sm:p-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-lg border border-[#3c4a42] bg-[#201f22] text-emerald-400 shadow-lg shadow-black/30">
            <AuthIcon className="size-7" name="shield" />
          </div>
          <h1 className="mb-1 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
            ChainGuard AI
          </h1>
          <p className="text-sm leading-5 text-[#bbcabf]">
            Enterprise Security Protocol
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold leading-7 tracking-tight text-[#e5e1e4] md:text-2xl md:leading-8">
            Reset your password
          </h2>
          <p className="text-sm leading-5 text-[#bbcabf]">
            Enter your email address and we&apos;ll send you instructions to
            reset your password.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <AuthInput
            icon="mail"
            label="Email Address"
            name="email"
            placeholder="operator@chainguard.ai"
            type="email"
          />

          <div className="mt-2">
            <AuthButton className="rounded-md py-2.5 font-bold hover:bg-emerald-300">
              Send Reset Link
              <AuthIcon className="size-[18px]" name="arrow-right" />
            </AuthButton>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Link
            className="inline-flex items-center justify-center gap-2 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#c8c6c9] transition-colors hover:text-white"
            href="/login"
          >
            <AuthIcon className="size-4" name="arrow-left" />
            Back to Sign In
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]/60">
          Secure Audit Protocol Verified
        </p>
      </div>
    </div>
  );
}
