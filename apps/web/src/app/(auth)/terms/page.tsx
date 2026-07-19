import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";

export default function TermsPage() {
  return (
    <AuthCard>
      <h1 className="text-2xl font-semibold tracking-[-0.01em] text-[#e5e1e4]">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm leading-6 text-[#bbcabf]">
        Prototype notice for ChainGuard AI (hackathon demo).
      </p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-[#bbcabf]">
        <p>
          ChainGuard AI is provided as an interactive product prototype. Analysis
          results, risk scores, and chat answers are simulated for demonstration
          and evaluation — they are not a substitute for a professional audit.
        </p>
        <p>
          By using the demo you agree that findings are illustrative only and
          that wallet / email flows may establish a local demo session without
          real cryptographic verification.
        </p>
        <p>
          Future versions may connect to Foundry, Slither, RAG, and on-chain
          registry APIs under separate terms.
        </p>
      </div>

      <Link
        className="mt-8 inline-flex text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        href="/login"
      >
        ← Back to sign in
      </Link>
    </AuthCard>
  );
}
