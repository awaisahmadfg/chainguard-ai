import type { DashboardIconName } from "@/components/dashboard/dashboard-icons";

export type ReviewChainId = "ethereum" | "polygon" | "arbitrum" | "base";

export type ReviewChain = {
  icon: DashboardIconName;
  id: ReviewChainId;
  label: string;
};

export const reviewChains: ReviewChain[] = [
  { icon: "ethereum", id: "ethereum", label: "Ethereum" },
  { icon: "polygon", id: "polygon", label: "Polygon" },
  { icon: "arbitrum", id: "arbitrum", label: "Arbitrum" },
  { icon: "base", id: "base", label: "Base" },
];
