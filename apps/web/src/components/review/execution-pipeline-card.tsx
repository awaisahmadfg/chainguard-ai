"use client";

import type { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { PipelineCheckbox } from "./pipeline-checkbox";
import type { NewReviewValues } from "./review-schemas";

type ExecutionPipelineCardProps = {
  canSubmit: boolean;
  form: UseFormReturn<NewReviewValues>;
  isSubmitting: boolean;
};

export function ExecutionPipelineCard({
  canSubmit,
  form,
  isSubmitting,
}: ExecutionPipelineCardProps) {
  const { control } = form;

  return (
    <div className="lg:sticky lg:top-[88px]">
      <div className="rounded-lg border border-[#2a2a2c] bg-[#131315] p-5">
      <div className="mb-6 border-b border-[#353437] pb-4">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
          Execution Pipeline
        </h2>
        <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
          Select analysis vectors.
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <Controller
          control={control}
          name="runFoundryBuild"
          render={({ field }) => (
            <PipelineCheckbox
              checked={field.value}
              onChange={field.onChange}
            >
              Run Foundry build
            </PipelineCheckbox>
          )}
        />
        <Controller
          control={control}
          name="runFoundryTests"
          render={({ field }) => (
            <PipelineCheckbox
              checked={field.value}
              onChange={field.onChange}
            >
              Run Foundry tests
            </PipelineCheckbox>
          )}
        />
        <Controller
          control={control}
          name="runSlither"
          render={({ field }) => (
            <PipelineCheckbox checked={field.value} onChange={field.onChange}>
              Run Slither scan
            </PipelineCheckbox>
          )}
        />
        <Controller
          control={control}
          name="runRagAnalysis"
          render={({ field }) => (
            <PipelineCheckbox checked={field.value} onChange={field.onChange}>
              <span className="flex items-center gap-1">
                Run AI RAG analysis
                <DashboardIcon className="size-3.5 text-[#ffb3af]" name="sparkle" />
              </span>
            </PipelineCheckbox>
          )}
        />
        <Controller
          control={control}
          name="publishOnChain"
          render={({ field }) => (
            <PipelineCheckbox
              checked={field.value}
              onChange={field.onChange}
              showDivider
            >
              Publish result on-chain
            </PipelineCheckbox>
          )}
        />
      </div>

      <button
        className="flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 py-3 text-[13px] font-bold leading-[18px] tracking-[0.01em] text-black shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all hover:bg-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={!canSubmit || isSubmitting}
        type="submit"
      >
        <DashboardIcon className="size-5" name="play" />
        {isSubmitting ? "Starting..." : "Start Review"}
      </button>

      <div className="mt-4 flex items-center justify-center gap-1 text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf]">
        <DashboardIcon className="size-3.5" name="lock" />
        End-to-end encrypted execution
      </div>
    </div>
    </div>
  );
}
