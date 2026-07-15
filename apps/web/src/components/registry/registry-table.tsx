"use client";

import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import type { RegistryContractDetail } from "@/lib/mock-registry";

type RegistryTableProps = {
  onRowSelect: (row: RegistryContractDetail) => void;
  rows: RegistryContractDetail[];
  selectedAddress: string | null;
};

function getRiskTone(riskLabel: RegistryContractDetail["riskLabel"]) {
  if (riskLabel === "High") {
    return "text-[#ffb4ab]";
  }

  if (riskLabel === "Medium") {
    return "text-[#ffb3af]";
  }

  return "text-emerald-400";
}

function getStatusClasses(status: RegistryContractDetail["status"]) {
  if (status === "Quarantined") {
    return "border-[#ffb4ab]/40 bg-[#ffb4ab]/10 text-[#ffb4ab]";
  }

  if (status === "Needs Review") {
    return "border-[#ffb3af]/40 bg-[#ffb3af]/10 text-[#ffb3af]";
  }

  if (status === "Verified") {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
  }

  return "border-[#3c4a42] bg-[#18181b] text-[#bbcabf]";
}

export function RegistryTable({
  onRowSelect,
  rows,
  selectedAddress,
}: RegistryTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-[#27272a]">
          <thead>
            <tr className="bg-[#131315] text-left text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
              <th className="px-5 py-4">Contract Address</th>
              <th className="px-5 py-4">Chain</th>
              <th className="px-5 py-4">Risk Score</th>
              <th className="px-5 py-4">Last Reviewed</th>
              <th className="px-5 py-4">Report Hash</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1c1b1d]">
            {rows.map((row) => {
              const selected = row.address === selectedAddress;

              return (
                <tr
                  className={`cursor-pointer transition-colors ${
                    selected
                      ? "border-l-2 border-l-emerald-400 bg-emerald-500/5"
                      : "hover:bg-[#201f22]"
                  }`}
                  key={`${row.address}-${row.reportHash}`}
                  onClick={() => onRowSelect(row)}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-md border border-[#3c4a42] bg-[#18181b] text-emerald-400">
                        <DashboardIcon className="size-4" name="risk" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                          {row.displayName}
                        </p>
                        <p className="mt-1 font-mono text-[12px] leading-5 text-[#bbcabf]">
                          {row.address}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#e5e1e4]">
                      <DashboardIcon className="size-4 text-[#bbcabf]" name={row.chainIcon} />
                      <span className="text-[13px] font-medium leading-[18px]">
                        {row.chain}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col">
                      <span
                        className={`text-[13px] font-semibold leading-[18px] ${
                          row.riskScore >= 80 ? "text-[#ffb4ab]" : getRiskTone(row.riskLabel)
                        }`}
                      >
                        {row.riskScore}/100
                      </span>
                      <span className="text-[12px] leading-5 text-[#bbcabf]">
                        {row.riskLabel} risk
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[13px] leading-[18px] text-[#e5e1e4]">
                    {row.lastReviewed}
                  </td>
                  <td className="px-5 py-4 font-mono text-[13px] leading-[18px] text-[#bbcabf]">
                    {row.reportHash}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-medium leading-5 ${getStatusClasses(
                        row.status,
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
