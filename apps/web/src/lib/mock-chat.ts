export type ChatRole = "assistant" | "user";

export type ChatCodeBlock = {
  language: string;
  lines: string[];
};

export type ChatMessage = {
  citation?: string;
  codeBlock?: ChatCodeBlock;
  content: string;
  id: string;
  role: ChatRole;
  title?: string;
};

export type SuggestedPrompt = {
  label: string;
  prompt: string;
};

const vulnerableWithdrawFunds = [
  "function withdrawFunds() external {",
  "  uint256 amount = balances[msg.sender];",
  "  (bool success, ) = msg.sender.call{value: amount}(\"\");",
  "  require(success, \"Transfer failed\");",
  "  balances[msg.sender] = 0;",
  "}",
];

const saferWithdrawFunds = [
  "function withdrawFunds() external nonReentrant {",
  "  uint256 amount = balances[msg.sender];",
  "  balances[msg.sender] = 0;",
  "  (bool success, ) = msg.sender.call{value: amount}(\"\");",
  "  require(success, \"Transfer failed\");",
  "}",
];

function createMessageId(prefix: string) {
  const randomId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2, 10);

  return `${prefix}-${randomId}`;
}

export const suggestedPrompts: SuggestedPrompt[] = [
  {
    label: "Is this contract vulnerable to reentrancy?",
    prompt: "Is this contract vulnerable to reentrancy?",
  },
  {
    label: "How do I fix this high-risk finding?",
    prompt: "How do I fix this high-risk finding?",
  },
  {
    label: "Summarize contract logic",
    prompt: "Summarize contract logic",
  },
];

export const initialMessages: ChatMessage[] = [
  {
    content:
      "Analyzing contract 0x7a2...3f9. Context loaded. How can I assist with your security review?",
    id: "initial-analysis",
    role: "assistant",
  },
  {
    content:
      "Explain the potential vulnerability in the withdrawFunds() function.",
    id: "initial-user-question",
    role: "user",
  },
  {
    citation: "Citation: SWC-107 (Reentrancy)",
    codeBlock: {
      language: "solidity",
      lines: [
        "function withdrawFunds(uint _amount) public {",
        "    require(balances[msg.sender] >= _amount);",
        "    // VULNERABILITY: External call before state update",
        '    (bool sent, ) = msg.sender.call{value: _amount}("");',
        '    require(sent, "Failed to send Ether");',
        "    balances[msg.sender] -= _amount; // State update",
        "}",
      ],
    },
    content:
      "The contract updates the user's balance after sending the Ether, violating the Checks-Effects-Interactions pattern.",
    id: "initial-answer",
    role: "assistant",
    title: "Reentrancy Vulnerability",
  },
];

export function buildMockReply(prompt: string): ChatMessage {
  const normalized = prompt.toLowerCase();

  if (normalized.includes("summarize")) {
    return {
      citation: "Citation SWC-107",
      content:
        "High-risk reentrancy in withdrawFunds() lets an attacker re-enter before the balance is cleared. Move state updates before the external call and keep a reentrancy guard in place.",
      id: createMessageId("reply"),
      role: "assistant",
      title: "Summary",
    };
  }

  if (normalized.includes("fix") || normalized.includes("high-risk")) {
    return {
      citation: "Citation SWC-107",
      codeBlock: {
        language: "solidity",
        lines: saferWithdrawFunds,
      },
      content:
        "Apply checks-effects-interactions: clear the balance first, then make the external transfer, and protect the function with nonReentrant.",
      id: createMessageId("reply"),
      role: "assistant",
      title: "Recommended Fix",
    };
  }

  return {
    citation: "Citation SWC-107",
    codeBlock: {
      language: "solidity",
      lines: vulnerableWithdrawFunds,
    },
    content:
      "withdrawFunds() performs an external call before zeroing the balance. That allows a malicious receiver to re-enter the vault and withdraw repeatedly before state changes land.",
    id: createMessageId("reply"),
    role: "assistant",
    title: "Reentrancy Vulnerability",
  };
}
