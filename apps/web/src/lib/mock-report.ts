export type SeverityLevel = "critical" | "high" | "medium" | "low";

export type ReportFinding = {
  confidence: number;
  functionName: string;
  issue: string;
  line: string;
  severity: SeverityLevel;
};

export type AnalysisMetadata = {
  latency: string;
  model: string;
  status: string;
  tokens: string;
};

export type ToolStatus = {
  name: string;
  status: string;
};

export type ReportSeverity = {
  count: number;
  label: string;
  tone: SeverityLevel;
};

export const reportAddress = "0x7a…9F2";

export const reportSeverityCards: ReportSeverity[] = [
  { count: 3, label: "Critical", tone: "critical" },
  { count: 8, label: "High", tone: "high" },
  { count: 12, label: "Medium", tone: "medium" },
  { count: 45, label: "Low", tone: "low" },
];

export const reportMetadata: AnalysisMetadata = {
  latency: "14.2s",
  model: "cg-v4.2.1-opus",
  status: "COMPLETED",
  tokens: "12,408",
};

export const reportTools: ToolStatus[] = [
  { name: "Slither", status: "Completed" },
  { name: "Mythril", status: "Completed" },
  { name: "Foundry", status: "Completed" },
];

export const reportFindings: ReportFinding[] = [
  {
    confidence: 95,
    functionName: "withdraw()",
    issue: "Reentrancy vulnerability in token transfer",
    line: "L142",
    severity: "critical",
  },
  {
    confidence: 88,
    functionName: "initialize()",
    issue: "Missing access control on initialization",
    line: "L45",
    severity: "high",
  },
];

export const ragCitations = [
  {
    citation: "Slither: reentrancy-eth in withdraw()",
    note: "Matched the low-level external call pattern before balance mutation.",
  },
  {
    citation: "Foundry test: shouldPreventReentrantWithdraw",
    note: "Reproduces a double-withdraw attempt against the same vault state.",
  },
  {
    citation: "RAG source: OpenZeppelin ReentrancyGuard docs",
    note: "Recommended mitigation aligns with the standard guard pattern.",
  },
];

export const recommendedFixDiff = [
  "- function withdraw(uint amount) public {",
  "-     require(balances[msg.sender] >= amount);",
  '-     (bool success, ) = msg.sender.call{value: amount}("");',
  "-     require(success);",
  "-     balances[msg.sender] -= amount;",
  "- }",
  "",
  "+ function withdraw(uint amount) public nonReentrant {",
  "+     require(balances[msg.sender] >= amount);",
  "+     balances[msg.sender] -= amount;",
  '+     (bool success, ) = msg.sender.call{value: amount}("");',
  "+     require(success);",
  "+ }",
];
