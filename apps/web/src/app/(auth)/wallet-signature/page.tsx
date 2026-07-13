import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";
import { SignMessageButton } from "@/components/auth/sign-message-button";

export default function WalletSignaturePage() {
  return (
    <main className="w-full max-w-[440px]">
      <div className="overflow-hidden rounded-xl border border-[#3c4a42] bg-[#131315] shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)]">
        <div className="relative h-0.5 w-full overflow-hidden bg-emerald-500/20">
          <div className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_50%,rgba(255,255,255,0)_100%)] bg-[length:200%_100%]" />
        </div>

        <div className="flex flex-col items-center p-8 text-center md:p-10">
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 flex size-16 items-center justify-center rounded-full border border-[#3c4a42] bg-[#201f22] text-[#e5e1e4] shadow-inner">
              <AuthIcon className="size-8" name="wallet" />
            </div>
            <h1 className="mb-2 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
              Verify Wallet Ownership
            </h1>
            <p className="text-base leading-6 text-[#bbcabf]">
              Sign a message to continue
            </p>
          </div>

          <div className="mb-8 flex w-full flex-col items-center justify-center rounded-lg border border-[#3c4a42] bg-[#201f22] p-4 transition-colors hover:border-[#86948a]">
            <span className="mb-2 block text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
              Connected Address
            </span>
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              <span className="font-mono text-[13px] leading-5 tracking-wider text-[#e5e1e4]">
                0x71C...976F
              </span>
            </div>
          </div>

          <div className="mb-6 flex w-full flex-col gap-3">
            <SignMessageButton />
            <AuthButton
              className="active:scale-[0.98]"
              href="/connect-wallet"
              variant="secondary"
            >
              Disconnect
            </AuthButton>
          </div>

          <div className="flex max-w-[280px] items-start justify-center gap-2 text-[#bbcabf]">
            <AuthIcon className="mt-0.5 size-4 opacity-70" name="info" />
            <p className="text-left text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] opacity-70">
              This is not a blockchain transaction and does not cost gas
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
