import type { BadgeTone } from "@/components/dashboard/badge";

export type Review = {
  chain: string;
  project: string;
  reviewedAt: string;
  risk: string;
  riskTone: BadgeTone;
  status: string;
  statusTone: BadgeTone;
};

export const reviews: Review[] = [
  {
    chain: "Ethereum",
    project: "DeFi Protocol Alpha",
    reviewedAt: "2 hours ago",
    risk: "9.2 Critical",
    riskTone: "critical",
    status: "Verified",
    statusTone: "success",
  },
  {
    chain: "Polygon",
    project: "NFT Marketplace Beta",
    reviewedAt: "5 hours ago",
    risk: "4.5 Medium",
    riskTone: "medium",
    status: "Pending",
    statusTone: "neutral",
  },
  {
    chain: "Arbitrum",
    project: "Yield Aggregator v2",
    reviewedAt: "1 day ago",
    risk: "1.2 Low",
    riskTone: "success",
    status: "Verified",
    statusTone: "success",
  },
  {
    chain: "Cross-chain",
    project: "Bridge Contract Omega",
    reviewedAt: "2 days ago",
    risk: "8.8 High",
    riskTone: "critical",
    status: "Action Req",
    statusTone: "critical",
  },
];
