import { reportSeverityCards } from "@/lib/mock-report";

export function SeverityCards() {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {reportSeverityCards.map((item) => (
        <article
          className="group relative overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e] p-4 transition-colors hover:border-[#3f3f46]"
          key={item.label}
        >
          {item.tone === "critical" ? (
            <div className="absolute right-0 top-0 size-16 -translate-y-8 translate-x-8 rounded-bl-full bg-[#ffb4ab]/10 transition-colors group-hover:bg-[#ffb4ab]/20" />
          ) : null}
          {item.tone === "high" ? (
            <div className="absolute right-0 top-0 size-16 -translate-y-8 translate-x-8 rounded-bl-full bg-[#fc7c78]/10 transition-colors group-hover:bg-[#fc7c78]/20" />
          ) : null}
          <div className="relative mb-1 text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
            {item.count}
          </div>
          <div
            className={`relative text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] ${
              item.tone === "critical"
                ? "text-[#ffb4ab]"
                : item.tone === "high"
                  ? "text-[#fc7c78]"
                  : "text-[#bbcabf]"
            }`}
          >
            {item.label}
          </div>
        </article>
      ))}
    </section>
  );
}
