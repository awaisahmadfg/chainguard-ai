"use client";

import { useMemo, useState } from "react";
import {
  ragCitations,
  reportFindings,
  type ReportFinding,
} from "@/lib/mock-report";

const tabs = [
  { id: "ai", label: "AI Findings" },
  { id: "slither", label: "Slither Findings" },
  { id: "foundry", label: "Foundry Tests" },
  { id: "rag", label: "RAG Citations" },
] as const;

const severityClasses = {
  critical: "border-[#7f1d1d] bg-[#1a0f10] text-[#ffb4ab]",
  high: "border-[#5b1d1c] bg-[#181113] text-[#fc7c78]",
  medium: "border-[#6b4d27] bg-[#191411] text-[#f3b57a]",
  low: "border-[#334155] bg-[#101113] text-[#bbcabf]",
} as const;

function ConfidenceBar({ finding }: { finding: ReportFinding }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#27272a]">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${finding.confidence}%` }}
        />
      </div>
      <span className="text-[11px] text-[#bbcabf]">{finding.confidence}%</span>
    </div>
  );
}

export function FindingsTable() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("ai");

  const visibleRows = useMemo(() => {
    if (activeTab === "rag") {
      return [];
    }

    return reportFindings;
  }, [activeTab]);

  return (
    <section className="overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e]">
      <div className="flex overflow-x-auto border-b border-[#27272a]">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;

          return (
            <button
              className={`whitespace-nowrap px-4 py-3 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-colors ${
                isActive
                  ? "border-b-2 border-emerald-500 bg-[#353437]/30 text-emerald-500"
                  : "text-[#bbcabf] hover:text-[#e5e1e4]"
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="px-5 py-6 sm:px-6">
        {activeTab === "rag" ? (
          <div className="grid gap-3">
            {ragCitations.map((item) => (
              <article
                className="rounded-lg border border-[#27272a] bg-[#101113] p-4"
                key={item.citation}
              >
                <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                  {item.citation}
                </p>
                <p className="mt-1 text-[13px] leading-5 text-[#bbcabf]">
                  {item.note}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-[#27272a]">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#27272a] bg-[#101113]">
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      Severity
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      Function
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      Line
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      Issue
                    </th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                      Confidence
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm leading-5 text-[#e5e1e4]">
                  {visibleRows.map((finding, index) => (
                    <tr
                      className={`transition-colors hover:bg-[#101113] ${
                        index === visibleRows.length - 1
                          ? ""
                          : "border-b border-[#27272a]"
                      }`}
                      key={`${finding.functionName}-${finding.line}`}
                    >
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded border px-2 py-1 text-[13px] font-mono leading-5 ${severityClasses[finding.severity]}`}
                        >
                          {finding.severity.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-4 font-medium">{finding.functionName}</td>
                      <td className="px-4 py-4 font-mono text-[#bbcabf]">
                        {finding.line}
                      </td>
                      <td className="px-4 py-4 text-[#bbcabf]">{finding.issue}</td>
                      <td className="px-4 py-4">
                        <ConfidenceBar finding={finding} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
