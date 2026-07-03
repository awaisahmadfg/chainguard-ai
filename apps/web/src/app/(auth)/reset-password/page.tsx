import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <main className="flex w-full max-w-md flex-col items-center px-2 py-8">
      <section className="hidden w-full flex-col items-center rounded-xl border border-[#3c4a42] bg-[#111318]/85 p-10 text-center shadow-2xl backdrop-blur-md">
        <div className="mb-4 flex size-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
          <AuthIcon className="size-10" name="check-circle" />
        </div>
        <h2 className="mb-2 text-xl font-semibold leading-7 text-[#e5e1e4]">
          Password reset successful
        </h2>
        <p className="mb-8 text-sm leading-6 text-[#bbcabf]">
          Your account credentials have been updated and synchronized across all
          secure sessions.
        </p>
        <AuthButton href="/login" variant="secondary">
          Sign In to Dashboard
        </AuthButton>
      </section>

      <section className="w-full overflow-hidden rounded-xl border border-[#3c4a42] bg-[#111318]/85 shadow-2xl backdrop-blur-md">
        <div className="border-b border-[#3c4a42]/40 p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/5 text-emerald-300">
              <AuthIcon className="size-8" name="shield" />
            </div>
            <div>
              <h1 className="text-xl font-semibold leading-7 tracking-tight text-[#e5e1e4]">
                ChainGuard AI
              </h1>
              <p className="mt-1 text-[10px] font-semibold uppercase leading-none tracking-[0.12em] text-[#bbcabf]/60">
                Enterprise Security Protocol
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold leading-7 text-[#e5e1e4]">
              Update Credentials
            </h2>
            <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
              Set a new high-entropy password for your account.
            </p>
          </div>

          <ResetPasswordForm />
        </div>
      </section>

      <div className="mt-10 flex w-full max-w-md items-center justify-center gap-10 px-1">
        <div className="flex items-center gap-1 text-[10px] font-semibold uppercase leading-none tracking-[0.12em] text-[#bbcabf]/50">
          <AuthIcon className="size-3.5" name="lock" />
          Secure Session
        </div>
        <div className="flex items-center gap-1 text-[10px] font-semibold uppercase leading-none tracking-[0.12em] text-[#bbcabf]/50">
          <AuthIcon className="size-3.5" name="shield" />
          Encrypted Protocol
        </div>
      </div>
    </main>
  );
}
