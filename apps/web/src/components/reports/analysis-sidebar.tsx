import Link from "next/link";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { reportMetadata, reportTools } from "@/lib/mock-report";

export function AnalysisSidebar() {
  return (
    <aside className="flex flex-col gap-6">
      <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
        <h3 className="mb-4 border-b border-[#27272a] pb-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
          Analysis Metadata
        </h3>
        <div className="space-y-4 text-sm leading-5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[#bbcabf]">Model Version</span>
            <span className="rounded border border-[#27272a] bg-[#18181b] px-2 py-0.5 font-mono text-[13px] text-[#e5e1e4]">
              {reportMetadata.model}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[#bbcabf]">Analysis Latency</span>
            <span className="text-[#e5e1e4]">{reportMetadata.latency}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[#bbcabf]">Tokens Processed</span>
            <span className="text-[#e5e1e4]">{reportMetadata.tokens}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[#bbcabf]">Status</span>
            <span className="inline-flex items-center gap-1 rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-emerald-500">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {reportMetadata.status}
            </span>
          </div>
        </div>

        <div className="mt-6 border-t border-[#27272a] pt-4">
          <h4 className="mb-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
            Tool Status
          </h4>
          <div className="space-y-2">
            {reportTools.map((tool) => (
              <div
                className="flex items-center justify-between rounded border border-[#27272a] bg-[#18181b] p-2"
                key={tool.name}
              >
                <span className="text-sm text-[#e5e1e4]">{tool.name}</span>
                <span className="text-emerald-500">✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
            Contract Identity
          </h3>
          <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500">
            Verified
          </span>
        </div>
        <div className="mb-3 break-all rounded border border-[#27272a] bg-[#18181b] p-3 font-mono text-xs text-[#e5e1e4]">
          0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
        </div>
        <Link
          className="inline-flex items-center gap-1 text-[13px] font-medium leading-[18px] text-emerald-500 transition-colors hover:text-emerald-300"
          href="/dashboard/registry"
        >
          View in Registry
          <DashboardIcon className="size-3.5" name="link" />
        </Link>
      </section>
    </aside>
  );
}
