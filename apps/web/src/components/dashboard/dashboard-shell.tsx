"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { DemoTourBanner } from "@/components/demo/demo-tour-banner";
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
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className="relative z-10 flex min-h-screen flex-col lg:pl-[240px]">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="relative flex min-h-full flex-1 flex-col overflow-y-auto bg-[#09090b]">
          <GridBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col px-4 py-6 sm:px-6 lg:py-8">
            <DemoTourBanner />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
