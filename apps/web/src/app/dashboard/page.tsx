import Link from "next/link";
import { ReviewsTable } from "@/components/dashboard/reviews-table";
import { StatCard } from "@/components/dashboard/stat-card";
import { reviews } from "@/lib/mock-reviews";

export default function DashboardPage() {
  return (
    <>
      <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
            Overview
          </h1>
          <p className="mt-2 text-base leading-6 text-[#bbcabf]">
            Security posture and recent audit activity. Start a review or ask
            the AI agent about VaultCore findings.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center justify-center rounded border border-[#3f3f46] px-5 py-3 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            href="/dashboard/chat"
          >
            Ask AI agent
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded bg-emerald-500 px-6 py-3 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-black shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-300 active:scale-95"
            href="/dashboard/reviews/new"
          >
            New Review
          </Link>
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Reviews" trend="+12%" value="1,248" />
        <StatCard
          label="High-Risk Findings"
          tone="danger"
          trend="-3"
          value="24"
        />
        <StatCard label="Average Risk Score" suffix="/ 10" value="8.4" />
        <StatCard label="Registry Submissions" value="392" />
      </section>

      <ReviewsTable reviews={reviews} />
    </>
  );
}
