"use client";

import { usePathname, useRouter } from "next/navigation";
import { clearClientSession } from "@/lib/auth-session";
import { dashboardNavItems, isNavItemActive } from "@/lib/dashboard-nav";
import { DashboardIcon } from "./dashboard-icons";
import { NavItem } from "./nav-item";

type SidebarProps = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleEndDemo() {
    clearClientSession();
    onMobileClose();
    router.push("/");
  }

  return (
    <>
      {mobileOpen ? (
        <button
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onMobileClose}
          type="button"
        />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[240px] flex-col border-r border-[#3c4a42] bg-[#0e0e10] py-6 transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="mb-8 flex items-center gap-3 px-6">
          <div className="flex size-8 shrink-0 items-center justify-center rounded bg-emerald-500 text-[#003824]">
            <DashboardIcon className="size-5" name="shield" />
          </div>
          <div className="min-w-0">
            <h1 className="whitespace-nowrap text-lg font-bold leading-tight tracking-tight text-emerald-400">
              ChainGuard AI
            </h1>
            <p className="mt-0.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
              Demo session
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {dashboardNavItems.map((item) => (
            <NavItem
              active={isNavItemActive(pathname, item)}
              href={item.href}
              icon={item.icon}
              key={item.href}
              label={item.label}
              onNavigate={onMobileClose}
            />
          ))}
        </nav>

        <div className="mt-auto space-y-3 px-6">
          <button
            className="w-full rounded border border-[#3c4a42] px-3 py-2 text-left text-[12px] font-medium text-[#bbcabf] transition-colors hover:border-emerald-500/40 hover:text-emerald-300"
            onClick={handleEndDemo}
            type="button"
          >
            End demo / Sign out
          </button>
          <div className="flex items-center gap-3 border-t border-[#3c4a42] py-4">
            <div className="relative size-8 overflow-hidden rounded-full border border-[#3c4a42] bg-[#201f22]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.35)_0%,transparent_50%,rgba(16,185,129,0.15)_100%)]" />
              <div className="absolute bottom-1 left-1 right-1 top-2 border border-emerald-500/30" />
            </div>
            <div>
              <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                Auditor 0x4B
              </p>
              <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
                Level 4 Clearance
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
