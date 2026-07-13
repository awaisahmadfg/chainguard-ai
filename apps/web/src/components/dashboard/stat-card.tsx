type StatCardProps = {
  label: string;
  suffix?: string;
  tone?: "default" | "danger";
  trend?: string;
  value: string;
};

export function StatCard({
  label,
  suffix,
  tone = "default",
  trend,
  value,
}: StatCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5 transition-colors hover:border-[#3f3f46]">
      {tone === "danger" ? (
        <div className="absolute right-0 top-0 size-16 rounded-bl-full bg-red-300/10 blur-xl" />
      ) : null}
      <p className="mb-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <h3
          className={`text-4xl font-semibold leading-[44px] tracking-[-0.02em] ${
            tone === "danger" ? "text-red-300" : "text-[#e5e1e4]"
          }`}
        >
          {value}
        </h3>
        {suffix ? (
          <span className="text-[13px] font-medium leading-[18px] text-[#bbcabf]">
            {suffix}
          </span>
        ) : null}
        {trend ? (
          <span
            className={`text-[13px] font-medium leading-[18px] ${
              tone === "danger" ? "text-red-300" : "text-emerald-400"
            }`}
          >
            {trend}
          </span>
        ) : null}
      </div>
    </article>
  );
}
