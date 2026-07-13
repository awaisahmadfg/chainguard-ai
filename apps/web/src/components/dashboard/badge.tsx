export type BadgeTone = "critical" | "medium" | "neutral" | "success";

const toneClassName: Record<BadgeTone, string> = {
  critical: "border-red-300/25 bg-red-300/10 text-red-300",
  medium: "border-amber-300/25 bg-amber-300/10 text-amber-300",
  neutral: "border-[#3f3f46] bg-[#3f3f46]/30 text-[#bbcabf]",
  success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
};

type BadgeProps = {
  children: string;
  tone: BadgeTone;
};

export function Badge({ children, tone }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-1 font-mono text-[13px] leading-5 ${toneClassName[tone]}`}
    >
      {children}
    </span>
  );
}
