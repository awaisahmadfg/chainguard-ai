import Link from "next/link";
import { EnterDemoButton } from "@/components/demo/enter-demo-button";
import { GridBackground } from "@/components/ui/grid-background";

const highlights = [
  {
    title: "AI review agent",
    body: "Foundry, Slither, and RAG-backed findings in one clickable flow.",
  },
  {
    title: "Risk reports",
    body: "Severity cards, recommended fixes, and exportable PDF output.",
  },
  {
    title: "On-chain registry",
    body: "Browse mock risk badges and contract verification states.",
  },
] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-[#e5e1e4] selection:bg-emerald-500 selection:text-emerald-950">
      <GridBackground />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-8">
        <header className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold tracking-[-0.01em] text-[#e5e1e4]">
            ChainGuard AI
          </p>
          <div className="flex items-center gap-3 text-sm">
            <Link
              className="text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
              href="/login"
            >
              Sign in
            </Link>
            <Link
              className="rounded-md border border-[#3f3f46] px-3 py-1.5 text-[#e5e1e4] transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
              href="/signup"
            >
              Sign up
            </Link>
          </div>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
            Hackathon prototype · demo mode
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#e5e1e4] sm:text-5xl sm:leading-[1.1]">
            ChainGuard AI
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium tracking-[-0.01em] text-[#e5e1e4]/90 sm:text-xl">
            Security feedback before the audit wait.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#bbcabf]">
            Click through an AI smart-contract review agent: submit a review,
            watch the pipeline, read findings, chat with the agent, and browse
            the risk registry — fully simulated in demo mode, no backend
            required.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <EnterDemoButton className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-500 px-6 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70" />
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#3f3f46] px-6 text-sm font-medium text-[#e5e1e4] transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
              href="/login"
            >
              Explore auth flow
            </Link>
          </div>

          <p className="mt-4 text-sm leading-6 text-[#86948a]">
            Tip: use <span className="text-[#bbcabf]">Enter live demo</span> to
            skip login. Or sign in with any email + 8+ character password.
          </p>
        </section>

        <section className="grid gap-4 border-t border-[#27272a] py-10 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title}>
              <h2 className="text-sm font-semibold text-[#e5e1e4]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#bbcabf]">{item.body}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
