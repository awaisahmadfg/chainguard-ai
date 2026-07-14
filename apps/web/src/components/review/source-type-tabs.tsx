import type { SourceType } from "./review-schemas";

const sourceTabs: { id: SourceType; label: string }[] = [
  { id: "upload", label: "Upload Files" },
  { id: "github", label: "GitHub Repository" },
  { id: "address", label: "Contract Address" },
];

type SourceTypeTabsProps = {
  onChange: (sourceType: SourceType) => void;
  value: SourceType;
};

export function SourceTypeTabs({ onChange, value }: SourceTypeTabsProps) {
  return (
    <div className="mb-6 flex w-fit rounded-md border border-[#353437] bg-[#09090b] p-1">
      {sourceTabs.map((tab) => (
        <button
          className={`rounded px-4 py-2 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-colors ${
            value === tab.id
              ? "border border-[#2a2a2c] bg-[#131315] text-emerald-400 shadow-sm"
              : "text-[#bbcabf] hover:text-[#e5e1e4]"
          }`}
          key={tab.id}
          onClick={() => onChange(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
