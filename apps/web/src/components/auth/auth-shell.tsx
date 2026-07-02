import type { ReactNode } from "react";

type AuthShellProps = {
  children: ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] px-4 py-4 text-[#e5e1e4] selection:bg-emerald-500 selection:text-emerald-950 sm:px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <section className="relative z-10 flex min-h-[calc(100vh-2rem)] items-center justify-center">
        {children}
      </section>
    </main>
  );
}
