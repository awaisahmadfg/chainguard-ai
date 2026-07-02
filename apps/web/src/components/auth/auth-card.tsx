import type { ReactNode } from "react";

type AuthCardProps = {
  children: ReactNode;
};

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="group relative w-full max-w-[440px] overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e] p-8 transition-colors duration-300 hover:border-[#3f3f46]">
      {children}
    </div>
  );
}
