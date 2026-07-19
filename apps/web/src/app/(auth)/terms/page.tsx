import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthLogo } from "@/components/auth/auth-logo";

export default function TermsPage() {
  return (
    <AuthCard>
      <div className="mb-6 flex flex-col items-center text-center">
        <AuthLogo />
        <h1 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-[#e5e1e4]">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#bbcabf]">
          Prototype notice for demo and hackathon review.
        </p>
      </div>

      <div className="space-y-4 text-sm leading-6 text-[#bbcabf]">
        <p>
          ChainGuard AI is currently a frontend prototype. Screens, reports, and
          chat replies use mock data to demonstrate the product flow.
        </p>
        <p>
          Do not upload production secrets, private keys, or confidential
          contract source code to this demo environment.
        </p>
        <p>
          Features such as wallet login, analysis pipelines, and on-chain
          registry publishing are simulated for presentation purposes.
        </p>
      </div>

      <Link
        className="mt-8 inline-flex text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-300"
        href="/signup"
      >
        Back to Sign Up
      </Link>
    </AuthCard>
  );
}
