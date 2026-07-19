import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthLogo } from "@/components/auth/auth-logo";

export default function PrivacyPage() {
  return (
    <AuthCard>
      <div className="mb-6 flex flex-col items-center text-center">
        <AuthLogo />
        <h1 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-[#e5e1e4]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#bbcabf]">
          Prototype notice for demo and hackathon review.
        </p>
      </div>

      <div className="space-y-4 text-sm leading-6 text-[#bbcabf]">
        <p>
          This demo stores a local browser cookie (`cg_session`) only to unlock
          dashboard routes. No server-side account database is used.
        </p>
        <p>
          Form inputs stay in the browser session for UI validation and
          navigation. Review findings, chat answers, and registry rows are mock
          content shipped with the app.
        </p>
        <p>
          When a production backend is added, authentication, storage, and data
          retention policies will be published here.
        </p>
      </div>

      <Link
        className="mt-8 inline-flex text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-300"
        href="/login"
      >
        Back to Login
      </Link>
    </AuthCard>
  );
}
