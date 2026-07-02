import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold tracking-tight">ChainGuard AI</h1>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          AI-powered smart contract review, RAG security analysis, and on-chain
          risk registry.
        </p>
        <Link
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-emerald-500 px-6 text-sm font-semibold text-black transition hover:bg-emerald-400"
          href="/signup"
        >
          Open Sign Up
        </Link>
      </div>
    </main>
  );
}
