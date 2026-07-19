import Link from "next/link";
import { NewReviewForm } from "@/components/review/new-review-form";

export default function NewReviewPage() {
  return (
    <div className="flex min-h-full w-full flex-col gap-8">
      <header className="w-full">
        <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
          New Smart Contract Review
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-6 text-[#bbcabf]">
          Configure source code origin and select analysis parameters for the
          next automated security audit.
        </p>
      </header>

      <NewReviewForm />

      <footer className="mt-auto w-full border-t border-[#3c4a42] pt-4">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#e5e1e4]">
            © 2024 ChainGuard AI. Secure Audit Protocol.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
