"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

type CodeLine = {
  highlight?: boolean;
  number: number;
  text: string;
};

const vaultSolLines: CodeLine[] = [
  { number: 1, text: "// SPDX-License-Identifier: MIT" },
  { number: 2, text: "pragma solidity ^0.8.0;" },
  { number: 3, text: "" },
  { number: 4, text: "contract Vault {" },
  { number: 5, text: "    mapping(address => uint) public balances;" },
  { number: 6, text: "" },
  { number: 7, text: "    function deposit() public payable {" },
  { number: 8, text: "        balances[msg.sender] += msg.value;" },
  { number: 9, text: "    }" },
  { number: 10, text: "" },
  {
    highlight: true,
    number: 11,
    text: "    function withdrawFunds(uint _amount) public {",
  },
  {
    highlight: true,
    number: 12,
    text: "        require(balances[msg.sender] >= _amount);",
  },
  {
    highlight: true,
    number: 13,
    text: '        (bool sent, ) = msg.sender.call{value: _amount}("");',
  },
  {
    highlight: true,
    number: 14,
    text: '        require(sent, "Failed to send Ether");',
  },
  {
    highlight: true,
    number: 15,
    text: "        balances[msg.sender] -= _amount;",
  },
  { highlight: true, number: 16, text: "    }" },
  { number: 17, text: "}" },
];

export function CodeContextPanel() {
  const [copied, setCopied] = useState(false);
  const [downloadLabel, setDownloadLabel] = useState(
    "Download Annotated Report",
  );

  async function handleCopy() {
    const source = vaultSolLines.map((line) => line.text).join("\n");
    await navigator.clipboard.writeText(source);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function handleDownload() {
    const content = [
      "ChainGuard AI — Annotated Report (demo)",
      "File: contracts/Vault.sol",
      "Finding: Reentrancy in withdrawFunds",
      "",
      ...vaultSolLines.map(
        (line) =>
          `${String(line.number).padStart(2, " ")}${line.highlight ? " !" : "  "} ${line.text}`,
      ),
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "vault-annotated-report.txt";
    anchor.click();
    URL.revokeObjectURL(url);
    setDownloadLabel("Downloaded");
    window.setTimeout(
      () => setDownloadLabel("Download Annotated Report"),
      1500,
    );
  }

  return (
    <aside className="flex h-full min-h-0 w-full flex-col overflow-hidden border-[#3c4a42]/30 bg-[#0c0c0e] md:w-[400px] md:shrink-0 md:border-l">
      <header className="flex items-center justify-between border-b border-[#3c4a42]/30 bg-[#09090b] px-6 py-4">
        <h3 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#e5e1e4]">
          Context: Vault.sol
        </h3>
        <span className="rounded border border-[#ffb4ab] bg-[#ffb4ab]/10 px-2 py-0.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#ffb4ab]">
          1 High-Risk
        </span>
      </header>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#09090b]">
        <div className="sticky top-0 flex items-center justify-between border-b border-[#27272a] bg-[#18181b] px-4 py-2">
          <span className="font-mono text-xs text-[#bbcabf]">
            contracts/Vault.sol
          </span>
          <div className="flex gap-2 text-[#bbcabf]">
            <button
              aria-label="Copy"
              className="transition-colors hover:text-[#e5e1e4]"
              onClick={handleCopy}
              type="button"
            >
              <DashboardIcon className="size-4" name="link" />
            </button>
          </div>
        </div>
        {copied ? (
          <p className="border-b border-[#27272a] px-4 py-1 text-[11px] text-emerald-400">
            Copied to clipboard
          </p>
        ) : null}

        <pre className="min-h-0 flex-1 overflow-auto px-4 py-4 font-mono text-xs leading-relaxed text-[#c8c6c9]">
          {vaultSolLines.map((line) =>
            line.highlight ? (
              <div
                className="relative -mx-4 border-y border-[#ffb4ab]/30 bg-[#ffb4ab]/10 px-4 py-0.5 text-[#ffb4ab]"
                key={line.number}
              >
                <span className="absolute bottom-0 left-0 top-0 w-1 bg-[#ffb4ab]" />
                <span className="mr-3 inline-block w-5 text-right font-bold">
                  {line.number}
                </span>
                {line.text}
              </div>
            ) : (
              <div key={line.number}>
                <span className="mr-3 inline-block w-5 text-right text-[#bbcabf]/50">
                  {String(line.number).padStart(2, " ")}
                </span>
                {line.text || " "}
              </div>
            ),
          )}
        </pre>
      </div>

      <div className="border-t border-[#27272a] bg-[#18181b] p-4">
        <button
          className="flex w-full items-center justify-center gap-2 rounded border border-[#27272a] px-4 py-2 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-[#3f3f46]"
          onClick={handleDownload}
          type="button"
        >
          <DashboardIcon className="size-4" name="download" />
          {downloadLabel}
        </button>
      </div>
    </aside>
  );
}
