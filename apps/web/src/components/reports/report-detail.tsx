"use client";

import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { AnalysisSidebar } from "./analysis-sidebar";
import { FindingsTable } from "./findings-table";
import { RecommendedFix } from "./recommended-fix";
import { SeverityCards } from "./severity-cards";

export function ReportDetail() {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get("review") ?? "demo-7a9f";
  const [exportLabel, setExportLabel] = useState("Export PDF");
  const [isExporting, setIsExporting] = useState(false);

  async function handleExportPdf() {
    if (isExporting) {
      return;
    }

    setIsExporting(true);
    setExportLabel("Generating PDF…");
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    window.print();
    setExportLabel("Export PDF");
    setIsExporting(false);
  }

  return (
    <div className="w-full space-y-8">
      <section className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className="rounded border border-[#3c4a42] px-2 py-0.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
              Review Report
            </span>
            <span className="rounded bg-[#353437] px-2 py-0.5 font-mono text-[13px] leading-5 text-[#bbcabf]">
              0x7a...9F2
            </span>
            <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[12px] leading-5 text-emerald-400">
              ID {reviewId}
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
            VaultCore.sol
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:justify-end">
          <div className="flex flex-col items-start border-r border-[#3c4a42] pr-4 sm:items-end">
            <span className="mb-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
              Risk Score
            </span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#ffb4ab]">
                78
              </span>
              <span className="text-sm leading-5 text-[#bbcabf]">/ 100</span>
            </div>
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded border border-[#3f3f46] px-4 py-2 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            href="/dashboard/chat"
          >
            <DashboardIcon className="size-[18px]" name="ai" />
            Ask AI about this
          </Link>
          <button
            className="inline-flex items-center gap-2 rounded bg-emerald-500 px-4 py-2 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-black transition-colors hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isExporting}
            onClick={handleExportPdf}
            type="button"
          >
            <DashboardIcon className="size-[18px]" name="download" />
            {exportLabel}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 space-y-6 lg:col-span-8">
          <SeverityCards />
          <FindingsTable />
          <RecommendedFix />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <AnalysisSidebar />
        </div>
      </div>
    </div>
  );
}
