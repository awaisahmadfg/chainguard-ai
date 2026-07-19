"use client";

import { useRef, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import { ChainSelector } from "./chain-selector";
import type { NewReviewValues } from "./review-schemas";
import { SourceTypeTabs } from "./source-type-tabs";

type SourceTargetCardProps = {
  files: File[];
  form: UseFormReturn<NewReviewValues>;
  onFilesChange: (files: File[]) => void;
  uploadError?: string;
};

export function SourceTargetCard({
  files,
  form,
  onFilesChange,
  uploadError,
}: SourceTargetCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const sourceType = form.watch("sourceType");
  const {
    control,
    formState: { errors },
    register,
    setValue,
  } = form;

  function handleSourceTypeChange(nextSourceType: NewReviewValues["sourceType"]) {
    setValue("sourceType", nextSourceType, { shouldValidate: true });
  }

  function handleFileSelect(selectedFiles: FileList | null) {
    if (!selectedFiles) {
      onFilesChange([]);
      return;
    }

    const solidityFiles = Array.from(selectedFiles).filter((file) =>
      file.name.toLowerCase().endsWith(".sol"),
    );
    onFilesChange(solidityFiles);
  }

  return (
    <div className="rounded-lg border border-[#2a2a2c] bg-[#131315] p-5">
      <div className="mb-6 border-b border-[#353437] pb-4">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
          Source Target
        </h2>
        <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
          Select where the contract code resides.
        </p>
      </div>

      <SourceTypeTabs onChange={handleSourceTypeChange} value={sourceType} />

      {sourceType === "github" ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              className="block text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]"
              htmlFor="repositoryUrl"
            >
              Repository URL
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bbcabf]">
                <DashboardIcon className="size-4" name="link" />
              </span>
              <input
                className={`w-full rounded-md border bg-[#09090b] py-2.5 pl-10 pr-4 font-mono text-[13px] leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:ring-1 ${
                  errors.repositoryUrl
                    ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                    : "border-[#2a2a2c] focus:border-emerald-500 focus:ring-emerald-500"
                }`}
                id="repositoryUrl"
                placeholder="https://github.com/organization/repo"
                type="text"
                {...register("repositoryUrl")}
              />
            </div>
            {errors.repositoryUrl ? (
              <p className="text-xs leading-5 text-red-300">
                {errors.repositoryUrl.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              className="block text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]"
              htmlFor="branch"
            >
              Branch / Commit Hash{" "}
              <span className="font-normal text-[#bbcabf]">(Optional)</span>
            </label>
            <input
              className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-2.5 font-mono text-[13px] leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              id="branch"
              placeholder="main"
              type="text"
              {...register("branch")}
            />
          </div>
        </div>
      ) : null}

      {sourceType === "address" ? (
        <div className="space-y-2">
          <label
            className="block text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]"
            htmlFor="contractAddress"
          >
            Contract Address
          </label>
          <input
            className={`w-full rounded-md border bg-[#09090b] px-4 py-2.5 font-mono text-[13px] leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:ring-1 ${
              errors.contractAddress
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-[#2a2a2c] focus:border-emerald-500 focus:ring-emerald-500"
            }`}
            id="contractAddress"
            placeholder="0x..."
            type="text"
            {...register("contractAddress")}
          />
          {errors.contractAddress ? (
            <p className="text-xs leading-5 text-red-300">
              {errors.contractAddress.message}
            </p>
          ) : null}
        </div>
      ) : null}

      {sourceType === "upload" ? (
        <div className="mb-6 space-y-4">
          <input
            accept=".sol"
            className="hidden"
            multiple
            onChange={(event) => handleFileSelect(event.target.files)}
            ref={fileInputRef}
            type="file"
          />
          <div
            className={`rounded-lg border border-dashed p-5 transition-colors ${
              uploadError
                ? "border-red-400/50"
                : isDragging
                  ? "border-emerald-500/60 bg-emerald-500/5"
                  : "border-[#2a2a2c]"
            }`}
            onDragLeave={(event) => {
              event.preventDefault();
              setIsDragging(false);
            }}
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDrop={(event) => {
              event.preventDefault();
              setIsDragging(false);
              handleFileSelect(event.dataTransfer.files);
            }}
          >
            <button
              className="flex w-full flex-col items-center justify-center py-6 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              type="button"
            >
              <DashboardIcon className="mb-4 size-10 text-[#bbcabf]" name="upload" />
              <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                Drag &amp; drop Solidity files here
              </p>
              <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
                or click to browse local `.sol` files
              </p>
              <span className="mt-4 rounded border border-[#3c4a42] bg-[#353437] px-4 py-2 text-[13px] font-medium leading-[18px] text-[#e5e1e4] transition-colors hover:border-emerald-500/50">
                Select Files
              </span>
            </button>
          </div>
          {files.length > 0 ? (
            <ul className="space-y-2 rounded-md border border-[#2a2a2c] bg-[#09090b] p-4">
              {files.map((file) => (
                <li
                  className="font-mono text-[13px] leading-5 text-[#bbcabf]"
                  key={`${file.name}-${file.size}`}
                >
                  {file.name}
                </li>
              ))}
            </ul>
          ) : null}
          {uploadError ? (
            <p className="text-xs leading-5 text-red-300">{uploadError}</p>
          ) : null}
        </div>
      ) : null}

      <Controller
        control={control}
        name="chain"
        render={({ field }) => (
          <div className={sourceType === "upload" ? "" : "mt-2"}>
            <ChainSelector onChange={field.onChange} value={field.value} />
          </div>
        )}
      />
    </div>
  );
}
