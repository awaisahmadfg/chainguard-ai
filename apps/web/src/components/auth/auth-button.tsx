import type { ReactNode } from "react";
import Link from "next/link";

type AuthButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  type?: "button" | "submit";
};

export function AuthButton({
  children,
  className = "",
  href,
  type = "button",
  variant = "primary",
}: AuthButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "bg-emerald-500 py-3 text-black hover:opacity-90"
      : "border border-[#27272a] bg-transparent py-2.5 text-[#e5e1e4] hover:border-[#3f3f46] hover:bg-[#18181b]";
  const sharedClassName = `flex w-full items-center justify-center gap-2 rounded px-4 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-all ${variantClassName} ${className}`;

  if (href) {
    return (
      <Link className={sharedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} type={type}>
      {children}
    </button>
  );
}
