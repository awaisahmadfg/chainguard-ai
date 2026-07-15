import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { AnalysisSidebar } from "./analysis-sidebar";
import { FindingsTable } from "./findings-table";
import { RecommendedFix } from "./recommended-fix";
import { SeverityCards } from "./severity-cards";

export function ReportDetail() {
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
          </div>
          <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
            VaultCore.sol
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end border-r border-[#3c4a42] pr-4">
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
          <button
            className="inline-flex items-center gap-2 rounded bg-emerald-500 px-4 py-2 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-black transition-colors hover:bg-emerald-300"
            type="button"
          >
            <DashboardIcon className="size-[18px]" name="download" />
            Export PDF
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
