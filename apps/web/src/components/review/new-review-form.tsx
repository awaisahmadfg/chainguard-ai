"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ExecutionPipelineCard } from "./execution-pipeline-card";
import { newReviewSchema, type NewReviewValues } from "./review-schemas";
import { SourceTargetCard } from "./source-target-card";

const DEMO_GITHUB = "https://github.com/OpenZeppelin/openzeppelin-contracts";
const DEMO_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

export function NewReviewForm() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState("");

  const form = useForm<NewReviewValues>({
    defaultValues: {
      sourceType: "github",
      repositoryUrl: "",
      branch: "main",
      contractAddress: "",
      chain: "ethereum",
      runFoundryBuild: true,
      runFoundryTests: true,
      runSlither: true,
      runRagAnalysis: true,
      publishOnChain: false,
    },
    mode: "onChange",
    resolver: zodResolver(newReviewSchema),
  });

  const sourceType = form.watch("sourceType");
  const canSubmit =
    form.formState.isValid &&
    (sourceType !== "upload" || files.length > 0);

  function loadDemoSample() {
    setUploadError("");
    setFiles([]);
    form.reset({
      sourceType: "github",
      repositoryUrl: DEMO_GITHUB,
      branch: "master",
      contractAddress: DEMO_ADDRESS,
      chain: "ethereum",
      runFoundryBuild: true,
      runFoundryTests: true,
      runSlither: true,
      runRagAnalysis: true,
      publishOnChain: false,
    });
  }

  async function onSubmit(values: NewReviewValues) {
    if (values.sourceType === "upload" && files.length === 0) {
      setUploadError("Select at least one Solidity file.");
      return;
    }

    setUploadError("");
    await new Promise((resolve) => window.setTimeout(resolve, 450));

    const reviewId = crypto.randomUUID().slice(0, 8);
    router.push(`/dashboard/reviews/${reviewId}/progress`);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[#bbcabf]">
          First time? Load a demo sample repo and hit Start Review — no typing
          needed.
        </p>
        <button
          className="shrink-0 rounded border border-emerald-500/40 bg-[#09090b] px-4 py-2 text-[13px] font-medium text-emerald-300 transition-colors hover:border-emerald-400 hover:text-emerald-200"
          onClick={loadDemoSample}
          type="button"
        >
          Load demo sample
        </button>
      </div>

      <form
        className="grid w-full grid-cols-12 items-start gap-4"
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="col-span-12 lg:col-span-8">
          <SourceTargetCard
            files={files}
            form={form}
            onFilesChange={(nextFiles) => {
              setFiles(nextFiles);
              if (nextFiles.length > 0) {
                setUploadError("");
              }
            }}
            uploadError={uploadError}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ExecutionPipelineCard
            canSubmit={canSubmit}
            form={form}
            isSubmitting={form.formState.isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}
