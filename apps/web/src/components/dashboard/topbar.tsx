"use client";

import { DashboardIcon } from "./dashboard-icons";

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
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
            className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] py-1.5 pl-10 pr-4 text-sm leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/70 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            placeholder="Search audits, Tx hashes..."
            type="search"
          />
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-1">
        <button
          aria-label="Wallet"
          className="rounded p-2 text-[#bbcabf] transition-colors hover:text-emerald-400"
          type="button"
        >
          <DashboardIcon className="size-5" name="wallet" />
        </button>
        <button
          aria-label="Notifications"
          className="relative rounded p-2 text-[#bbcabf] transition-colors hover:text-emerald-400"
          type="button"
        >
          <DashboardIcon className="size-5" name="bell" />
          <span
            aria-hidden="true"
            className="absolute right-2 top-1.5 size-2 rounded-full bg-[#ffb4ab]"
          />
        </button>
      </div>
    </header>
  );
}
