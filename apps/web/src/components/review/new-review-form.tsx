"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ExecutionPipelineCard } from "./execution-pipeline-card";
import { newReviewSchema, type NewReviewValues } from "./review-schemas";
import { SourceTargetCard } from "./source-target-card";

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

  async function onSubmit(values: NewReviewValues) {
    if (values.sourceType === "upload" && files.length === 0) {
      setUploadError("Select at least one Solidity file.");
      return;
    }

    setUploadError("");
    await new Promise((resolve) => window.setTimeout(resolve, 600));

    const reviewId = crypto.randomUUID().slice(0, 8);
    console.log("Review submitted:", { ...values, files: files.map((f) => f.name) });
    router.push(`/dashboard/reviews/${reviewId}/progress`);
  }

  return (
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
  );
}
