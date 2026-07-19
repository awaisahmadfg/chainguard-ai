"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import type { RegistryContractDetail } from "@/lib/mock-registry";

type ContractDetailDrawerProps = {
  onClose: () => void;
  open: boolean;
  row: RegistryContractDetail | null;
};

export function ContractDetailDrawer({
  onClose,
  open,
  row,
}: ContractDetailDrawerProps) {
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    setApproved(false);
  }, [row?.address]);

  if (!open || !row) {
    return null;
  }

  return (
    <div className="fixed inset-0 top-16 z-50">
      <button
        aria-label="Close registry drawer"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
        type="button"
      />

      <aside
        aria-labelledby="registry-detail-title"
        className="absolute right-0 top-0 flex h-[calc(100vh-4rem)] w-full max-w-[420px] flex-col border-l border-[#27272a] bg-[#0c0c0e] shadow-[-24px_0_60px_rgba(0,0,0,0.45)]"
        role="dialog"
      >
        <div className="flex items-start justify-between border-b border-[#27272a] px-5 py-4">
          <div>
            <span className="inline-flex rounded-full border border-[#3c4a42] bg-[#18181b] px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
              {approved ? "Verified" : row.status}
            </span>
            <h2
              className="mt-3 text-2xl font-semibold leading-8 tracking-[-0.02em] text-[#e5e1e4]"
              id="registry-detail-title"
            >
              {row.displayName}
            </h2>
            <p className="mt-1 font-mono text-[13px] leading-5 text-[#bbcabf]">
              {row.address}
            </p>
          </div>
          <button
            className="rounded-md border border-[#3c4a42] bg-[#131315] px-3 py-2 text-[12px] font-medium leading-5 text-[#e5e1e4] transition-colors hover:border-[#4edea3] hover:text-emerald-400"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
          <section className="rounded-lg border border-[#27272a] bg-[#131315] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                  Risk Snapshot
                </p>
                <p className="mt-2 text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
                  {row.riskScore}
                  <span className="text-[13px] font-medium leading-[18px] text-[#bbcabf]">
                    /100
                  </span>
                </p>
              </div>
              <div className="rounded-full border border-[#3c4a42] bg-[#18181b] px-3 py-2 text-right">
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                  Critical
                </p>
                <p className="mt-1 text-lg font-semibold leading-7 text-[#ffb4ab]">
                  {row.criticalFindings}
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-[#27272a] bg-[#0c0c0e] p-3">
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                  Chain
                </p>
                <p className="mt-1 flex items-center gap-2 text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                  <DashboardIcon className="size-4 text-[#bbcabf]" name={row.chainIcon} />
                  {row.chain}
                </p>
              </div>
              <div className="rounded-md border border-[#27272a] bg-[#0c0c0e] p-3">
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                  Report Hash
                </p>
                <p className="mt-1 font-mono text-[13px] leading-5 text-[#e5e1e4]">
                  {row.reportHash}
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[#27272a] bg-[#131315] p-4">
            <div className="mb-4 flex items-center gap-2">
              <DashboardIcon className="size-4 text-emerald-400" name="shield" />
              <h3 className="text-[13px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#e5e1e4]">
                Secure Review Pipeline
              </h3>
            </div>
            <div className="space-y-4">
              {row.pipelineSteps.map((step) => (
                <div className="flex gap-3" key={step.label}>
                  <div
                    className={`mt-1 size-3 shrink-0 rounded-full ${
                      step.state === "completed"
                        ? "bg-emerald-400"
                        : step.state === "active"
                          ? "bg-[#ffb3af]"
                          : "bg-[#3c4a42]"
                    }`}
                  />
                  <div>
                    <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                      {step.label}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[#27272a] bg-[#131315] p-4">
            <div className="mb-4 flex items-center gap-2">
              <DashboardIcon className="size-4 text-[#bbcabf]" name="link" />
              <h3 className="text-[13px] font-semibold uppercase leading-5 tracking-[0.12em] text-[#e5e1e4]">
                Related Transactions
              </h3>
            </div>
            <div className="space-y-3">
              {row.transactions.map((transaction) => (
                <div
                  className="flex items-start justify-between rounded-md border border-[#27272a] bg-[#0c0c0e] p-3"
                  key={transaction.hash}
                >
                  <div>
                    <p className="text-[12px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      {transaction.direction}
                    </p>
                    <p className="mt-1 text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                      {transaction.label}
                    </p>
                    <p className="mt-1 font-mono text-[12px] leading-5 text-[#bbcabf]">
                      {transaction.hash}
                    </p>
                  </div>
                  <DashboardIcon className="mt-1 size-4 shrink-0 text-emerald-400" name="risk" />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="border-t border-[#27272a] px-5 py-4">
          {approved ? (
            <p className="mb-3 text-center text-[12px] leading-5 text-emerald-400">
              Verification approved for this demo entry.
            </p>
          ) : null}
          <div className="flex gap-3">
            <Link
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-[#3c4a42] bg-[#18181b] px-4 py-3 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-[#4edea3] hover:text-emerald-400"
              href="/dashboard/reports"
            >
              <DashboardIcon className="size-4" name="reports" />
              View Raw Report
            </Link>
            <button
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-[13px] font-bold leading-[18px] text-black shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-colors hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={approved}
              onClick={() => setApproved(true)}
              type="button"
            >
              <DashboardIcon className="size-4" name="shield" />
              {approved ? "Approved" : "Approve Verification"}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
