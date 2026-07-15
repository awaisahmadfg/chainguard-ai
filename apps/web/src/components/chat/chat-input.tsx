"use client";

import type { RefObject } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";
import type { SuggestedPrompt } from "@/lib/mock-chat";

type ChatInputProps = {
  inputRef: RefObject<HTMLTextAreaElement | null>;
  onChipSelect: (prompt: SuggestedPrompt) => void;
  onChange: (value: string) => void;
  onSend: () => void;
  value: string;
  suggestions: SuggestedPrompt[];
};

export function ChatInput({
  inputRef,
  onChipSelect,
  onChange,
  onSend,
  value,
  suggestions,
}: ChatInputProps) {
  return (
    <div className="border-t border-[#3c4a42]/30 bg-[#0c0c0e] px-6 py-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            className="inline-flex items-center gap-1 rounded-full border border-[#27272a] bg-[#18181b] px-3 py-1.5 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:border-[#3f3f46] hover:text-[#e5e1e4]"
            key={suggestion.label}
            onClick={() => onChipSelect(suggestion)}
            type="button"
          >
            {suggestion.label}
          </button>
        ))}
      </div>

      <div className="relative flex items-end gap-2 rounded-lg border border-[#27272a] bg-[#09090b] p-1 transition-all focus-within:border-emerald-500 focus-within:shadow-[0_0_8px_rgba(16,185,129,0.1)]">
        <textarea
          className="max-h-32 min-h-[44px] w-full resize-none border-none bg-transparent px-3 py-3 text-sm leading-5 text-[#e5e1e4] outline-none placeholder:text-[#bbcabf]"
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              onSend();
            }
          }}
          placeholder="Ask the AI about specific lines, vulnerabilities, or optimization..."
          ref={inputRef}
          rows={1}
          value={value}
        />
        <button
          aria-label="Send message"
          className="mb-0.5 mr-0.5 flex size-10 shrink-0 items-center justify-center rounded bg-emerald-500 text-black transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!value.trim()}
          onClick={onSend}
          type="button"
        >
          <DashboardIcon className="size-5" name="play" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between px-1">
        <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
          Press Enter to send, Shift+Enter for new line
        </span>
        <span className="flex items-center gap-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
          <DashboardIcon className="size-3 text-emerald-400" name="shield" />
          Secure Audit Protocol
        </span>
      </div>
    </div>
  );
}
