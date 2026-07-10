import Link from "next/link";

type DashboardIconName =
  | "ai"
  | "bell"
  | "dashboard"
  | "reports"
  | "review"
  | "risk"
  | "settings"
  | "user"
  | "wallet";

type NavItemProps = {
  active?: boolean;
  icon: DashboardIconName;
  label: string;
};

type StatCardProps = {
  label: string;
  suffix?: string;
  tone?: "default" | "danger";
  trend?: string;
  value: string;
};

type BadgeTone = "critical" | "medium" | "neutral" | "success";

type Review = {
  chain: string;
  project: string;
  reviewedAt: string;
  risk: string;
  riskTone: BadgeTone;
  status: string;
  statusTone: BadgeTone;
};

const reviews: Review[] = [
  {
    chain: "Ethereum",
    project: "DeFi Protocol Alpha",
    reviewedAt: "2 hours ago",
    risk: "9.2 Critical",
    riskTone: "critical",
    status: "Verified",
    statusTone: "success",
  },
  {
    chain: "Polygon",
    project: "NFT Marketplace Beta",
    reviewedAt: "5 hours ago",
    risk: "4.5 Medium",
    riskTone: "neutral",
    status: "Pending",
    statusTone: "neutral",
  },
  {
    chain: "Arbitrum",
    project: "Yield Aggregator v2",
    reviewedAt: "1 day ago",
    risk: "1.2 Low",
    riskTone: "success",
    status: "Verified",
    statusTone: "success",
  },
  {
    chain: "Cross-chain",
    project: "Bridge Contract Omega",
    reviewedAt: "2 days ago",
    risk: "8.8 High",
    riskTone: "critical",
    status: "Action Req",
    statusTone: "critical",
  },
];

function DashboardIcon({
  className = "size-5",
  name,
}: {
  className?: string;
  name: DashboardIconName;
}) {
  if (name === "dashboard") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" fill="currentColor" />
      </svg>
    );
  }

  if (name === "review") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M12 3 19 6v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M5 4h14v16H5V4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="M8 16v-4m4 4V8m4 8v-6" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "ai") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M7 9h10v8H7V9Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="M9 9V6m6 3V6M9 17v2m6-2v2M5 12H3m18 0h-2" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="M10 13h.01M14 13h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      </svg>
    );
  }

  if (name === "risk") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="m12 4 9 16H3L12 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="M12 10v4m0 3h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
        <path d="M19.4 15a8 8 0 0 0 .1-1l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 6.5h-6L8.6 9a8 8 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8 8 0 0 0 1.7 1l.4 2.5h6l.4-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a8 8 0 0 0-.1-1Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (name === "wallet") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M4 7h16v12H4V7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="M16 12h4v4h-4a2 2 0 0 1 0-4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "bell") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24">
        <path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        <path d="M10 21h4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function NavItem({ active = false, icon, label }: NavItemProps) {
  return (
    <Link
      className={`flex items-center gap-3 rounded px-3 py-2.5 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-colors active:scale-95 ${
        active
          ? "border-l-2 border-emerald-400 bg-[#2a2a2c] text-emerald-400"
          : "text-[#bbcabf] hover:bg-[#2a2a2c] hover:text-[#e5e1e4]"
      }`}
      href="#"
    >
      <DashboardIcon className="size-5" name={icon} />
      {label}
    </Link>
  );
}

function StatCard({
  label,
  suffix,
  tone = "default",
  trend,
  value,
}: StatCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5 transition-colors hover:border-[#3f3f46]">
      {tone === "danger" ? (
        <div className="absolute right-0 top-0 size-16 rounded-bl-full bg-red-300/10 blur-xl" />
      ) : null}
      <p className="mb-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <h3
          className={`text-4xl font-semibold leading-[44px] tracking-[-0.02em] ${
            tone === "danger" ? "text-red-300" : "text-[#e5e1e4]"
          }`}
        >
          {value}
        </h3>
        {suffix ? (
          <span className="text-[13px] font-medium leading-[18px] text-[#bbcabf]">
            {suffix}
          </span>
        ) : null}
        {trend ? (
          <span
            className={`text-[13px] font-medium leading-[18px] ${
              tone === "danger" ? "text-red-300" : "text-emerald-400"
            }`}
          >
            {trend}
          </span>
        ) : null}
      </div>
    </article>
  );
}

