"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { registryContracts, type RegistryContractDetail } from "@/lib/mock-registry";
import { ContractDetailDrawer } from "./contract-detail-drawer";
import { RegistryTable } from "./registry-table";

const chainOptions = ["All Chains", "Ethereum", "Arbitrum", "Base", "Polygon"] as const;
const riskOptions = ["Any Risk Level", "Low", "Medium", "High"] as const;

function normalizeFilter(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export function RiskRegistry() {
  const [chainFilter, setChainFilter] = useState<(typeof chainOptions)[number]>(
    "All Chains",
  );
  const [open, setOpen] = useState(true);
  const [riskFilter, setRiskFilter] = useState<(typeof riskOptions)[number]>(
    "Any Risk Level",
  );
  const [selectedRow, setSelectedRow] = useState<RegistryContractDetail>(
    registryContracts[0],
  );

  const filteredRows = useMemo(() => {
    return registryContracts.filter((row) => {
      const matchesChain =
        chainFilter === "All Chains" || row.chain === chainFilter;
      const matchesRisk =
        riskFilter === "Any Risk Level" ||
        row.riskLabel === riskFilter;

      return matchesChain && matchesRisk;
    });
  }, [chainFilter, riskFilter]);

  function handleRowSelect(row: RegistryContractDetail) {
    setSelectedRow(row);
    setOpen(true);
  }

  return (
    <div className={`flex w-full flex-col gap-6 ${open ? "md:pr-[420px]" : ""}`}>
      <section className="flex w-full flex-col gap-4 border-b border-[#3c4a42] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#3c4a42] bg-[#131315] px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
            GLOBAL INDEX
          </span>
          <h1 className="mt-3 text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
            Risk Registry
          </h1>
          <p className="mt-2 text-base leading-6 text-[#bbcabf]">
            Track verified contracts, quarantine high-risk deployments, and keep
            the on-chain security ledger ready for review.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md border border-[#3c4a42] bg-[#18181b] px-4 py-3 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-[#4edea3] hover:text-emerald-400"
            type="button"
          >
            <DashboardIcon className="size-4" name="reports" />
            Export CSV
          </button>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-[13px] font-bold leading-[18px] text-black shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-colors hover:bg-emerald-300"
            href="/dashboard/reviews/new"
          >
            <DashboardIcon className="size-4" name="review" />
            New Audit
          </Link>
        </div>
      </section>

      <section className="flex w-full flex-col gap-4 rounded-lg border border-[#27272a] bg-[#0c0c0e] p-4">
        <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">
          <label className="block">
            <span className="mb-2 block text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
              Chain
            </span>
            <select
              className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-3 text-[13px] leading-5 text-[#e5e1e4] outline-none transition-colors focus:border-emerald-500"
              onChange={(event) =>
                setChainFilter(event.target.value as (typeof chainOptions)[number])
              }
              value={chainFilter}
            >
              {chainOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
              Risk Level
            </span>
            <select
              className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-3 text-[13px] leading-5 text-[#e5e1e4] outline-none transition-colors focus:border-emerald-500"
              onChange={(event) =>
                setRiskFilter(event.target.value as (typeof riskOptions)[number])
              }
              value={riskFilter}
            >
              {riskOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-end justify-start lg:justify-end">
            <p className="rounded-md border border-[#27272a] bg-[#131315] px-4 py-3 text-[13px] leading-5 text-[#bbcabf]">
              Showing 1-10 of 1,248
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[12px] font-medium leading-5 text-[#bbcabf]">
          <DashboardIcon className="size-4 text-emerald-400" name="shield" />
          <span>Filters update the visible subset of the registry ledger.</span>
          <span className="text-[#e5e1e4]">
            {normalizeFilter(chainFilter)} / {normalizeFilter(riskFilter)}
          </span>
        </div>
      </section>

      <RegistryTable
        onRowSelect={handleRowSelect}
        rows={filteredRows}
        selectedAddress={selectedRow.address}
      />

      <section className="flex w-full items-center justify-between rounded-lg border border-[#27272a] bg-[#0c0c0e] px-4 py-3">
        <button
          className="rounded-md border border-[#27272a] px-4 py-2 text-[13px] font-medium leading-[18px] text-[#bbcabf] transition-colors hover:border-[#3c4a42] hover:text-[#e5e1e4] disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          {["1", "2", "3", "4", "5"].map((page, index) => (
            <button
              className={`size-9 rounded-md border text-[13px] font-medium leading-5 transition-colors ${
                index === 0
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                  : "border-[#27272a] bg-[#131315] text-[#bbcabf] hover:border-[#3c4a42] hover:text-[#e5e1e4]"
              }`}
              key={page}
              type="button"
            >
              {page}
            </button>
          ))}
        </div>
        <button
          className="rounded-md border border-[#27272a] px-4 py-2 text-[13px] font-medium leading-[18px] text-[#bbcabf] transition-colors hover:border-[#3c4a42] hover:text-[#e5e1e4]"
          type="button"
        >
          Next
        </button>
      </section>

      <footer className="mt-auto w-full border-t border-[#3c4a42] pt-4">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#e5e1e4]">
            © 2024 ChainGuard AI. Secure Audit Protocol.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="cursor-pointer text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]">
              Privacy Policy
            </span>
            <span className="cursor-pointer text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]">
              Terms of Service
            </span>
            <span className="cursor-pointer text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]">
              Security Whitepaper
            </span>
          </div>
        </div>
      </footer>

      <ContractDetailDrawer
        onClose={() => setOpen(false)}
        open={open}
        row={selectedRow}
      />
    </div>
  );
}
