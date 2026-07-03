"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { AuthIcon } from "./auth-icons";

type PasswordInputProps = {
  action?: ReactNode;
  icon?: "lock" | "refresh";
  id?: string;
  label: string;
  labelClassName?: string;
  name: string;
  placeholder: string;
  showLeadingIcon?: boolean;
};

export function PasswordInput({
  action,
  icon = "lock",
  id,
  label,
  labelClassName = "text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]",
  name,
  placeholder,
  showLeadingIcon = true,
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);
  const inputId = id ?? name;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className={labelClassName} htmlFor={inputId}>
          {label}
        </label>
        {action}
      </div>

      <div className="relative">
        {showLeadingIcon ? (
          <span
            aria-hidden="true"
            className="absolute left-3 top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center text-[#bbcabf]"
          >
            <AuthIcon className="size-[18px]" name={icon} />
          </span>
        ) : null}

        <input
          className={`h-10 w-full rounded border border-[#27272a] bg-[#09090b] py-2 text-sm leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 ${
            showLeadingIcon ? "pl-10" : "pl-4"
          } pr-10`}
          id={inputId}
          name={name}
          placeholder={placeholder}
          type={isVisible ? "text" : "password"}
        />

        <button
          aria-label={isVisible ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center text-[#bbcabf] transition-colors hover:text-emerald-400"
          onClick={() => setIsVisible((currentValue) => !currentValue)}
          type="button"
        >
          <AuthIcon
            className="size-5"
            name={isVisible ? "eye-off" : "eye"}
          />
        </button>
      </div>
    </div>
  );
}
