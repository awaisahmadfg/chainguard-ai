import type { ReactNode } from "react";
import { GridBackground } from "@/components/ui/grid-background";

type AuthShellProps = {
  children: ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-4 py-4 text-[#e5e1e4] selection:bg-emerald-500 selection:text-emerald-950 sm:px-6">
      <GridBackground />

      <section className="relative z-10 flex min-h-[calc(100vh-2rem)] items-center justify-center">
        {children}
      </section>
    </main>
  );
}
