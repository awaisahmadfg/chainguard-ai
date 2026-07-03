import type { ReactNode } from "react";
import Link from "next/link";

type AuthButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  loadingLabel?: string;
  type?: "button" | "submit";
};

export function AuthButton({
  children,
  className = "",
  disabled = false,
  href,
  isLoading = false,
  loadingLabel = "Please wait...",
  type = "button",
  variant = "primary",
}: AuthButtonProps) {
  const isDisabled = disabled || isLoading;
  const variantClassName =
    variant === "primary"
      ? "bg-emerald-500 py-3 text-black hover:opacity-90"
      : "border border-[#27272a] bg-transparent py-2.5 text-[#e5e1e4] hover:border-[#3f3f46] hover:bg-[#18181b]";
  const disabledClassName = isDisabled
    ? "cursor-not-allowed opacity-60 hover:opacity-60"
    : "";
  const sharedClassName = `flex w-full items-center justify-center gap-2 rounded px-4 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-all ${variantClassName} ${disabledClassName} ${className}`;

  if (href) {
    return (
      <Link
        aria-disabled={isDisabled}
        className={sharedClassName}
        href={isDisabled ? "#" : href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} disabled={isDisabled} type={type}>
      {isLoading ? loadingLabel : children}
    </button>
  );
}
