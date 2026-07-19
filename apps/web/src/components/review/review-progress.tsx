"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type PipelineStep = {
  id: string;
  label: string;
  progress: number;
};

const initialSteps: PipelineStep[] = [
  { id: "foundry-build", label: "Foundry build", progress: 0 },
  { id: "foundry-tests", label: "Foundry tests", progress: 0 },
  { id: "slither", label: "Slither scan", progress: 0 },
  { id: "rag", label: "RAG retrieval", progress: 0 },
  { id: "ai", label: "AI security review", progress: 0 },
];

type ReviewProgressProps = {
  reviewId: string;
};

export function ReviewProgress({ reviewId }: ReviewProgressProps) {
  const router = useRouter();
  const [steps, setSteps] = useState(initialSteps);
  const [isComplete, setIsComplete] = useState(false);
  const reportHref = `/dashboard/reports?review=${reviewId}`;

  useEffect(() => {
    let stepIndex = 0;
    const interval = window.setInterval(() => {
      setSteps((currentSteps) => {
        const nextSteps = currentSteps.map((step, index) => {
          if (index < stepIndex) {
            return { ...step, progress: 100 };
          }

          if (index === stepIndex) {
            const nextProgress = Math.min(step.progress + 20, 100);
            return { ...step, progress: nextProgress };
          }

          return step;
        });

        const activeStep = nextSteps[stepIndex];
        if (activeStep && activeStep.progress >= 100) {
          stepIndex += 1;
          if (stepIndex >= nextSteps.length) {
            window.clearInterval(interval);
            setIsComplete(true);
          }
        }

        return nextSteps;
      });
    }, 500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isComplete) {
      return;
    }

    const timeout = window.setTimeout(() => {
      router.push(reportHref);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [isComplete, reportHref, router]);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <header className="mb-8">
        <p className="font-mono text-[13px] leading-5 text-emerald-400">
          Review ID: {reviewId}
        </p>
        <h1 className="mt-2 text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
          {isComplete ? "Analysis Complete" : "Analysis in Progress"}
        </h1>
        <p className="mt-2 text-base leading-6 text-[#bbcabf]">
          {isComplete
            ? "Pipeline finished. Opening your risk report…"
            : "Running security tools and AI review pipeline. This may take a few minutes."}
        </p>
      </header>

      <div className="space-y-4 rounded-lg border border-[#2a2a2c] bg-[#131315] p-6">
        {steps.map((step) => (
          <div key={step.id}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                {step.label}
              </span>
              <span className="font-mono text-[13px] leading-5 text-[#bbcabf]">
                {step.progress}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#201f22]">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${step.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {isComplete ? (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded bg-emerald-500 px-6 py-3 text-[13px] font-medium leading-[18px] text-black transition-colors hover:bg-emerald-300"
            href={reportHref}
          >
            View Report Now
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded border border-[#3f3f46] px-6 py-3 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-[#bbcabf]"
            href="/dashboard"
          >
            Back to Dashboard
          </Link>
        </div>
      ) : null}
    </div>
  );
}
