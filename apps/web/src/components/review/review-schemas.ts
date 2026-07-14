import { z } from "zod";
import { reviewChains } from "@/lib/review-chains";

export const sourceTypes = ["upload", "github", "address"] as const;

const chainIds = reviewChains.map((chain) => chain.id) as [
  "ethereum",
  "polygon",
  "arbitrum",
  "base",
];

export const newReviewSchema = z
  .object({
    sourceType: z.enum(sourceTypes),
    repositoryUrl: z.string().trim(),
    branch: z.string().trim(),
    contractAddress: z.string().trim(),
    chain: z.enum(chainIds),
    runFoundryBuild: z.boolean(),
    runFoundryTests: z.boolean(),
    runSlither: z.boolean(),
    runRagAnalysis: z.boolean(),
    publishOnChain: z.boolean(),
  })
  .superRefine((values, context) => {
    if (values.sourceType === "github") {
      if (!values.repositoryUrl) {
        context.addIssue({
          code: "custom",
          message: "Repository URL is required.",
          path: ["repositoryUrl"],
        });
        return;
      }

      try {
        const url = new URL(values.repositoryUrl);
        if (!url.hostname.includes("github.com")) {
          context.addIssue({
            code: "custom",
            message: "Must be a GitHub repository URL.",
            path: ["repositoryUrl"],
          });
        }
      } catch {
        context.addIssue({
          code: "custom",
          message: "Enter a valid URL.",
          path: ["repositoryUrl"],
        });
      }
    }

    if (values.sourceType === "address") {
      if (!values.contractAddress) {
        context.addIssue({
          code: "custom",
          message: "Contract address is required.",
          path: ["contractAddress"],
        });
        return;
      }

      if (!/^0x[a-fA-F0-9]{40}$/.test(values.contractAddress)) {
        context.addIssue({
          code: "custom",
          message: "Enter a valid Ethereum address.",
          path: ["contractAddress"],
        });
      }
    }
  });

export type NewReviewValues = z.infer<typeof newReviewSchema>;
export type SourceType = (typeof sourceTypes)[number];
