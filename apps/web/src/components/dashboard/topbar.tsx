"use client";

import { DashboardIcon } from "./dashboard-icons";

type TopbarProps = {
  onMenuClick: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[#3c4a42] bg-[#131315]/95 px-4 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-4">
        <button
          aria-label="Open navigation menu"
          className="rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400 lg:hidden"
          onClick={onMenuClick}
          type="button"
        >
          <DashboardIcon className="size-5" name="menu" />
        </button>
        <h2 className="truncate text-xl font-semibold leading-7 text-[#e5e1e4]">
          Workspace Alpha
        </h2>
        <div className="hidden items-center rounded border border-[#3f3f46] bg-[#18181b] px-3 py-1 md:flex">
          <span className="mr-2 size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-mono text-[13px] leading-5 text-[#e5e1e4]">
            0x7F...3B92 connected
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Wallet"
          className="rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400"
          type="button"
        >
          <DashboardIcon className="size-5" name="wallet" />
        </button>
        <button
          aria-label="Notifications"
          className="relative rounded p-2 text-[#bbcabf] transition-colors hover:bg-[#201f22] hover:text-emerald-400"
          type="button"
        >
          <DashboardIcon className="size-5" name="bell" />
          <span
            aria-hidden="true"
            className="absolute right-2 top-1.5 size-2 rounded-full bg-red-300"
          />
        </button>
        <div
          aria-label="User profile"
          className="ml-1 flex size-8 items-center justify-center rounded-full border border-[#3c4a42] bg-[#2a2a2c] text-[11px] font-semibold text-emerald-400"
          role="img"
        >
          <DashboardIcon className="size-4" name="user" />
        </div>
      </div>
    </header>
  );
}
