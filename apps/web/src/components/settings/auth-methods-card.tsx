"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

type MethodState = {
  connected: boolean;
  label: string;
};

export function AuthMethodsCard() {
  const [google, setGoogle] = useState<MethodState>({
    connected: false,
    label: "Google Connect",
  });
  const [wallet, setWallet] = useState<MethodState>({
    connected: false,
    label: "Web3 Connect Wallet",
  });

  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <div className="mb-5 border-b border-[#353437] pb-4">
        <div className="flex items-center gap-2">
          <DashboardIcon className="size-4 text-emerald-400" name="lock" />
          <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
            Authentication Methods
          </h2>
        </div>
        <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
          Email, social login, and wallet access controls.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-md border border-[#27272a] bg-[#131315] p-3">
          <div>
            <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
              Email
            </p>
            <p className="mt-1 text-[12px] leading-5 text-[#bbcabf]">Active</p>
          </div>
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-emerald-400">
            Connected
          </span>
        </div>

        <div className="flex items-center justify-between rounded-md border border-[#27272a] bg-[#131315] p-3">
          <div>
            <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
              Google
            </p>
            <p className="mt-1 text-[12px] leading-5 text-[#bbcabf]">
              Identity provider
            </p>
          </div>
          <button
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-[12px] font-medium leading-5 transition-colors ${
              google.connected
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-[#3c4a42] bg-[#18181b] text-[#e5e1e4] hover:border-[#4edea3] hover:text-emerald-400"
            }`}
            onClick={() =>
              setGoogle((current) => ({ ...current, connected: !current.connected }))
            }
            type="button"
          >
            <DashboardIcon className="size-4" name="link" />
            {google.connected ? "Connected" : google.label}
          </button>
        </div>

        <div className="flex items-center justify-between rounded-md border border-[#27272a] bg-[#131315] p-3">
          <div>
            <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
              Web3
            </p>
            <p className="mt-1 text-[12px] leading-5 text-[#bbcabf]">
              Wallet authentication
            </p>
          </div>
          <button
            className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-[12px] font-medium leading-5 transition-colors ${
              wallet.connected
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-[#3c4a42] bg-[#18181b] text-[#e5e1e4] hover:border-[#4edea3] hover:text-emerald-400"
            }`}
            onClick={() =>
              setWallet((current) => ({ ...current, connected: !current.connected }))
            }
            type="button"
          >
            <DashboardIcon className="size-4" name="wallet" />
            {wallet.connected ? "Connected" : wallet.label}
          </button>
        </div>
      </div>
    </section>
  );
}
