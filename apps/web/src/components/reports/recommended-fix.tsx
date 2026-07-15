import { recommendedFixDiff } from "@/lib/mock-report";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

export function RecommendedFix() {
  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <h3 className="mb-4 flex items-center gap-2 text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]">
        <DashboardIcon className="size-[18px] text-emerald-500" name="review" />
        Recommended Fix: Reentrancy
      </h3>
      <div className="overflow-x-auto rounded-md border border-[#3f3f46] bg-[#18181b] p-4 font-mono text-[13px] leading-5">
        <pre>
          <code>
            {recommendedFixDiff.map((line) => (
              <div
                className={
                  line.startsWith("+")
                    ? "text-emerald-400"
                    : line.startsWith("-")
                      ? "text-[#ffb4ab]"
                      : "text-[#bbcabf]"
                }
                key={line}
              >
                {line}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </section>
  );
}
