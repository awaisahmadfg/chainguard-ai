"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { GridBackground } from "@/components/ui/grid-background";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] text-[#e5e1e4]">
      <GridBackground />

      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="relative z-10 flex min-h-screen flex-col lg:pl-[240px]">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
