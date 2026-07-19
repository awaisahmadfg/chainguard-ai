"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { reviews } from "@/lib/mock-reviews";
import { DashboardIcon } from "./dashboard-icons";

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showAlerts, setShowAlerts] = useState(false);

  const matches = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) {
      return [];
    }

    return reviews.filter(
      (review) =>
        review.project.toLowerCase().includes(trimmed) ||
        review.chain.toLowerCase().includes(trimmed) ||
        review.reportId.toLowerCase().includes(trimmed),
    );
  }, [query]);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#3c4a42] bg-[#131315] px-4 sm:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <button
          aria-label="Open navigation menu"
          className="rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400 lg:hidden"
          onClick={onMenuClick}
          type="button"
        >
          <DashboardIcon className="size-5" name="menu" />
        </button>
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bbcabf]">
            <DashboardIcon className="size-4" name="search" />
          </span>
          <input
            aria-label="Search demo reviews"
            className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] py-1.5 pl-10 pr-4 text-sm leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/70 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search reviews (try Vault, Bridge…)"
            type="search"
            value={query}
          />
          {query.trim().length >= 2 ? (
            <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-md border border-[#2a2a2c] bg-[#0c0c0e] shadow-xl">
              {matches.length === 0 ? (
                <p className="px-3 py-3 text-[13px] text-[#bbcabf]">
                  No demo reviews match “{query.trim()}”.
                </p>
              ) : (
                <ul>
                  {matches.map((review) => (
                    <li key={review.reportId}>
                      <button
                        className="flex w-full flex-col items-start gap-0.5 px-3 py-2.5 text-left transition-colors hover:bg-[#18181b]"
                        onClick={() => {
                          setQuery("");
                          router.push(
                            `/dashboard/reports?review=${review.reportId}`,
                          );
                        }}
                        type="button"
                      >
                        <span className="text-[13px] font-medium text-[#e5e1e4]">
                          {review.project}
                        </span>
                        <span className="text-[11px] text-[#bbcabf]">
                          {review.chain} · {review.risk}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-1">
        <Link
          aria-label="Wallet settings"
          className="rounded p-2 text-[#bbcabf] transition-colors hover:text-emerald-400"
          href="/dashboard/settings"
          title="Open settings"
        >
          <DashboardIcon className="size-5" name="wallet" />
        </Link>
        <div className="relative">
          <button
            aria-expanded={showAlerts}
            aria-label="Notifications"
            className="relative rounded p-2 text-[#bbcabf] transition-colors hover:text-emerald-400"
            onClick={() => setShowAlerts((open) => !open)}
            type="button"
          >
            <DashboardIcon className="size-5" name="bell" />
            <span
              aria-hidden="true"
              className="absolute right-2 top-1.5 size-2 rounded-full bg-[#ffb4ab]"
            />
          </button>
          {showAlerts ? (
            <div className="absolute right-0 top-[calc(100%+6px)] z-50 w-64 rounded-md border border-[#2a2a2c] bg-[#0c0c0e] p-3 shadow-xl">
              <p className="text-[13px] font-medium text-[#e5e1e4]">
                No new alerts
              </p>
              <p className="mt-1 text-[12px] leading-5 text-[#bbcabf]">
                Demo inbox is quiet. Start a review to generate a report.
              </p>
              <Link
                className="mt-3 inline-flex text-[12px] font-medium text-emerald-400 hover:text-emerald-300"
                href="/dashboard/reviews/new"
                onClick={() => setShowAlerts(false)}
              >
                New Review →
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
