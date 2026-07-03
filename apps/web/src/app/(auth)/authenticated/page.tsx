import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";

export default function AuthenticatedPage() {
  return (
    <main className="relative z-10 flex w-full max-w-sm flex-col items-center justify-center px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl"
      />

      <div className="mb-8 animate-[pop-in_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0">
        <div className="relative flex size-24 items-center justify-center rounded-full border border-[#353437] bg-[#201f22] text-emerald-500 shadow-lg shadow-black/50">
          <AuthIcon className="size-12" name="check-circle" />
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]" />
        </div>
      </div>

      <div className="mb-8 w-full animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_100ms_forwards] space-y-1 text-center opacity-0">
        <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
          You are signed in
        </h1>
        <p className="text-base leading-6 text-[#bbcabf]">
          Secure session established and verified.
        </p>
      </div>

      <div className="w-full animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards] opacity-0">
        <AuthButton
          className="active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0e0e10]"
          href="/dashboard"
        >
          Continue to Dashboard
          <AuthIcon className="size-[18px]" name="arrow-right" />
        </AuthButton>
      </div>

      <div className="mt-8 w-full animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)_300ms_forwards] rounded border border-[#353437] bg-[#131315] p-4 opacity-0">
        <div className="flex flex-col space-y-1 font-mono text-[13px] leading-5 text-[#bbcabf]/70">
          <div className="flex justify-between gap-4">
            <span>&gt; Auth_Req:</span>
            <span className="text-emerald-500">SUCCESS</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>&gt; Session:</span>
            <span className="text-emerald-500">VALIDATED</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>&gt; Identity:</span>
            <span>VERIFIED</span>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-center">
        <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]/50">
          ChainGuard AI
        </span>
      </footer>
    </main>
  );
}
