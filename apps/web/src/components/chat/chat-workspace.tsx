"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildMockReply,
  initialMessages,
  suggestedPrompts,
  type ChatMessage,
  type SuggestedPrompt,
} from "@/lib/mock-chat";
import { ChatInput } from "./chat-input";
import { ChatMessages } from "./chat-messages";
import { CodeContextPanel } from "./code-context-panel";

export function ChatWorkspace() {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  function sendMessage(messageText: string) {
    const trimmed = messageText.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        content: trimmed,
        id: `user-${Date.now()}`,
        role: "user",
      },
      buildMockReply(trimmed),
    ]);
    setDraft("");
    inputRef.current?.focus();
  }

  function handleChipSelect(prompt: SuggestedPrompt) {
    if (!draft.trim()) {
      setDraft(prompt.prompt);
      inputRef.current?.focus();
      return;
    }

    sendMessage(prompt.prompt);
  }

  return (
    <div className="-mx-4 -my-6 flex h-[calc(100vh-4rem)] min-h-0 overflow-hidden sm:-mx-6 lg:-my-8">
      <div className="flex min-h-0 w-full flex-1 flex-col md:flex-row">
        <section className="flex min-h-0 min-w-0 flex-1 flex-col border-[#3c4a42]/30 bg-[#09090b]/80 backdrop-blur-sm md:border-r">
          <header className="flex items-center justify-between gap-4 border-b border-[#3c4a42]/30 bg-[#09090b] px-6 py-4">
            <h1 className="text-2xl font-bold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
              Ask About This Contract
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
                System Active
              </span>
            </div>
          </header>

          <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />

          <ChatInput
            inputRef={inputRef}
            onChange={setDraft}
            onChipSelect={handleChipSelect}
            onSend={() => sendMessage(draft)}
            suggestions={suggestedPrompts}
            value={draft}
          />
        </section>

        <CodeContextPanel />
      </div>
    </div>
  );
}
