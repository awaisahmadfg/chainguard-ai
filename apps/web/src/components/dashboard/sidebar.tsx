"use client";

import { usePathname } from "next/navigation";
import {
  dashboardNavItems,
  dashboardSettingsNavItem,
  isNavItemActive,
} from "@/lib/dashboard-nav";
import { NavItem } from "./nav-item";

type SidebarProps = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();

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
        <div className="mb-8 px-6">
          <h1 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-emerald-400">
            ChainGuard AI
          </h1>
          <p className="mt-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
            Enterprise Security
          </p>
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

        <div className="px-4">
          <NavItem
            active={isNavItemActive(pathname, dashboardSettingsNavItem)}
            href={dashboardSettingsNavItem.href}
            icon={dashboardSettingsNavItem.icon}
            label={dashboardSettingsNavItem.label}
            onNavigate={onMobileClose}
          />
        </div>
      </aside>
    </>
  );
}
