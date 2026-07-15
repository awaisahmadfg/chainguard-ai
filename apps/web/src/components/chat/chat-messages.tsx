"use client";

import type { RefObject } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import type { ChatMessage } from "@/lib/mock-chat";

type ChatMessagesProps = {
  messages: ChatMessage[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
};

export function ChatMessages({
  messages,
  messagesEndRef,
}: ChatMessagesProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6">
      {messages.map((message) => (
        <article
          className={`flex max-w-3xl gap-4 ${
            message.role === "user"
              ? "flex-row-reverse self-end"
              : "self-start"
          }`}
          key={message.id}
        >
          <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded border border-[#3c4a42] bg-[#2a2a2c] text-emerald-400">
            <DashboardIcon
              className="size-4"
              name={message.role === "user" ? "user" : "ai"}
            />
          </div>

          <div
            className={`space-y-3 rounded-lg border p-4 text-sm leading-5 text-[#e5e1e4] ${
              message.role === "user"
                ? "rounded-tr-none border-[#3f3f46] bg-[#18181b]"
                : "rounded-tl-none border-[#27272a] bg-[#0c0c0e]"
            }`}
          >
            {message.title === "Reentrancy Vulnerability" ? (
              <p>
                The <code className="rounded bg-[#2a2a2c] px-1 py-0.5 font-mono text-[13px]">withdrawFunds()</code>{" "}
                function contains a critical{" "}
                <strong className="text-[#ffb4ab]">Reentrancy Vulnerability</strong>.
              </p>
            ) : null}

            <p className="whitespace-pre-wrap">{message.content}</p>

            {message.codeBlock ? (
              <div className="overflow-x-auto rounded border border-[#ffb4ab]/30 bg-black p-3 font-mono text-[13px] leading-5 text-[#bbcabf]">
                <pre>
                  <code>
                    {message.codeBlock.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </code>
                </pre>
              </div>
            ) : null}

            {message.citation ? (
              <div className="mt-2 flex items-center gap-2 border-t border-[#27272a] pt-2">
                <DashboardIcon className="size-4 text-[#bbcabf]" name="reports" />
                <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
                  {message.citation}
                </span>
              </div>
            ) : null}
          </div>
        </article>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
