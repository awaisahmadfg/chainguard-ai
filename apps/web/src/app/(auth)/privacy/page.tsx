import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";

export default function PrivacyPage() {
  return (
    <AuthCard>
      <h1 className="text-2xl font-semibold tracking-[-0.01em] text-[#e5e1e4]">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm leading-6 text-[#bbcabf]">
        Prototype notice for ChainGuard AI (hackathon demo).
      </p>

      <div className="mt-6 space-y-4 text-sm leading-6 text-[#bbcabf]">
        <p>
          This build is a frontend prototype. Auth, reviews, chat replies, and
          registry data are mocked in the browser. No production backend stores
          personal data for this demo.
        </p>
        <p>
          Session state uses a local cookie (`cg_session`) so dashboard routes
          can be protected in the demo. Clear site cookies to reset.
        </p>
        <p>
          Do not enter real secrets, private keys, or production credentials in
          this environment.
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
