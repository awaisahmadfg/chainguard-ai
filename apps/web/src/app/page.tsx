import Link from "next/link";
import { EnterDemoButton } from "@/components/demo/enter-demo-button";
import { GridBackground } from "@/components/ui/grid-background";

const pillars = [
  {
    title: "AI security agent",
    body: "Ask about reentrancy, fixes, and contract logic with cited SWC-style reasoning in the chat workspace.",
  },
  {
    title: "Tool-shaped pipeline",
    body: "Foundry → Slither → RAG → AI review progress screen shows how agents call security tools end-to-end.",
  },
  {
    title: "Risk registry",
    body: "Turn review output into a browsable on-chain-style ledger judges can filter, export, and approve.",
  },
] as const;

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090b] text-[#e5e1e4]">
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 size-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:py-14">
        <header className="flex items-center justify-between gap-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
            ChainGuard AI
          </p>
          <Link
            className="text-sm font-medium text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
            href="/login"
          >
            Sign in
          </Link>
        </header>

        <section className="mt-16 flex flex-1 flex-col justify-center pb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bbcabf]">
            AI smart-contract review agent
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#e5e1e4] sm:text-6xl sm:leading-[1.05]">
            Ship safer contracts before auditors ever open the repo.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#bbcabf] sm:text-lg">
            Web3 teams wait days for security feedback. ChainGuard AI is a
            clickable prototype of an agent that runs analysis tooling, retrieves
            security knowledge, writes a risk report, and chats through fixes.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EnterDemoButton className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-500 px-7 text-sm font-semibold text-black transition hover:bg-emerald-400 disabled:opacity-70" />
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#3f3f46] px-7 text-sm font-semibold text-[#e5e1e4] transition hover:border-[#52525b] hover:bg-[#18181b]"
              href="/signup"
            >
              Create account flow
            </Link>
          </div>

          <p className="mt-4 text-[12px] leading-5 text-[#71717a]">
            One click unlocks the full product path for judges — no real wallet
            or API keys required.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                className="rounded-lg border border-[#27272a] bg-[#0c0c0e]/80 p-5"
                key={pillar.title}
              >
                <h2 className="text-sm font-semibold text-[#e5e1e4]">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#bbcabf]">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>

          <ol className="mt-10 max-w-2xl space-y-2 border-t border-[#27272a] pt-8 text-sm leading-6 text-[#bbcabf]">
            <li>
              <span className="font-medium text-[#e5e1e4]">Suggested path:</span>{" "}
              Enter live demo → New Review → watch pipeline → open report → ask
              chat → browse registry.
            </li>
            <li>
              Findings and auth are mocked for this prototype; the product story
              and interaction design are what to evaluate.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
