import type { DashboardIconName } from "@/components/dashboard/dashboard-icons";

export type RegistryStatus =
  | "Monitored"
  | "Needs Review"
  | "Quarantined"
  | "Verified";

export type RegistryContractRow = {
  address: string;
  chain: string;
  chainIcon: DashboardIconName;
  displayName: string;
  lastReviewed: string;
  reportHash: string;
  riskLabel: "Low" | "Medium" | "High";
  riskScore: number;
  status: RegistryStatus;
};

export type RegistryPipelineStep = {
  detail: string;
  label: string;
  state: "active" | "completed" | "pending";
};

export type RegistryTransaction = {
  direction: "Inbound" | "Outbound";
  hash: string;
  label: string;
};

export type RegistryContractDetail = RegistryContractRow & {
  criticalFindings: number;
  pipelineSteps: RegistryPipelineStep[];
  transactions: RegistryTransaction[];
};

export const registryContracts: RegistryContractDetail[] = [
  {
    address: "0x1f98...e241",
    chain: "Ethereum",
    chainIcon: "ethereum",
    criticalFindings: 0,
    displayName: "Uniswap V3 Factory",
    lastReviewed: "12 min ago",
    pipelineSteps: [
      {
        detail: "Ownership and proxy layout validated against the verified source bundle.",
        label: "Source validation",
        state: "completed",
      },
      {
        detail: "RAG evidence matched against prior approvals and contract lineage.",
        label: "Risk correlation",
        state: "active",
      },
      {
        detail: "Awaiting registrar signature before public verification.",
        label: "Registry attestation",
        state: "pending",
      },
    ],
    reportHash: "0x8c21...7f31",
    riskLabel: "Low",
    riskScore: 12,
    status: "Monitored",
    transactions: [
      {
        direction: "Inbound",
        hash: "0xf31a...9b7c",
        label: "Liquidity factory sync",
      },
      {
        direction: "Outbound",
        hash: "0x91dd...44c2",
        label: "Verification beacon",
      },
    ],
  },
  {
    address: "0x8a2f...4b9c",
    chain: "Base",
    chainIcon: "base",
    criticalFindings: 3,
    displayName: "Vault Core Proxy",
    lastReviewed: "15 min ago",
    pipelineSteps: [
      {
        detail: "Proxy implementation and upgrade authority are not aligned with policy.",
        label: "Source validation",
        state: "completed",
      },
      {
        detail: "One critical write path requires manual containment review.",
        label: "Risk correlation",
        state: "active",
      },
      {
        detail: "Automatic quarantine placed on the registry record.",
        label: "Registry attestation",
        state: "pending",
      },
    ],
    reportHash: "0xf1c2...8aa9",
    riskLabel: "High",
    riskScore: 98,
    status: "Quarantined",
    transactions: [
      {
        direction: "Inbound",
        hash: "0x42ab...91ce",
        label: "Governance relay",
      },
      {
        direction: "Outbound",
        hash: "0x82de...003d",
        label: "Containment flag",
      },
    ],
  },
  {
    address: "Proxy Admin",
    chain: "Arbitrum",
    chainIcon: "arbitrum",
    criticalFindings: 1,
    displayName: "Proxy Admin",
    lastReviewed: "1 day ago",
    pipelineSteps: [
      {
        detail: "Administrative privileges are limited to the multisig vault.",
        label: "Source validation",
        state: "completed",
      },
      {
        detail: "Upgrade controls require a fresh human review for the next release.",
        label: "Risk correlation",
        state: "active",
      },
      {
        detail: "Manual follow-up is pending on the review queue.",
        label: "Registry attestation",
        state: "pending",
      },
    ],
    reportHash: "0x3c11...be18",
    riskLabel: "Medium",
    riskScore: 45,
    status: "Needs Review",
    transactions: [
      {
        direction: "Outbound",
        hash: "0x5a12...7f33",
        label: "Upgrade authorization",
      },
      {
        direction: "Inbound",
        hash: "0xf0c9...00ab",
        label: "Review request",
      },
    ],
  },
  {
    address: "0x6b8e...21f0",
    chain: "Polygon",
    chainIcon: "polygon",
    criticalFindings: 0,
    displayName: "Treasury Router",
    lastReviewed: "3 days ago",
    pipelineSteps: [
      {
        detail: "Config drift is absent and all verification anchors are stable.",
        label: "Source validation",
        state: "completed",
      },
      {
        detail: "No policy exceptions detected in the registry comparison pass.",
        label: "Risk correlation",
        state: "completed",
      },
      {
        detail: "Ready for periodic verification refresh.",
        label: "Registry attestation",
        state: "pending",
      },
    ],
    reportHash: "0x71aa...52c1",
    riskLabel: "Low",
    riskScore: 18,
    status: "Verified",
    transactions: [
      {
        direction: "Inbound",
        hash: "0x0d5a...11fe",
        label: "Treasury reconciliation",
      },
      {
        direction: "Outbound",
        hash: "0x08ad...8ef4",
        label: "Verification receipt",
      },
    ],
  },
  {
    address: "0x44bc...90d1",
    chain: "Ethereum",
    chainIcon: "ethereum",
    criticalFindings: 2,
    displayName: "Reward Distributor",
    lastReviewed: "6 hours ago",
    pipelineSteps: [
      {
        detail: "Reward calculations passed static policy checks.",
        label: "Source validation",
        state: "completed",
      },
      {
        detail: "Anomaly scan shows elevated but non-critical variance.",
        label: "Risk correlation",
        state: "active",
      },
      {
        detail: "Awaiting cycle-end confirmation.",
        label: "Registry attestation",
        state: "pending",
      },
    ],
    reportHash: "0x2190...7bc8",
    riskLabel: "Medium",
    riskScore: 61,
    status: "Monitored",
    transactions: [
      {
        direction: "Inbound",
        hash: "0x7e99...1d20",
        label: "Reward snapshot",
      },
      {
        direction: "Outbound",
        hash: "0x9a4c...c3f1",
        label: "Monitoring feed",
      },
    ],
  },
];