function Badge({ children, tone }: { children: string; tone: BadgeTone }) {
  const toneClassName = {
    critical: "border-red-300/25 bg-red-300/10 text-red-300",
    medium: "border-amber-300/25 bg-amber-300/10 text-amber-300",
    neutral: "border-[#3f3f46] bg-[#3f3f46]/30 text-[#bbcabf]",
    success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-1 font-mono text-[13px] leading-5 ${toneClassName}`}
    >
      {children}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-[#e5e1e4]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <aside className="fixed left-0 top-0 z-50 hidden h-full w-[240px] flex-col border-r border-[#3c4a42] bg-[#0e0e10] py-6 lg:flex">
        <div className="mb-8 px-6">
          <h1 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-emerald-400">
            ChainGuard AI
          </h1>
          <p className="mt-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
            Enterprise Security
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          <NavItem active icon="dashboard" label="Dashboard" />
          <NavItem icon="review" label="New Review" />
          <NavItem icon="reports" label="Reports" />
          <NavItem icon="ai" label="AI Chatbot" />
          <NavItem icon="risk" label="Risk Registry" />
        </nav>

        <div className="px-4">
          <NavItem icon="settings" label="Settings" />
        </div>
      </aside>

      <div className="relative z-10 flex min-h-screen flex-col lg:pl-[240px]">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#3c4a42] bg-[#131315]/95 px-4 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="lg:hidden">
              <h1 className="text-lg font-semibold text-emerald-400">
                ChainGuard AI
              </h1>
            </div>
            <h2 className="truncate text-xl font-semibold leading-7 text-[#e5e1e4]">
              Workspace Alpha
            </h2>
            <div className="hidden items-center rounded border border-[#3f3f46] bg-[#18181b] px-3 py-1 md:flex">
              <span className="mr-2 size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="font-mono text-[13px] leading-5 text-[#e5e1e4]">
                0x7F...3B92 connected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400">
              <DashboardIcon className="size-5" name="wallet" />
            </button>
            <button className="relative rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400">
              <DashboardIcon className="size-5" name="bell" />
              <span className="absolute right-2 top-1.5 size-2 rounded-full bg-red-300" />
            </button>
            <div className="ml-1 flex size-8 items-center justify-center rounded-full border border-[#3c4a42] bg-[#2a2a2c] text-[11px] font-semibold text-emerald-400">
              <DashboardIcon className="size-4" name="user" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
                Overview
              </h2>
              <p className="mt-2 text-base leading-6 text-[#bbcabf]">
                Security posture and recent audit activity.
              </p>
            </div>
            <Link
              className="inline-flex items-center justify-center rounded bg-emerald-500 px-6 py-3 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-black shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-300 active:scale-95"
              href="#"
            >
              New Review
            </Link>
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

          <section className="overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e]">
            <div className="flex items-center justify-between border-b border-[#27272a] px-6 py-4">
              <h3 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
                Recent Reviews
              </h3>
              <button className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-emerald-400 transition-colors hover:text-emerald-300">
                View All
              </button>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[880px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#27272a] bg-[#18181b]">
                    {[
                      "Project Name",
                      "Chain",
                      "Risk Score",
                      "Status",
                      "Last Reviewed",
                      "Action",
                    ].map((heading) => (
                      <th
                        className={`px-6 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf] ${
                          heading === "Action" ? "text-right" : ""
                        }`}
                        key={heading}
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm leading-5 text-[#e5e1e4]">
                  {reviews.map((review, index) => (
                    <tr
                      className={`transition-colors hover:bg-[#18181b] ${
                        index === reviews.length - 1
                          ? ""
                          : "border-b border-[#27272a]"
                      }`}
                      key={review.project}
                    >
                      <td className="px-6 py-3 font-medium">
                        {review.project}
                      </td>
                      <td className="px-6 py-3 text-[#bbcabf]">
                        {review.chain}
                      </td>
                      <td className="px-6 py-3">
                        <Badge tone={review.riskTone}>{review.risk}</Badge>
                      </td>
                      <td className="px-6 py-3">
                        <Badge tone={review.statusTone}>{review.status}</Badge>
                      </td>
                      <td className="px-6 py-3 text-[#bbcabf]">
                        {review.reviewedAt}
                      </td>
                      <td className="px-6 py-3 text-right">
                        <button className="rounded border border-[#3f3f46] px-3 py-1 text-[13px] font-medium leading-[18px] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
