"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const TOUR_STORAGE_KEY = "cg_demo_tour_dismissed";

const steps = [
  { href: "/dashboard/reviews/new", label: "1. Start a review" },
  { href: "/dashboard/reports", label: "2. Read the AI report" },
  { href: "/dashboard/chat", label: "3. Ask the security agent" },
  { href: "/dashboard/registry", label: "4. Browse risk registry" },
] as const;

export function DemoTourBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(TOUR_STORAGE_KEY);
    setVisible(dismissed !== "1");
  }, []);

  function dismiss() {
    window.localStorage.setItem(TOUR_STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section className="mb-6 overflow-hidden rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-[#131315] to-[#131315] p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
            Judge / first-run tour
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-[-0.01em] text-[#e5e1e4]">
            Click through the AI review loop in under 3 minutes
          </h2>
          <p className="mt-1 text-sm leading-6 text-[#bbcabf]">
            Auth and findings are demo-mocked so you can poke every screen
            without a backend. Type in chat, submit a review, export CSV/PDF.
          </p>
        </div>
        <button
          className="self-start rounded border border-[#3f3f46] px-3 py-1.5 text-[12px] font-medium text-[#bbcabf] transition-colors hover:text-[#e5e1e4] lg:self-center"
          onClick={dismiss}
          type="button"
        >
          Dismiss
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {steps.map((step) => (
          <Link
            className="rounded-md border border-[#3c4a42] bg-[#09090b]/80 px-3 py-2 text-[12px] font-medium text-[#e5e1e4] transition-colors hover:border-emerald-500/50 hover:text-emerald-300"
            href={step.href}
            key={step.href}
          >
            {step.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
