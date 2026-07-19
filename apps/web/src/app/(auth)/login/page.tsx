import Link from "next/link";
import { Suspense } from "react";
import { AuthIcon } from "@/components/auth/auth-icons";
import { LoginForm } from "@/components/auth/login-form";
import { EnterDemoButton } from "@/components/demo/enter-demo-button";

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

        <Suspense fallback={<p className="text-sm text-[#bbcabf]">Loading…</p>}>
          <LoginForm />
        </Suspense>

        <div className="mt-6 w-full border-t border-[#27272a] pt-6">
          <EnterDemoButton className="flex w-full items-center justify-center gap-2 rounded bg-emerald-500/15 px-4 py-3 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-emerald-400 transition-colors hover:bg-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60" />
        </div>
      </div>

      <footer className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
          © 2026 ChainGuard AI. Secure Audit Protocol.
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
